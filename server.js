const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const response = require('./network/response');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(router);

router.get('/message', function(req, res) {
    console.log(req.headers);
    res.headers({
        "custom-header": "Our custom value"
    })
    
    response.success(req, res, 'message list');
});

router.delete('/message', function(req, res) {
    if (req.query.error == 'ok') {
        response.error(req, res, 'Simulated error', 400)
    } else {
        response.success(req, res, 'message deleted', 201);
    }
});

app.listen(3000);
console.log(`application is on http://localhost:3000`);