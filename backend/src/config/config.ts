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



export default {
    // express server port
    serverPort: parseInt(process.env.SERVER_PORT, 10),
    environment: process.env.NODE_ENV
}