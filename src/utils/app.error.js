export const HttpCode = {
    OK: 200,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    TOO_MANY_REQUESTS: 429,
    UNPROCESSABLE_CONTENT: 422,
    INTERNAL_SERVER_ERROR: 500,
    FORBIDDEN: 403
}

export class HttpError extends Error {
    constructor({ httpCode, type, message = 'Error'}) {
        this.httpCode = httpCode;
        this.type = type;
        this.message = message;
    
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
      }
}