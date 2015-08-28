import { NeDbClient } from './clients/nedbclient';
import { MongoClient } from './clients/mongoclient';

let CLIENT = null;

export class Database {
    static connect(url, options){
        if (url.indexOf('nedb://') > -1) {
            // url example: nedb://path/to/file/folder
            this.connected = NeDbClient.connect(url, options).then(function(db) {
                CLIENT = db;
            });
        } else if(url.indexOf('mongodb://') > -1) {
            // url example: 'mongodb://localhost:27017/myproject'
            this.connected = MongoClient.connect(url, options).then(function(db) {
                CLIENT = db;
            });
        } else {
            this.connected = Promise.reject(new Error('Unrecognized DB connection url.'));
        }
    }
    static get connection(){
        if (CLIENT === null || CLIENT === undefined) {
            throw new Error('You must first call \'connect\' before loading/saving documents.');
        }
        return CLIENT;
    }
}

export function Connection(){
    if (CLIENT === null || CLIENT === undefined) {
        throw new Error('You must first call \'connect\' before loading/saving documents.');
    }
    return CLIENT;
}
