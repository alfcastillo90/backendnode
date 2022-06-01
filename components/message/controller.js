const store = require('./store');

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.errror(`[messageController] there's not messages or user information`)
            reject('Incorrect information');
            return false
        }

        let fileUrl = '';
        if (file) {
            fileUrl = `http://localhost:3000/app/files/${file.filename}`
        }

        const fullMessage = {
            chat,
            user,
            message,
            date: new Date(),
            file: fileUrl
        }
    
        store.add(fullMessage)
        resolve(fullMessage)

    });
}

function getMessages(filterUser) {
    return new Promise(async (resolve) => {
        resolve(store.list(filterUser))
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject)=> {
        if (!id || !message) {
            reject('Invalid data');
            return false
        }

        resolve(store.update(id, message))
    })
}

function deleteMessage(id) {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid data');
            return false
        }

        resolve(store.remove(id))
        .then(() => {
            resolve();
        })
        .catch(e => {
            reject(e)
        })

    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}