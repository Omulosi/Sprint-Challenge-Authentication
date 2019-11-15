const server = require('../../api/server.js');
const request = require('supertest');


describe('GET /api/jokes', () => {

  it('returns 400 when no token passed', () => {
    return request(server).get('/api/jokes')
      .expect(400)
      .expect('Content-Type', /json/)
  })
})
