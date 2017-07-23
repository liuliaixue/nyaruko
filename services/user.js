const tag = '[services/userjs]';
const {UserDao} = require('../daos')

const addUser = async function(user) {
    return UserDao.add(user);
}
module.exports = {
    addUser,
};