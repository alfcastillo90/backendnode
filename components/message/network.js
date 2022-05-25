const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function(req, res) {
    console.log(req.headers);
    res.headers({
        "custom-header": "Our custom value"
    })
    
    response.success(req, res, 'message list');
});

router.delete('/', function(req, res) {
    if (req.query.error == 'ok') {
        response.error(req, res, 'Simulated error', 500, 'It is just a simulation')
    } else {
        response.success(req, res, 'message deleted', 201);
    }
});

router.post('/', function(req, res) {
    controller.addMessage(req.body.user, req.body.message).then(() => {
        response.success(req, res, 'message created suscessfully', 200);
    }).catch(e => {
        response.error(req, res, 'Invalid information', 500, 'the fields must not be empty')
    })
})

module.exports = router;