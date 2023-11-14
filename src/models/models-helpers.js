const templates = require('../data/templates.json')

getImageUrl = (templateId) => {
  console.log('fetch img url')
  for (template of templates) {
    console.log(template.id +" / "+templateId)
    if (template.id === templateId) return template.imageUrl
  }
  return false
}

createCardResponse = (card) => {
  const sizeMap = {
    'sm': 'Small',
    'md': 'Medium',
    'gt': 'Giant'
  }
  const availableSizes = []
  for (const size of card.sizes) {
    availableSizes.push(
      {
        id: size,
        title: sizeMap[size]
      }
    )
  }

  const newCard = {
    title: card.title,
    imageUrl: 'imgurl',
    card_id: card.id,
    availableSizes: availableSizes,
    base_price: card.basePrice,
    pages: [...card.pages]
  }
  return newCard
}

module.exports = { createCardResponse, getImageUrl }