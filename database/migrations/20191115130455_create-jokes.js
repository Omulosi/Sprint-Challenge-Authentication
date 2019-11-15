
exports.up = function(knex) {
  return knex.schema.createTable('jokes', jokes => {
    jokes.increments();

    jokes
      .string('jokename', 255)
      .notNullable()
      .unique();
    jokes.string('joke', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('jokes');
};
