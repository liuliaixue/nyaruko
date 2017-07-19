let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(8890, function() {
    console.log("localhost:8890")
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
