export const httResponse: { [id: number]: string } = {
    200: 'OK',
    400: 'Bad request',
    401: 'Unauthorized',
    402: 'Request Failed',
    403: 'Forbidden',
    404: 'Not Found',
    409: 'Conflict',
    429: 'Too Many Requests',
    500: 'Internal server error'
};

export const HttpCodes: { [id: string]: number } = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    REQUEST_FAILED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500
}
