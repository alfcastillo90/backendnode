const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

db('"mongodb+srv://dev:dev@cluster0.z0tzn.mongodb.net/telegram?retryWrites=true&w=majority"')
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
router(app)

app.use('/app', express.static('public'))

app.listen(3000);
console.log(`application is on http://localhost:3000`);