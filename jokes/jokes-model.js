const knex = require('knex');
const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findBy,
  add,
  remove,
  update,
};

function find() {
  return db('jokes')
    .select('id', 'jokename', 'joke');
}


function findBy(filterKey) {
  return db('jokes')
    .where(filterKey)
    .first();
}


function findById(id) {
  return db('jokes')
    .select('id', 'jokename', 'joke')
    .where({ id })
    .first();
}

async function add(joke) {
  const [id] = await db('jokes').insert(joke);
  return findById(id);
}

function remove(id) {
}

function update(changes, id) {
}
