const rawCards = require('../data/cards.json')
const templates = require('../data/templates.json')

exports.fetchCards = () => {
    const cards = rawCards.map(card => {
        const template = templates.find(template => {
            return template.id === card.pages[0].templateId
        })
        return {
            title:card.title,
            imageUrl:template.imageUrl,
            card_id:card.id
        }
    })
    return cards
}

exports.fetchCard = (cardId) => {
    const card = rawCards.find(card => {
        return card.id === cardId
    })
    if(!card){return {status:404,message:'Card doesn\'t exist'}}
    return card
}