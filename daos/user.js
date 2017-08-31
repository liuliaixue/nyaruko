// let Client = require('./client.js');
// let client = new Client({ collection: 'user' });
// let {checkSchema }= require('./dao.tools.js');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
const {db }= require('./db');

const [STRING, NUMBER, ARRAY, OBJECT, MIXED] = ['String', 'Number', 'Array', 'Object', 'Mixed'];
const User = new Schema({
    name: STRING,
    email: STRING,
    password: STRING,
    phone: STRING,
    createdDate: STRING,
    point: NUMBER,
    card: ARRAY,
    address: OBJECT,
    remark: MIXED,
});

let user = db.model('users', User);

module.exports = user;

