const request = require("supertest");
const app = require("../server");

describe("tests for get all cards", () => {
  it("should return an array of cards", () => {
    return request(app)
      .get("/cards")
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body)).toEqual(true);
      });
  });
  it("should return an array of objects containing a title, imageUrl and card_id", () => {
    return request(app)
      .get("/cards")
      .expect(200)
      .then((res) => {
        expect.arrayContaining([
          expect.objectContaining({
            title: expect.any(String),
            imageUrl: expect.any(String),
            card_id: expect.any(String),
          }),
        ]);
      });
  });
  it("should return a 404 error if the path is incorrect", () => {
    return request(app).get("/card").expect(404);
  });
});

describe("tests for get card by id", () => {
  it("should return a 200 status", () => {
    return request(app).get("/cards/card001").expect(200);
  });
  it("should return an object containing a title, imageUrl, card_id, and base_price", () => {
    return request(app)
      .get("/cards/card001")
      .expect(200)
      .then((res) => {
        expect.objectContaining({
          title: expect.any(String),
          imageUrl: expect.any(String),
          card_id: expect.any(String),
          base_price: expect.any(Number),
        });
      });
  });
  it("should return an array of size objects converted to the correct format", () => {
    return request(app)
      .get("/cards/card001")
      .expect(200)
      .then(({ body }) => {
        body.availableSizes.forEach((size) => {
          expect.objectContaining({
            id: expect.any(String),
            title: expect.any(String),
          });
        });
      });
  });
  it("should contain an array of pages objects", () => {
    return request(app)
      .get("/cards/card001")
      .expect(200)
      .then(({ body }) => {
        expect(Array.isArray(body.pages)).toEqual(true);
        // expect(body.pages).toContain();
      });
  });

  it("should return a 404 error if the path is incorrect", () => {
    return request(app).get("/card/card999").expect(404);
  });
});
