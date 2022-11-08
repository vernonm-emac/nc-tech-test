const request = require("supertest");
const app = require("../server");

describe("GET /notARoute", () => {
  test("client receives '404 Not Found' for a GET request to an invalid route", () => {
    return request(app)
      .get("/notARoute")
      .expect(404)
      .then(({ body }) => {
        expect(body.message).toBe("404 Not Found (Invalid Path)");
      });
  });
});

describe("GET /cards", () => {
  test("returns an array of accurate card objects", () => {
    return request(app)
      .get("/cards")
      .expect(200)
      .then(({ body }) => {
        expect(body).toEqual(
          expect.objectContaining([
            {
              title: "card 1 title",
              imageUrl: "/front-cover-portrait-1.jpg",
              card_id: "card001",
            },
            {
              title: "card 2 title",
              imageUrl: "/front-cover-portrait-2.jpg",
              card_id: "card002",
            },
            {
              title: "card 3 title",
              imageUrl: "/front-cover-landscape.jpg",
              card_id: "card003",
            },
          ])
        );
      });
  });
});
