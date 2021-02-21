import request from "supertest";
import app from "../app";
import { MongoConnection } from "../database/Mongodb";
import * as mongo from "mongodb";

describe("testing api routes", () => {
  let db: mongo.Db;
  beforeAll(async (done) => {
    db = await MongoConnection.getDatabase('test_db');
    done();
  });

  describe("POST /api/ for generating short url", () => {
    const url = "https://www.youtube.com/watch?v=Iy2ee9wiMrg";

    test("test success for adding new url", async (done) => {
      // debugger
      await request(app).post("/api")
        .send({
          url
        }).expect(200).then((response: any) => {
          expect(response.body.meta.code === 200).toBeTruthy();
          expect(response.body.data.main_url).toEqual(url);
        })
      done()
    });
    test("test failed with empty body (400)", async (done) => {
      await request(app).post("/api")
        .send({}).expect(400).then((response: any) => {
          expect(response.body.meta.code === 400).toBeTruthy();
          expect(response.body.meta.detail.errors.length > 0).toBeTruthy();
        })
      done()
    });
    test("test failed with wrong url type (400)", async (done) => {
      await request(app).post("/api")
        .send({
          url: "dummyurl"
        }).expect(400).then((response: any) => {
          expect(response.body.meta.code === 400).toBeTruthy();
          expect(response.body.meta.detail.errors.length > 0).toBeTruthy();
        })
      done()
    });
  });

  afterAll(async (done) => {
    await db.dropDatabase()
    await MongoConnection.disconnect();
    done();
  });
})
