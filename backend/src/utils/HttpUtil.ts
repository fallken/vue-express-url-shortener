import { Response } from "express";
import {ResponseBody} from "../types/types";

export default class ResponseHandler {
    private _data: object | null;
    private _code: number;
    private _msg: string | null;
    private _reponse: ResponseBody;

    constructor(
        data: object | null = {},
        code: number = 200,
        message: string | null = null,
        detail: object = {}) {

        this._data = data;
        this._code = code;
        this._msg = message;
        this._reponse = {
            meta: {
                code: this._code,
                msg: this._msg,
                detail: detail
            },
            data: !this._data ? {} : this._data
        }
    }

    send(res: Response) {
        res.status(this._code).send(this._reponse);
    }
}