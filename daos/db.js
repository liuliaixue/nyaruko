const tag = '';
const configs = require('../configs');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

const _dbURL = configs.dbURL;

const db = mongoose.createConnection(_dbURL);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to a db');
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

var _gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected throught ' + msg);
        callback();
    });
};

// For nodemon restarts
process.once('SIGUSR2', function () {
    _gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function () {
    _gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', function () {
    _gracefulShutdown('Heroku app termination', function () {
        process.exit(0);
    });
});

module.exports = {db};

