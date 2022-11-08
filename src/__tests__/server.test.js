const request = require("supertest");
const app = require("../server");

test("200 : returns matching card title", () => {
  return request(app)
    .get("/cards/card001")
    .expect(200)
    .then(({ body: { card } }) => {
      expect(card).toEqual(
        expect.objectContaining({
          title: "card 1 title",
        })
      );
    });
});
