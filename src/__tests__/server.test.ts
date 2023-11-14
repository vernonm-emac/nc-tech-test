import * as request from 'supertest'
import { app } from '../server'

test('GET /cards returns status code 200', async () => {
    const response = await request(app).get('/cards');
    expect(response.status).toBe(200);
});

test('GET /cards returns list of cards with title, imageUrl and card_id', async () => {
  const response = await request(app).get('/cards')
  expect(response.body.cards).toEqual([{
    "title": "card 1 title",
    "imageUrl": "/front-cover-portrait-1.jpg",
    "card_id": "card001"
  },
  {
    "title": "card 2 title",
    "imageUrl": "/front-cover-portrait-2.jpg",
    "card_id": "card002"
  },
  {
    "title": "card 3 title",
    "imageUrl": "/front-cover-landscape.jpg",
    "card_id": "card003"
  }]);
})

test.skip('returns matching card title', async () => {
  const response = await request(app).get('/cards/card001')
  expect(response.status).toBe(200)
  expect(response.body).toEqual(expect.objectContaining({
    title: 'card 1 title',
  }))
})
