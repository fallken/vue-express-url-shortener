import request from "supertest";
import app from "../app";
import { MongoConnection } from "../database/Mongodb";
import * as mongo from "mongodb";

describe("testing api routes", () => {
  const url = "https://www.youtube.com/watch?v=Iy2ee9wiMrg";
  let db: mongo.Db;

  beforeAll(async (done) => {
    db = await MongoConnection.getDatabase('test_db');
    done();
  });

  describe("POST /api/ for generating short url", () => {

    test("test success for adding new url", async (done) => {
      // debugger
      await request(app).post("/")
        .send({
          url
        }).expect(200).then((response: any) => {
          expect(response.body.meta.code === 200).toBeTruthy();
          expect(response.body.data.main_url).toEqual(url);
        })
      done()
    });
    test("test failed with empty body (400)", async (done) => {
      await request(app).post("/")
        .send({}).expect(400).then((response: any) => {
          expect(response.body.meta.code === 400).toBeTruthy();
          expect(response.body.meta.detail.errors.length > 0).toBeTruthy();
        })
      done()
    });
    test("test failed with wrong url type (400)", async (done) => {
      await request(app).post("/")
        .send({
          url: "dummyurl"
        }).expect(400).then((response: any) => {
          expect(response.body.meta.code === 400).toBeTruthy();
          expect(response.body.meta.detail.errors.length > 0).toBeTruthy();
        })
      done()
    });
  });

  describe("get / list of current urls ", () => {
    test("test success for adding new url", async (done) => {
      // debugger
      await request(app).get("/")
        .expect(200).then((response: any) => {
          expect(response.body.meta.code === 200).toBeTruthy();
          expect(response.body.data.items.length === 1).toBeTruthy();
          expect(response.body.data.items[0].mainUrl).toEqual(url);
        })
      done()
    });
  });

  describe("redirect with url", () => {
    test("fail with wrong id not found(404)", async (done) => {
      // debugger
      await request(app).get("/sfasf123").expect(404);
      done()
    });
    test("fail test with short param(length) passed (lower than 8)", async (done) => {
      // debugger
      await request(app).get("/123").expect(400);
      done()
    });
  });

  afterAll(async (done) => {
    await db.dropDatabase()
    await MongoConnection.disconnect();
    done();
  });
})
