
import  { body,check, ValidationChain } from 'express-validator';


export const addUrl: Array<ValidationChain> = [
    body("url").isURL().withMessage("the input type is not url").
    isString().withMessage("the url should be of type string")
];



export const redirectUrl: Array<ValidationChain> = [
    check("id").isLength({min:8,max:8}).withMessage("length of url param should be 8")
    .isString().withMessage("shorturl param should be string"),
];
