const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function(req, res) {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages).then( messageList => {
        response.success(req, res, messageList, 200)
    }).catch(e => {
        response.error(req, res, 'Unexpected Errror', 500,e)
    })
});

router.delete('/:id', function(req, res) {
    controller.deleteMessage(req.params.id).then(() => {
        response.success(req, res, 'message deleted suscessfully', 200);
    }).catch(() => {
        response.error(req, res, 'Internal server error', 500, e)
    })
});

router.post('/', function(req, res) {
    controller.addMessage(req.body.chat, req.body.user, req.body.message).then(() => {
        response.success(req, res, 'message created suscessfully', 200);
    }).catch(() => {
        response.error(req, res, 'Invalid information', 500, 'the fields must not be empty')
    })
})

router.patch('/:id', function(req, res){
    console.log(req.params.id);
    
    controller.updateMessage(req.params.id, req.body.message).then(() => {
        response.success(req, res, 'message updated suscessfully', 200);
    }).catch(e => {
        response.error(req, res, 'Internal server error', 500, e)
    })
})

module.exports = router;