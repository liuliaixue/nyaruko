let Client = require('./client.js');
let client = new Client({ collection: 'role' });

module.exports.roles = client;