const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.errror(`[messageController] there's not messages or user information`)
            reject('Incorrect information');
            return false
        }
        const fullMessage = {
            user,
            message,
            date: new Date()
        }
    
        store.add(fullMessage)
        resolve(fullMessage)

    });
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list)
    })
}

module.exports = {
    addMessage,
    getMessages
}