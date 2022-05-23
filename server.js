const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(router);

router.get('/message', function(req, res) {
    console.log(req.headers);
    res.headers({
        "custom-header": "Our custom value"
    })
    res.send('message list');
});

router.delete('/message', function(req, res) {
    console.log(req.query);
    console.log(req.body)
    res.send('Hello deleted');
});

app.listen(3000);
console.log(`application is on http://localhost:3000`);