const { HttpCode, HttpError } = require('../utils/app.error');

class TodoNotFounded extends HttpError {
    constructor(type, message = 'ToDo not founded') {
        super({
            httpCode: HttpCode.NOT_FOUND,
            message: message,
            type: type
        });
    }
}

module.exports = {
    TodoNotFounded
}