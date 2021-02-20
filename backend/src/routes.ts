import { Router, Request, Response } from "express";

import { index } from "./controllers/UrlController";


const router = Router();


router.get('/test',index);


export default router;