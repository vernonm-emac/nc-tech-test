import * as request from "supertest";
import { app } from "../server";
import exp from "constants";

test.skip("returns matching card title", async () => {
    const response = await request(app).get("/cards/card001");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
        expect.objectContaining({
            title: "card 1 title",
        })
    );
});

describe("/cards", () => {
    test("GET:200 returns an array of card objects", async () => {
        const response = await request(app).get("/cards");
        expect(response.status).toBe(200);
        expect(response.body.cards).toHaveLength(3);
    });
});
