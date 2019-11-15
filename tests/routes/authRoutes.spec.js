const server = require('../../api/server.js');
const request = require('supertest');

describe('Authentication routes', () => {

  describe('POST /api/auth/login', () => {

    it('rejects invalid user data', () => {
      return request(server).post('/api/auth/login')
        .send({"username": "papa"})
        .expect(400)
    })

    it('accepts a valid user', () => {
      return request(server).post('/api/auth/login')
        .send({username: "hellen", password: "1234abcd"})
        .expect(200)
        .then(res => {
          expect(res.body).to.have.a.property('token')
        })

    })
  })


})

