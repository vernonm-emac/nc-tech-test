const { fetchCards, fetchCard } = require("./model")

exports.getCards = (req,res,next) => {
    const cards = fetchCards()
    res.status(200).send({cards})
}

exports.getCard = (req,res,next) => {
    const {cardId} = req.params
    const card = fetchCard(cardId)
    res.status(200).send({card})
}