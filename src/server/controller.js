const { fetchCards, fetchCard } = require("./model")

exports.getCards = (req,res,next) => {
    const cards = fetchCards()
    res.status(200).send({cards})
}

exports.getCard = (req,res,next) => {
    const {cardId} = req.params
    const regex = /^card\d{3}$/g
    if(!regex.test(cardId)){
        next({status:400,message:'invalid id'})
    }
    const card = fetchCard(cardId)
    if(card.status){
        next(card)
    }else{res.status(200).send({card})}
}