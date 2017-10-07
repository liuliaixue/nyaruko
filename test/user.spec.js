let axios = require('axios');
let expect = require('chai').expect;
let configs = require('./0.js');
const serverURL = configs.serverURL;
console.log(serverURL)
describe('user', function () {
    it('add user and get user', async function () {
        try {
            let userObject = configs.user;
            let savedUser = (await axios.post(`${serverURL}/user/add`, userObject)).data;
            let data = (await axios.get(`${serverURL}/user/get/id/` + savedUser._id)).data;
            console.log(savedUser,data);
            let userEntity = data[0];
            // expect(userObject.email).to.equal(userEntity.email);
        } catch (e) {
            console.log(e);
            throw e;
        }
    });
    it('get user by email', async function() {
        // let data = (await axios.get(`${serverURL}/user/get/email/` + userObject.email)).data;
    });
});