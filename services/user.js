const tag = '[services/userjs]';
const {UserDao} = require('../daos');
const crypto = require('crypto');


const addUser = async function(user) {
    const md5 = crypto.createHash('md5');
    user.password = md5.update(user.password).digest('hex');
    let userEntity = new UserDao(user);
    console.log(userEntity)
    return userEntity.save();
}

const getUser = async function(userObjec) {
    return UserDao.find(userObjec);
}

const login = async function({email, password}) {
    const md5 = crypto.createHash('md5');
    const userPassword = md5.update(password).digest('hex');
    return this.getUser({
        email,
        password: userPassword
    });
}

module.exports = {
    addUser,
    getUser,
    login
};