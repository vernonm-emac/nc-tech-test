const request = require("supertest");
const app = require("../server");

// test("returns matching card title", async () => {
//   const response = await request(app).get("/cards/card001");

//   expect(response.status).toBe(200);
//   expect(response.body).toEqual(
//     expect.objectContaining({
//       title: "card 1 title",
//     })
//   );
// });

describe("GET /cards", () => {
  test("200 :returns all card", () => {
    const cards = [
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
    ];
    return request(app)
      .get("/cards")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ cards });
      });
  });

  test("200 :returns card with array of objects", () => {
    const expectedCards = [
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
    ];

    return request(app)
      .get("/cards")
      .expect(200)
      .then(({ body: { cards } }) => {
        if (cards.length === 0) {
          return;
        } else {
          cards.forEach((card) => {
            expect(typeof card.title).toBe("string");
            expect(typeof card.imageUrl).toBe("string");
            expect(typeof card.card_id).toBe("string");
          });
          expect(cards).toEqual(expectedCards);
        }
      });
  });

  test("404 :respond with error message when route does not exist", () => {
    return request(app)
      .get("/cardz")
      .expect(404)
      .then(({ body }) => {
        expect(body.message).toBe("does not exist");
      });
  });
  test.skip("400 :respond with error message when card data does not exist", () => {
    return request(app)
      .get("/cards")
      .expect(400)
      .then(({ body }) => {
        expect(body.message).toBe("No cards found !!!");
      });
  });
});
