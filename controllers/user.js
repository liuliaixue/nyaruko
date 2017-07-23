const tag = '[controllers/user.js]';
const services = require('../services');

const addUser = async function() {
    console.log(tag)
    return services.user.addUser();
}
module.exports = {
    addUser,
};