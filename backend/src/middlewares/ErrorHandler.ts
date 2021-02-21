import { httResponse } from "../config/httpCodes";
import { Errback, NextFunction, Request, Response } from "express";
import { ExpressError } from "../interfaces/error";
import ResponseHandler from "../utils/HttpUtil";


export const errorHandler = (err: ExpressError, req: Request, res: Response, next: NextFunction) => {
    let response_code = 500,
        message = err.message ? err.message :null,
        detail = {};
    //check if ther error code is inside our common error codes like mongodb erorr codes 
    if (err.code) {
        if(!message)
            message = httResponse[err.code];
        response_code = err.code;
    }
    return new ResponseHandler(null, response_code, message, detail).send(res);
} 