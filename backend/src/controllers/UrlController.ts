import { Request, Response, NextFunction } from "express";
import ResponseHandler from "../utils/HttpUtil";
import { generateRandomStr } from "../utils/UrlUtil";
import { UrlService } from "../services/UrlService";
import config from "../config/config";
import { UrlDbItem } from "types/types";
import * as mongo from "mongodb";

export const generateShortUrl = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const body = req.body, collection: any = await UrlService.getCollection();
        let randomString: string = generateRandomStr();
        await collection.insertOne({
            _id: randomString,
            url: body.url,
        });
        return new ResponseHandler({
            final_url: `${config.baseUrl}/${randomString}`,
            main_url: body.url
        }).send(res);
    } catch (e) {
        if (e.code == 11000)//handling duplications
            return generateShortUrl(req, res, next);
        next(e);
    }
}

export const getUrlList = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const collection: mongo.Collection = await UrlService.getCollection();

    let items = await collection.find({}).toArray();//
    items = items.map((item: UrlDbItem) => {
        return {
            final_url: `${config.baseUrl}/${item._id}`,
            main_url: item.url
        }
    });
    return new ResponseHandler({
        items
    }).send(res);
}


export const redirectShortUrl = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const collection: mongo.Collection = await UrlService.getCollection();
        let urlObj:UrlDbItem = await collection.findOne({
            _id: req.params.id
        });
        if (!urlObj)
            throw {
                code: 404,
                message: "url object not found"
            };
        return res.redirect(`${urlObj.url}`);
    } catch (e) {
        next(e)
    }
}