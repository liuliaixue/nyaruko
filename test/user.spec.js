let axios = require('axios');
let expect = require('chai').expect;
let configs = require('../configs');


describe('user', function () {
    it('add user', async function () {
        try {
            let userObject = {
                name: 'alan',
                email: 'alan@test.com',
                password: '12345678'
            };
            let user = await axios.post('http://localhost:32331/user/add', userObject);
            let data = (await axios.get('http://localhost:32331/user/get/email/' + userObject.email)).data;
            let userEntity = data[0];
            expect(userEntity.email).to.equal(userObject.email);
        } catch (e) {
            console.log(e);
            throw e;
        }
    })
})