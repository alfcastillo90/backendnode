const express = require('express');
const router = express.Router();
const response = require('../../network/response');

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

module.exports = router;