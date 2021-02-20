import { Request, Response, NextFunction } from "express";
import ResponseHandler from "../utils/HttpUtil";


export const index = (req:Request,res:Response,next:NextFunction)=>{
    return new ResponseHandler(
        {
            items: {
                msg:"mamad is coming for you my friend"
            }
        },200,"its working like a charrm"
    ).send(res);
}

