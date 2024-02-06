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

  test('200: should return a response with at least one correct card that matches the object in the json file', async () => {
    return request(app)
    .get("/cards")
    .expect(200)
    .then((response) => {
      const cards = response.body.cards
      cards.forEach((card) => {
        expect(card).toMatchObject({
          id: expect.any(String),
          title: expect.any(String),
          sizes: expect.any(Array),
          basePrice: expect.any(Number),
          pages: expect.any(Array)
        })
      })
    })
  });
});
