const server = require('./api/server.js');
const request = require('supertest');


describe('GET /api/jokes', () => {

  it('returns 200 OK', () => {
    return request(server).get('/')
      .expect(200)
      .expect('Content-Type', /json/)
  })
})
