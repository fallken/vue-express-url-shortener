
import { Request, Response, NextFunction } from "express";
import { ValidationChain, validationResult } from "express-validator";
import { ValidatorErrorObject } from "../types/types";
import ResponseHandler from "../utils/HttpUtil";


export const validate = (validation_schema: Array<ValidationChain>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(validation_schema.map(async (item: ValidationChain) => {
            await item.run(req);
        }))

        const errors: any = validationResult(req);

        if (!errors.isEmpty()) {
            let error_items: Array<ValidatorErrorObject> = await errors.array();
            error_items = error_items.map((item: ValidatorErrorObject) => {
                return {
                    msg: item.msg,
                    param: item.param
                };
            })
            return new ResponseHandler({}, 400, null, { errors: error_items }).send(res);
        }
        
        next();
    }
}