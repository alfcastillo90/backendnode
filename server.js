const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config')
const cors = require('cors');
const db = require('./db');
const socket = require('./socket')
const router = require('./network/routes');
const server = require('http').Server(app);

db(config.dbUrl)

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server)
router(app)

app.use(`${config.publicRoute}`, express.static('public'))

server.listen(config.port, function() {
    console.log(`application is on ${config.host}:${config.port}`);
});
