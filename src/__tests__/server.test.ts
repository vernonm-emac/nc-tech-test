import * as request from "supertest";
import { app } from "../server";

describe("/cards", () => {
  test("GET: responds with an array of all cards on file", () => {
    return request(app)
      .get("/cards")
      .expect(200)
      .then(({ body }) => {
        console.log(body, "response in test");

        expect(body.length).toEqual(3);
      });
  });
  test("GET: all items in the returned array have the expected keys", () => {
    return request(app)
      .get("/cards")
      .expect(200)
      .then(({ body }) => {
        body.forEach((card) => {
          expect(card).toHaveProperty("title");
          expect(card).toHaveProperty("imageUrl");
          expect(card).toHaveProperty("card_id");
        });
      });
  });
});

/*
title from cards.json( as "title")

imageUrl from templates.json ( pages[0].templateId then find that template in tempaltes.json)

card_id from cards.json (as "id")
*/

// test("returns matching card title", async () => {
//   const response = await request(app).get("/cards/card001");

//   expect(response.status).toBe(200);
//   expect(response.body).toEqual(
//     expect.objectContaining({
//       title: "card 1 title",
//     })
//   );
// });
