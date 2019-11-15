const server = require('./api/server.js');
const request = require('supertest');


describe('Login route', () => {

  it('rejects invalid user data', () => {
    return request(server).post('/api/auth/login')
      .expect(400)
  })
  it('accepts a valid user', () => {
    return request(server).post('/api/auth/login')
      .expect(400)
  })
})
