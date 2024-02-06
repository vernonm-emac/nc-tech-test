import { selectCards} from "../models/cards.models"

export module CardControllers {
    export async function getCards (req, res, next): Promise<any> {
        const cards = await selectCards()
        
        return res.status(200).send({cards})
    }
}