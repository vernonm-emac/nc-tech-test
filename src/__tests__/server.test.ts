import * as request from "supertest";
import { app } from "../server";

describe("starting test", () => {
  test("returns matching card title", async () => {
    const response = await request(app).get("/cards/card001");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        title: "card 1 title",
      })
    );
  });
});

describe.only("GET: /cards", () => {
  test("200: should return a successful response from the server", async () => {
    return request(app).get("/cards").expect(200);
  });
});
