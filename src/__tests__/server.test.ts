import * as request from 'supertest'
import { app } from '../server'

describe('GET /cards/:cardId', () => {
  test('200: responds with card object with matching cardID', async () => {
    let response;
    let cardId;

    cardId = 'card001'
    response = await request(app).get(`/cards/${cardId}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(expect.objectContaining({
      title: 'card 1 title',
    }))

    cardId = 'card002'
    response = await request(app).get(`/cards/${cardId}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(expect.objectContaining({
      title: 'card 2 title',
    }))
  })
})