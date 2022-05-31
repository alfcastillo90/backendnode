const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', function(req, res) {
    controller.addUser(req.body.name).then(data => {
        response.success(req, res, data, 201)
    }).catch(err => {
        response.error(req, res, 'Internal error', 500, err)
    })
});

router.get('/', function(req, res) {
    const filterUsers = req.query.name || null;
    controller.getUsers(filterUsers).then( userList => {
        response.success(req, res, userList, 200)
    }).catch(e => {
        response.error(req, res, 'Unexpected Errror', 500,e)
    })
});

module.exports = router;