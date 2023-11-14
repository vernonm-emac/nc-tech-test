const request = require('supertest')
const app = require('../server')

describe('GET /cards/:cardId', () => {
  test('200: responds with card object with matching cardID', async () => {
    let response;
    let cardId;

    cardId = 'card001'
    response = await request(app).get(`/cards/${cardId}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(expect.objectContaining({
      id: cardId,
    }))

    cardId = 'card002'
    response = await request(app).get(`/cards/${cardId}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(expect.objectContaining({
      id: cardId,
    }))
  })
})