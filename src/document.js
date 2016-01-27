import _ from 'lodash';
import { Connection as DB } from './db';
import { BaseDocument } from './base-document';
import { isSupportedType, isReferenceable, isArray, isEmbeddedDocument, isString } from './validate';
import deprecate from 'deprecate';
//var DB = require('./clients').getClient;

export class Document extends BaseDocument {
    constructor(name) {
        super();

        if (name !== undefined && name !== null) {
            deprecate('Document.constructor(name) - override Document.collectionName() instead');
            this._meta = {
                collection: name
            };
        }
    }

    // TODO: Is there a way to tell if a class is
    // a subclass of something? Until I find out
    // how, we'll be lazy use this.
    static documentClass() {
        return 'document';
    }

    documentClass() {
        return 'document';
    }

    get meta() {
        return this._meta;
    }

    set meta(meta) {
        this._meta = meta;
    }

    save() {
        var preValidatePromises = this._getHookPromises('preValidate');

        return Promise.all(preValidatePromises).then(() => {

            // Ensure we at least have defaults set

            // TODO: We already do this on .create(), so
            // should it really be done again?
            _.keys(this._schema).forEach((key) => {
                if (!(key in this._schema)) {
                    this[key] = this.getDefault(key);
                }
            });

            // Validate the assigned type, choices, and min/max
            this.validate();

            // Ensure all data types are saved in the same encodings
            this.canonicalize();

            // TODO: We should instead track what has changed and
            // only update those values. Maybe make this._changed
            // object to do this.
            // Also, this might be really slow for objects with
            // lots of references. Figure out a better way.
            var toUpdate = this._toData({
                _id: false
            });

            // Reference our objects
            _.keys(this._schema).forEach((key) => {
                // Never care about _id
                if (key === '_id') return;

                if (isReferenceable(this[key]) || // isReferenceable OR
                    (isArray(this[key]) && // isArray AND contains value AND value isReferenceable
                    this[key].length > 0 &&
                    isReferenceable(this[key][0]))) {

                    // Handle array of references (ex: { type: [MyObject] })
                    if (isArray(this[key])) {
                        toUpdate[key] = [];
                        this[key].forEach((v) => {
                            if (DB().isNativeId(v)) {
                                toUpdate[key].push(v);
                            } else {
                                toUpdate[key].push(v._id);
                            }
                        });
                    } else {
                        if (DB().isNativeId(this[key])) {
                            toUpdate[key] = this[key];
                        } else {
                            toUpdate[key] = this[key]._id;
                        }
                    }

                }
            });

            // Replace EmbeddedDocument references with just their data
            _.keys(this._schema).forEach((key) => {
                if (isEmbeddedDocument(this[key]) || // isEmbeddedDocument OR
                    (isArray(this[key]) && // isArray AND contains value AND value isEmbeddedDocument
                    this[key].length > 0 &&
                    isEmbeddedDocument(this[key][0]))) {

                    // Handle array of references (ex: { type: [MyObject] })
                    if (isArray(this[key])) {
                        toUpdate[key] = [];
                        this[key].forEach((v) => {
                            toUpdate[key].push(v._toData());
                        });
                    } else {
                        toUpdate[key] = this[key]._toData();
                    }

                }
            });

            return toUpdate;
        }).then((data) => {
            // TODO: hack?
            var postValidatePromises = [data].concat(this._getHookPromises('postValidate'));
            return Promise.all(postValidatePromises);
        }).then((prevData) => {
            var data = prevData[0];
            // TODO: hack?
            var preSavePromises = [data].concat(this._getHookPromises('preSave'));
            return Promise.all(preSavePromises);
        }).then((prevData) => {
            var data = prevData[0];
            return DB().save(this.collectionName(), this._id, data);
        }).then((id) => {
            if (this._id === null) {
                this._id = id;
            }
        }).then(() => {
            // TODO: hack?
            var postSavePromises = this._getHookPromises('postSave');
            return Promise.all(postSavePromises);
        }).then(() => {
            return this;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    delete() {
        var preDeletePromises = this._getHookPromises('preDelete');

        return Promise.all(preDeletePromises).then(() => {
            return DB().delete(this.collectionName(), this._id);
        }).then((deleteReturn) => {
            // TODO: hack?
            var postDeletePromises = [deleteReturn].concat(this._getHookPromises('postDelete'));
            return Promise.all(postDeletePromises);
        }).then((prevData) => {
            var deleteReturn = prevData[0];
            return deleteReturn;
        });
    }

    static deleteOne(query) {
        return DB().deleteOne(this.collectionName(), query);
    }

    static deleteMany(query) {
        if (query === undefined || query === null) {
            query = {};
        }

        return DB().deleteMany(this.collectionName(), query);
    }

    // TODO: Need options to specify whether references should be loaded
    static loadOne(query, options) {
        var populate = true;
        if (options && options.hasOwnProperty('populate')) {
            populate = options.populate;
        }

        return DB().loadOne(this.collectionName(), query)
            .then((data) => {
                if (!data) {
                    return null;
                }

                var doc = this._fromData(data);
                if (populate === true || (isArray(populate) && populate.length > 0)) {
                    return this.populate(doc, populate);
                }
                return doc;
            }).then((docs) => {
            if (docs) {
                return docs;
            }
            return null;
        });
    }

    static loadOneAndUpdate(query, values, options) {
        if (arguments.length < 2) {
            throw new Error('loadOneAndUpdate requires at least 2 arguments. Got ' + arguments.length + '.');
        }

        if (!options) {
            options = {};
        }

        var populate = true;
        if (options.hasOwnProperty('populate')) {
            populate = options.populate;
        }

        return DB().loadOneAndUpdate(this.collectionName(), query, values, options)
            .then((data) => {
                if (!data) {
                    return null;
                }

                var doc = this._fromData(data);
                if (populate) {
                    return this.populate(doc);
                }

                return doc;
            })
            .then((doc) => {
                if (doc) {
                    return doc;
                }
                return null;
            });
    }

    static loadOneAndDelete(query, options) {
        if (arguments.length < 1) {
            throw new Error('loadOneAndDelete requires at least 1 argument. Got ' + arguments.length + '.');
        }

        if (!options) {
            options = {};
        }

        return DB().loadOneAndDelete(this.collectionName(), query, options);
    }

    // TODO: Need options to specify whether references should be loaded
    static loadMany(query, options) {
        if (query === undefined || query === null) {
            query = {};
        }

        if (options === undefined || options === null) {
            // Populate by default
            options = {
                populate: true
            };
        }

        return DB().loadMany(this.collectionName(), query, options)
            .then((datas) => {
                var docs = this._fromData(datas);

                if (options.populate === true || (isArray(options.populate) && options.populate.length > 0)) {
                    return this.populate(docs, options.populate);
                }

                return docs;
            }).then((docs) => {
            // Ensure we always return an array
            return [].concat(docs);
        });
    }

    static count(query) {
        return DB().count(this.collectionName(), query);
    }

    static createIndexes() {
        if (this._indexesCreated) {
            return;
        }

        var instance = this._instantiate();

        _.keys(instance._schema).forEach((k) => {
            if (instance._schema[k].unique) {
                DB().createIndex(this.collectionName(), k, {
                    unique: true
                });
            }
        });

        this._indexesCreated = true;
    }

    static _fromData(datas) {
        var instances = super._fromData(datas);
        // This way we preserve the original structure of the data. Data
        // that was passed as an array is returned as an array, and data
        // passes as a single object is returned as single object
        var datasArray = [].concat(datas);
        var instancesArray = [].concat(instances);

        /*for (var i = 0; i < instancesArray.length; i++) {
            if (datasArray[i].hasOwnProperty('_id')) {
                instancesArray[i]._id = datasArray[i]._id;
            } else {
                instancesArray[i]._id = null;
            }
        }*/

        return instances;
    }

    static clearCollection() {
        return DB().clearCollection(this.collectionName());
    }

}
