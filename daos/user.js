let Client = require('./client.js');
let client = new Client({ collection: 'user' });
let {checkSchema }= require('./dao.tools.js');

const [STRING, NUMBER, ARRAY, OBJECT, MIXED] = ['String', 'Number', 'Array', 'Object', 'Mixed'];
const Schema = {
    name: STRING,
    email: STRING,
    password: STRING,
    phone: STRING,
    createdDate: STRING,
    point: NUMBER,
    card: ARRAY,
    address: OBJECT,
    remark: MIXED,
}

client.add = function (query) {
    //TODO check schema type
    checkSchema(query, Schema);
    client.insertOne.call(client, query);
};
client.get = client.findByID;
client.delete = client.deleteOne;
client.update = client.update;

module.exports = client;