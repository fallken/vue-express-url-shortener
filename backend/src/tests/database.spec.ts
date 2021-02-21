import { MongoConnection } from "../database/Mongodb";
import * as mongo from "mongodb";

describe("testing api routes", () => {
    let db: mongo.Db;
    beforeAll(async (done) => {
        db = await MongoConnection.getDatabase('test_db');
        done();
    });

    afterAll(async (done) => {
        await db.dropDatabase()
        await MongoConnection.disconnect();
        done();
    });
    it("testing document insertion into database", async (done) => {
        const url_collection = db.collection('url');

        const mockUrl = {
            _id: "asfasfas2333",
            main_url: "www.google.com",
        };

        await url_collection.insertOne(mockUrl);

        const insertedUser = await url_collection.findOne({_id: mockUrl._id});
        expect(insertedUser).toEqual(mockUrl);

        done();
    });
})
