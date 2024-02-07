import { readFile } from "fs/promises";
import { Card, FormattedCard, Template } from "../types";
import { formatCardsResponse } from "../utils/utils";

export const readCards = async (): Promise<FormattedCard[]> => {
    const data = await readFile("src/data/cards.json", "utf-8");
    const cards: Card[] = JSON.parse(data);
    
    const templates: Template[] = await readTemplates();

    const formattedCards = formatCardsResponse(cards, templates);

    return formattedCards;
};

export const readTemplates = async () => {
    const data = await readFile("src/data/templates.json", "utf-8");
    const templates = JSON.parse(data);
    return templates;
};
