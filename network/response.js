const statusMessages = {
    200: 'Done',
    201: 'Created',
    400: 'Invalid format',
    500: 'Internal error'
}

exports.success = function(req, res, message, status) {
    const statusCode = status;
    let statusMessage = message;

    status = !status ? 200 : status;

    if (!message) {
        statusMessage = statusMessages[status];
    }


    res.status(statusCode).send({
        error: '',
        body: statusMessage
    });
}

exports.error = function(req, res, message, status, details) {
    const statusCode = status;
    let statusMessage = message;

    status = !status ? 500 : status;

    if (!message) {
        statusMessage = statusMessages[status];
    }

    res.status(statusCode).send({
        error: message,
        body: statusMessage,
        details
    });
}