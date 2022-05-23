const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(router);

router.get('/', function(req, res) {
    console.log(`query ${JSON.stringify(req.query)}`)
    console.log(`body ${JSON.stringify(req.body)}`)
    res.send('Hello from get');
});

router.post('/', function(req, res) {
    console.log(`query ${JSON.stringify(req.query)}`)
    console.log(`body ${JSON.stringify(req.body)}`)
    res.send('Hello from post');
});

app.listen(3000);
console.log(`application is on http://localhost:3000`);