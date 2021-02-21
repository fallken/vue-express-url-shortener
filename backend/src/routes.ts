import { Router } from "express";
import { validate } from "./middlewares/HttpValidator";
import { addUrl, redirectUrl } from "./validation_schema/url";
import { redirectShortUrl, generateShortUrl, getUrlList } from "./controllers/UrlController";

const router = Router();



router.post('/', validate(addUrl), generateShortUrl);

router.get('/', getUrlList);

router.get('/:id', validate(redirectUrl), redirectShortUrl);


export default router;