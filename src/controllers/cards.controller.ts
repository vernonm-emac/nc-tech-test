import { Request, Response } from "express";
import { readCards } from "../models/cards.models";

export const getCards = async (req: Request, res: Response) => {
    try {
        const cards = await readCards();
        res.json({ cards });
    } catch (error) {
        res.status(500).send("There was an error getting the cards.");
    }
};
