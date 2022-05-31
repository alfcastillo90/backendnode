const Model = require('./model')

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save()
}

async function getMessages(filterChat) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterChat !== null) {
            filter = { chat: filterChat };
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }

                resolve(populated);
            });
    })
}

async function updateMessage(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message;
    return await foundMessage.save();
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