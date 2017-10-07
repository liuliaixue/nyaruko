const configs = require('./configs');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let session = require('express-session');

app.use(session({
    secret: 'modelo',
    name: 'alan', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: { maxAge: 15 * 60 * 1000 }, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(configs.port, function() {
    console.log("localhost:" + configs.port)
});

let errorHandle = function(err, req, res, next) {
    res.status(err.statusCode || 500);
    res.send(err);
}
app.use(errorHandle);

{
    let routers = require('./routers');
    for(let key in routers) {
        routers[key].forEach(function(router) {
            app[router.method](router.uri, router.fns);
            console.log(`${router.method},${router.uri}`)    
        });

    }
}
