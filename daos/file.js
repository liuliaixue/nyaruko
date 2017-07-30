let Client = require('./client.js');
let client = new Client({ collection: 'file' });

module.exports.client = client;