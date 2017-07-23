const tag = '[route/user.js]';
const controllers = require('../controllers');
const [POST, GET] = ['post', 'get']; 

const addUser = async function(req, res, next) {
    try {
        console.log(tag)
        let result = await controllers.user.addUser();
        res.send(result);
        return 'ok';
    } catch(e) {

    }
};

const BASE = '/user';
module.exports = [
    {method: POST, uri: BASE + '/add', fns: [addUser]},
];