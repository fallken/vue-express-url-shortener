import { MongoConnection } from "../database/Mongodb";
import * as mongo from "mongodb";



export class UrlService {
    public static readonly COLLECTION='url';

    private static db:any;
    private static collection:any;

    static async init(){
        this.db = await MongoConnection.getClient();
        this.collection = this.db.collection(this.COLLECTION);
        this.collection.createIndex("short_url", { unique: true });
    }

    static async getDb(){
        if(!this.db)
            await this.init()
        
        return this.db;
    }

    static async getCollection(){
        if(!this.collection)
            await this.init()
        
        return this.collection; 
    }
    
}