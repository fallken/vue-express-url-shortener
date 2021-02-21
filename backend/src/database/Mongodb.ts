import * as mongo from "mongodb";
import config from "../config/config";

export class MongoConnection {
    public static readonly URL: string = config.mongodb_url;
    public static readonly DB_NAME: string = config.mongodb_dbname;

    public static client: mongo.MongoClient;
    public static db: mongo.Db;


    public static getDatabase(dbname: string | null = null, url: string | null = null): Promise<mongo.Db> {
        return new Promise<mongo.Db>((resolve, reject) => {
            if (this.isInitialized())
                resolve(MongoConnection.db);

            let database = dbname ? dbname : MongoConnection.DB_NAME,
                conn_url = url ? url : MongoConnection.URL;

            mongo.MongoClient.connect(conn_url, { useNewUrlParser: true }, (err, client: mongo.MongoClient) => {
                if (err) {
                    reject(err);
                } else {
                    MongoConnection.client = client;
                    MongoConnection.db = client.db(database)
                    resolve(MongoConnection.db);
                }
            });
        });
    }

    private static isInitialized(): boolean {
        return MongoConnection.db !== undefined;
    }

    public static disconnect(): void {
        MongoConnection.client.close();
    }
}