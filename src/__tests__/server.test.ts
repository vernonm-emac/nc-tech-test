import * as request from "supertest";
import { app } from "../server";

describe("/cards", () => {
  test("GET: responds with an array of all cards on file", () => {
    return request(app)
      .get("/cards")
      .expect(200)
      .then(({ text }) => {
        expect(JSON.parse(text).length).toEqual(3);
      });
  });
  test("GET: all items in teh returned array have the expected keys", () => {
    return request(app)
      .get("/cards")
      .expect(200)
      .then(({ text }) => {
        const cardsArray = JSON.parse(text);
        cardsArray.forEach((card) => {
          expect(card).toHaveProperty("title");
          expect(card).toHaveProperty("imageUrl");
          expect(card).toHaveProperty("card_id");
        });
      });
  });
});

// test("returns matching card title", async () => {
//   const response = await request(app).get("/cards/card001");

//   expect(response.status).toBe(200);
//   expect(response.body).toEqual(
//     expect.objectContaining({
//       title: "card 1 title",
//     })
//   );
// });
