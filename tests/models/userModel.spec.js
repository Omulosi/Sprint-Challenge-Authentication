const db=require('../../database/dbConfig');
const Users = require('../../users/user-model');
const Jokes = require('../../jokes/jokes-model');

describe('users model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('insert function', () => {
    it('adds users into the db', async () => {
      let usersNo = await db('users');
      expect(usersNo).toHaveLength(0);
      await Users.add({username:'neema', password: '1234abcd'})
      usersNo = await db('users');
      expect(usersNo).toHaveLength(1);
    })
  })
})


