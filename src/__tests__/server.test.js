const request = require("supertest");
const app = require("../server");

test("200 : returns all cards", () => {
  return request(app)
    .get("/cards")
    .expect(200)
    .then(({ body: { card } }) => {
      expect(card).toEqual(
        expect.objectContaining({
          cardId: "card001",
        })
      );
    });
});
