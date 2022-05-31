const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', function(req, res) {
    controller.addChat(req.body.name).then(data => {
        response.success(req, res, data, 201)
    }).catch(err => {
        response.error(req, res, 'Internal error', 500, err)
    })
});

router.get('/:userId', function(req, res) {
    const filterUsers = req.params.userId || null;
    controller.getChats(filterUsers).then( userList => {
        response.success(req, res, userList, 200)
    }).catch(e => {
        response.error(req, res, 'Unexpected Errror', 500,e)
    })
});

module.exports = router;