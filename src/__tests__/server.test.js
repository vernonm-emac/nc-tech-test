const request = require('supertest')
const {app} = require('../server')

describe('/api',()=>{
    test('should return a 404 with a message Path not found if an unrecognised endpoint is provided',()=>{
        return request(app)
        .get('/api/notAnEndpoint')
        .expect(404)
        .then(({body})=>{
            expect(body.message).toBe('Path not found')
        })
    })
})

describe('GET /cards',()=>{
    test('should return an array of all cards with 200 status code',()=>{
        return request(app)
        .get('/cards')
        .expect(200)
        .then(({body})=>{
            const cards = body.cards
            expect(Array.isArray(cards)).toBe(true)
            expect(cards).toHaveLength(3)
        })
    })
    test('should return all required properties',()=>{
        return request(app)
        .get('/cards')
        .expect(200)
        .then(({body}) => {
            const cards = body.cards
            cards.forEach(card => {
                expect(card).toHaveProperty('title')
                expect(card).toHaveProperty('imageUrl')
                expect(card).toHaveProperty('card_id')
            });  
        })
    })
})

describe('GET /cards/:cardId',()=>{
    test('should return the card matching the id provided',()=>{
        return request(app)
        .get('/cards/card002')
        .expect(200)
        .then(({body})=>{
            card = body.card
            expect(card.id).toBe('card002')
        })
    })
    test('should return message Card doesn\'t exist if provided an id that does not exist in the database',()=>{
        return request(app)
        .get('/cards/card999')
        .expect(404)
        .then(({body})=>{
            expect(body.message).toBe('Card doesn\'t exist')
        })
    })
    test('should return message invalid id if provided an invalid id',()=>{
        return request(app)
        .get('/cards/notAnId')
        .expect(400)
        .then(({body})=>{
            expect(body.message).toBe('invalid id')
        })
    })
})