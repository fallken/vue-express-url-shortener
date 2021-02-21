import { MongoConnection } from "../database/Mongodb";
import * as mongo from "mongodb";



export class UrlService {
    public static readonly COLLECTION = 'url';

    private static db: mongo.Db;
    private static collection: mongo.Collection;

    static async init() {
        this.db = await MongoConnection.getDatabase();
        this.collection = this.db.collection(this.COLLECTION);
        // this.collection.createIndex("short_url", { unique: true });
    }

    static async getDb(): Promise<mongo.Db> {
        if (!this.db)
            await this.init()

        return this.db;
    }

    static async getCollection(): Promise<mongo.Collection> {
        if (!this.collection)
            await this.init()

        return this.collection;
    }

}