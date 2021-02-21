import * as mongo from "mongodb";
import config from "../config/config";

export class MongoConnection {
    public static readonly URL: string = config.mongodb_url;
    public static readonly DB_NAME: string = config.mongodb_dbname;

    public static client: mongo.MongoClient;
    public static db: mongo.Db;


    public static getClient(): Promise<mongo.Db> {
        return new Promise<any>((resolve, reject) => {
            if(this.isInitialized())
                resolve(MongoConnection.db);

            mongo.MongoClient.connect(MongoConnection.URL, { useNewUrlParser: true }, (err, client: mongo.MongoClient) => {
                if (err) {
                    reject(err);
                } else {
                    MongoConnection.client = client;
                    MongoConnection.db = client.db(this.DB_NAME)
                    resolve(MongoConnection.db);
                }
            });
        });
    }

    private static isInitialized(): boolean {
        return MongoConnection.db !== undefined;
    }

    public disconnect(): void {
        MongoConnection.client.close();
    }
}