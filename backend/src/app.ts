import express, { Application } from 'express';
import routes from "./routes";
import routeNotFound from "./middlewares/RouteNotFound";
import morgan from "morgan";
import * as bodyParser from "body-parser";
import cors = require('cors');
import { errorHandler } from './middlewares/ErrorHandler';
import { ExpressError } from 'interfaces/error';
import {  NextFunction, Response ,Request} from "express";


const app: Application = express();

app.use(morgan("dev"));
// support application/json type post data
app.use(bodyParser.json());
// support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));
//using cors package
app.use(cors());

app.use(routes);
//if not routes were found
app.use(routeNotFound);

app.use((err: ExpressError, req: Request, res: Response, next: NextFunction) => errorHandler(err, req, res, next));

export default app;