import * as request from "supertest";
import { app } from "../server";
const cards = require("../data/cards.json");
const templates = require("../data/templates.json");
import exp from "constants";
import { Card, FormattedCard } from "../types";
import { formatCardsResponse } from "../utils/utils";

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
    test("returns card objects with the correct properties", async () => {
        const response = await request(app).get("/cards");
        const { cards } = response.body as { cards: FormattedCard[] };
        for (const card of cards) {
            expect(typeof card.card_id).toBe("string");
            expect(typeof card.title).toBe("string");
            expect(typeof card.imageUrl).toBe("string");
        }
    });
});

describe("formatCardsResponse function", () => {
    test("takes an array of cards and an array of templates and returns an array", () => {
        expect(Array.isArray(formatCardsResponse(cards, templates))).toBe(true);
    });
    test("returns an array of card objects with the correct properties", () => {
        const formattedCards: FormattedCard[] = formatCardsResponse(
            cards,
            templates
        );
        for (const card of formattedCards) {
            expect(typeof card.title).toBe("string");
            expect(typeof card.imageUrl).toBe("string");
            expect(typeof card.card_id).toBe("string");
        }
    });
    test("the input array is not mutated", () => {
        const originalCards = [...cards];
        formatCardsResponse(cards, templates);
        expect(cards).toEqual(originalCards);
    });
});
