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
    
        console.log(fullMessage);
        resolve(fullMessage)

    });
}

module.exports = {
    addMessage
}