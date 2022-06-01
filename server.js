const express = require('express');
const app = express();
const server = require('http').Server(app)
const bodyParser = require('body-parser');
const socket = require('./socket')
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://dev:dev@cluster0.z0tzn.mongodb.net/telegram?retryWrites=true&w=majority')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server)
router(app)

app.use('/app', express.static('public'))

server.listen(3001, function() {
    console.log(`application is on http://localhost:3001`);
});
