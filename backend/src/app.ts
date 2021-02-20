import express, { Application } from 'express';
import routes from "./routes";
import routeNotFound from "./middlewares/RouteNotFound";
import morgan from "morgan";
import * as bodyParser from "body-parser";
import cors = require('cors');


const  app: Application = express();

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

export default app;