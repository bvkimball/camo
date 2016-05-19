import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import RethinkDB from 'rethinkdb';
import { DatabaseClient } from './client';
import { isObject } from '../validate';
import { deepTraverse } from '../util';

let urlToPath = function(url) {
    if (url.indexOf('rethinkdb://') > -1) {
        return url.slice(12, url.length);
    }
    return url;
};

export class RethinkClient extends DatabaseClient {
    constructor(url, connection) {
        super(url);
        this._connection = connection;
    }

    save(collection, id, values) {
        return new Promise((resolve, reject) => {
            let table = RethinkDB.table(collection);

            // TODO: I'd like to just use update with upsert:true, but I'm
            // note sure how the query will work if id == null. Seemed to
            // have some problems before with passing null ids.
            if (id === null) {
                table.insert(values).run(this._connection, (error, result) => {
                    if (error) return reject(error);
                    if (!result.hasOwnProperty('insertedId') || result.insertedId === null) {
                        return reject(new Error('Save failed to generate ID for object.'));
                    }

                    return resolve(result.insertedId);
                });
            } else {
                table.get(id).update(values).run(this._connection, (error, result) => {
                    if (error) return reject(error);
                    return resolve();
                });
            }
        });
    }

    delete(collection, id) {
        return new Promise((resolve, reject) => {
            if (id === null) resolve(0);

            let table = RethinkDB.table(collection);
            table.get(id).delete({returnChanges: true}).run(this._connection, (error, result) => {
                if (error) return reject(error);
                return resolve(result.deleted);
            });
        });
    }

    deleteOne(collection, query) {
        return new Promise((resolve, reject) => {
            let table = RethinkDB.table(collection);
            table.filter(query).limit(1).delete({returnChanges: true}).run(this._connection, (error, result) => {
                if (error) return reject(error);
                return resolve(result.deleted);
            });
        });
    }

    deleteMany(collection, query) {
        return new Promise((resolve, reject) => {
            let table = RethinkDB.table(collection);
            table.filter(query).delete({returnChanges: true}).run(this._connection, (error, result) => {
                if (error) return reject(error);
                return resolve(result.deleted);
            });
        });
    }

    loadOne(collection, query) {
        return new Promise((resolve, reject) => {
            let table = RethinkDB.table(collection);
            table.filter(query).limit(1).run(this._connection, (error, result) => {
                if (error) return reject(error);
                return resolve(result[0]);
            });
        });
    }

    loadOneAndUpdate(collection, query, values, options) {
        if (!options) {
            options = {};
        }

        // Always return the updated object
        options.returnOriginal = false;

        return new Promise((resolve, reject) => {
            let table = RethinkDB.table(collection);
            table.insert(values, options).run(this._connection, (error, result) => {
                if (error) return reject(error);
                return resolve(result[0]);
            });
        });
    }

    loadOneAndDelete(collection, query, options) {
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => {
            let table = RethinkDB.table(collection);
            table.filter(query).limit(1).delete({returnChanges: true}).run(this._connection, (error, result) => {
                if (error) return reject(error);
                return resolve(result.deleted);
            });
        });
    }

    loadMany(collection, query, options) {
        
        return new Promise((resolve, reject) => {
            let table = RethinkDB.table(collection);
            table.filter(query).run(this._connection, (error, result) => {
                if (error) return reject(error);
                return resolve(result);
            });
        });
        
        /*
        return new Promise(function(resolve, reject) {
            var db = that._mongo.collection(collection);
            var cursor = db.find(query);
            if (typeof options.sort === 'string') {
                var sortOrder = 1;
                if (options.sort[0] === '-') {
                    sortOrder = -1;
                    options.sort = options.sort.substring(1);
                }
                var sortOptions = {};
                sortOptions[options.sort] = sortOrder;
                cursor = cursor.sort(sortOptions);
            }
            if (typeof options.skip === 'number') {
                cursor = cursor.skip(options.skip);
            }
            if (typeof options.limit === 'number') {
                cursor = cursor.limit(options.limit);
            }
            cursor.toArray(function(error, docs) {
                if (error) return reject(error);
                return resolve(docs);
            });
        });
        */
    }

    count(collection, query) {
        return new Promise((resolve, reject) => {
            let table = RethinkDB.table(collection);
            table.filter(query).count().run(this._connection, (error, result) => {
                if (error) return reject(error);
                return resolve(result);
            });
        });
    }

    createIndex(collection, field, options) {
        options = options || {};
        options.unique = options.unique || false;
        options.sparse = options.sparse || false;
        
        let table = RethinkDB.table(collection);
        table.indexCreate(field).run(this._connection, (error, result) => {
            if (error) return reject(error);
            return resolve(true);
        });
    }

    static connect(url, options) {
        if (typeof (options) === 'undefined') {
            options = { };
        }
        return new Promise((resolve, reject) => {
            RethinkDB.connect({ db: urlToPath(url) }, (error, client) =>{
                if (error) return reject(error);
                return resolve(new RethinkClient(url, client));
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            that._connection.close().then(resolve).error(reject);
        });
    }

    clearCollection(collection) {
        return new Promise((resolve, reject) => {
            RethinkDB.tableDrop(collection).run(this._connection, (error, result) => {
                if (error) return reject(error);
                return resolve(tables_dropped);
            });
        });
    }

    dropDatabase() {
        var that = this;
        return new Promise((resolve, reject) => {
            RethinkDB.dbDrop('superheroes').run(conn, (error, result) => {
                if (error) return reject(error);
                return resolve();
            });
        });
    }
    
    toCanonicalId(id) {
        return id;
    }

    // Native ids are the same as NeDB ids
    isNativeId(value) {
        return Number.isInteger(value);
    }

    nativeIdType() {
        return Number;
    }

    driver() {
        return this._connection;
    }
}
