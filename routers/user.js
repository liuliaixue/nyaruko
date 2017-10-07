const tag = '[route/user.js]';
const controllers = require('../controllers');
const [POST, GET] = ['post', 'get'];
const { logger } = require('../tools');

const addUser = async function (req, res, next) {
    try {
        let userObject = req.body;
        let result = await controllers.user.addUser(userObject);
        console.log(result);
        res.send(result);
        return 'ok';
    } catch (e) {
        logger.error(tag, e);
        next(e);
    }
};


const getUserById = async function (req, res, next) {
    try {
        let userId = req.params;
        let result = await controllers.user.getUserById(userId);
        res.send(result);
        return 'ok';
    } catch (e) {
        logger.error(tag, e);
        next(e);
    }
};

const getUserByEmail = async function (req, res, next) {
    try {
        console.log(req.params);
        console.log(req.session);
        let email = req.params.email;
        let result = await controllers.user.getUserByEmail(email);
        console.log(result);
        res.send(result);
        return 'ok';
    } catch (e) {
        logger.error(tag, e);
        next(e);
    }
};

const login = async function (req, res, next) {
    try {
        const { email, password } = req.body;
        let user = await controllers.user.login({ email, password });
        req.session.user = user;
        res.send(user);

    } catch (e) {
        logger.error(tag, e);
        next(e);
    }
};

const getCurrentUser = async function (req, res, next) {
    try {
        res.send(req.session.user);
        return 'ok';
    } catch (e) {
        logger.error(tag, e);
        next(e);
    }
};




const BASE = '/user';
module.exports = [
    { method: POST, uri: BASE + '/add', fns: [addUser] },
    { method: GET, uri: BASE + '/get/id/:id', fns: [getUserById] },
    { method: GET, uri: BASE + '/get/email/:email', fns: [getUserByEmail] },
    { method: POST, uri: BASE + '/login', fns: [login] },
    { method: GET, uri: BASE + '/get', fns: [getCurrentUser] },
];