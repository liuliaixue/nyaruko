const tag = "[daos/client]";
const configs = require('../configs');
const url = configs.dbURL;
const { logger } = require('../tools/logger.js');
const MongoClient = require('mongodb').MongoClient;

const options = { poolSize: 4, keepAlive: 120, connectTimeoutMS: 30000 };


let db;
MongoClient.connect(url, options, async function (err, database) {
    if (err) {
        logger.info(tag, '-----', "client failed to connect db " + url);
    } else {
        db = database;
    }
});

var Client = function (config) {
    this.collection = config.collection;
    console.log(this.collection)
};

Client.prototype.insertOne = function (query) {
    console.log(this)
    console.log(this.collection)
    logger.info(`[client.${this.collection}.add]`, query);
    let self = this;
    return new Promise(function (resovle, reject) {
        let collection = db.collection(self.collection);
        collection.insertOne(query, {}, function (err, result) {
            if (err) {
                reject('failed to save');
                return;
            }
            resovle(result.ops[0]);
        })
    });
};

Client.prototype.find = function (query) {
    logger.info(`[client.${this.collection}.find]`, query);
    let self = this;
    return new Promise(function (resovle, reject) {
        console.log(db)
        let collection = db.collection(self.collection);
        collection.find(query).toArray(function (err, result) {
            if (err) {
                reject(err);
                return;
            }
            resovle(result)
        });
    });
};

Client.prototype.findByID = function (query) {
    logger.info(`[client.${this.collection}.findByID]`, query);
    const id = query;
    let idString = utils.string.convertToObjectId(id);
    var queryObj = {
        _id: idString
    }
    let self = this;
    return new Promise(function (resovle, reject) {
        let collection = db.collection(self.collection);
        collection.find(queryObj).toArray(function (err, result) {
            if (err) {
                reject(err);
                return;
            }
            resovle(result[0])
        });
    });
}

Client.prototype.deleteOne = function (query) {
    logger.info(`[client.${this.collection}.delete]`, query);
    let self = this;
    return new Promise(function (resovle, reject) {
        let collection = db.collection(self.collection);
        collection.deleteOne(query, null, function (err, result) {
            if (err) {
                reject(err);
                return;
            }
            resovle(result);
        })
    });
};
Client.prototype.update = function (query) {

    logger.info(`[client.${this.collection}.update]`, query);
    let self = this;
    return new Promise(function (resovle, reject) {
        let collection = db.collection(self.collection);
        var doc = query;
        var queryObj = { _id: query._id };
        collection.update(queryObj, doc, null, function (err, result) {
            if (err) {
                reject(err);
                return;
            }
            resovle(result);
        })
    });
};

module.exports = Client;