import request from "supertest";
import app from "../app";

describe("GET /test", () => {
  test("It should fetch HugoDF from GitHub", async () => {
    // debugger
    let result  = await request(app).get("/test").expect(200).then((response:any)=>{
      expect(response.body.meta.code === 200).toBeTruthy();
      expect(response.body.data.item != "undefined").toBeTruthy();
    })
  });
});
