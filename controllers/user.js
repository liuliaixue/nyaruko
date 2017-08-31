const tag = '[controllers/user.js]';
const services = require('../services');

const addUser = async function(userObject) {
    return services.user.addUser(userObject);
}

const getUser = async function(userObject) {
    return services.user.getUser(userObject);
}

const getUserById = async function(id) {
    const userObject = {id: id};
    return services.user.getUser(userObject);
}

const getUserByEmail = async function(email) {
    const userObject = {email: email};
    return services.user.getUser(userObject);
}

const login = function({email, password}) {
    return services.user.login({email, password})
}

module.exports = {
    addUser,
    getUser,
    getUserById,
    getUserByEmail,
    login,
};