import * as dotenv from "dotenv";
import { resolve } from "path";

const ENV_FILE_PATH = resolve(".env");
const isEnvFound = dotenv.config({ path: ENV_FILE_PATH });
if (isEnvFound.error) {
    throw new Error("Cannot find .env file.");
}


// Assign default value for each environments
process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.SERVER_PORT = process.env.SERVER_PORT || "3000";

//mongodb config 
const mongodb_url = process.env.MONGO_URL ? process.env.MONGO_URL : "mongodb://localhost:27017";
const mongodb_dbname = process.env.DATABASE ? process.env.DATABASE : "url_shortener";

const baseUrl = process.env.BASE_URL ? process.env.BASE_URL : 'https://pbid.io';

export default {
    // express server port
    serverPort: parseInt(process.env.SERVER_PORT, 10),
    environment: process.env.NODE_ENV,
    mongodb_url: mongodb_url,
    mongodb_dbname: mongodb_dbname,
    baseUrl,
}