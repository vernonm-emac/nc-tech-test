import { Request, Response } from "express";
import { readFile } from "fs/promises";

export const getCards = async (req: Request, res: Response) => {
    try {
        const data = await readFile("src/data/cards.json", "utf-8");
        res.json({ cards: JSON.parse(data) });
    } catch (error) {
        console.log(error);
        // TODO handle error
    }
};
