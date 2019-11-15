
exports.seed = function(knex) {
  return knex('jokes').truncate()
    .then(function () {
      return knex('jokes').insert([
        {jokename: 'john', joke: "dad joke 1"},
        {jokename: 'nero', joke: "dad joke 2"},
        {jokename: 'abba', joke: "dad joke 2"},
      ]);
    });
};
