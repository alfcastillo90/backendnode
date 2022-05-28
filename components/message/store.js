const db = require('mongoose');
const Model = require('./model')


db.connect("mongodb+srv://dev:dev@cluster0.z0tzn.mongodb.net/telegram?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

console.log(`database connected successfuly`)

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save()
}

async function getMessages(filterUser) {
    let filter = {};

    if (filterUser != null) {
        filter = { user: filterUser }
    }
    const messages = await Model.find(filter);
    return messages
}

async function updateMessage(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

async function deleteMessage(id) {
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    remove: deleteMessage
}