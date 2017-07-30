let Client = require('./client.js');
let client = new Client({ collection: 'user' });

const Schema = {
    name: 'String',
    password: {type:'String',require:true},
    phone: 'Number',
    createdDate: 'Date',
    isMember: 'Boolean',
    address: 'Object',
    family : 'Array'
}

client.add = function (query) {
    //TODO check schema type
    client.insertOne.call(client, query);
};
client.get = client.findByID;
client.delete = client.deleteOne;
client.update = client.update;

module.exports = client;