const tag = '[]';
const services = require('../services');

const addUser = async function() {
    return services.user.addUser();
}
module.exports = {
    addUser,
};