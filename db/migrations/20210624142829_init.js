/* eslint-disable func-names */

exports.up = function (knex) {
  return knex.schema
    .createTable('questions', (table) => {
      table.increments('id');
      table.string('body', 1000);
      table.date('date');
      table.string('asker_name', 50);
      table.string('email', 50);
      table.boolean('reported', 50);
      table.integer('helpful', 50);
    })
    .createTable('answers', (table) => {
      table.increments('id');
      table.integer('question_id');
      table.string('body', 1000);
      table.date('date');
      table.string('answerer_name', 50);
      table.string('email', 50);
      table.boolean('reported', 50);
      table.integer('helpful', 50);
    })
    .createTable('answers_photos', (table) => {
      table.increments('id');
      table.integer('answer_id');
      table.string('url', 200);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('questions')
    .then(() => knex.schema.dropTable('answers'))
    .then(() => knex.schema.dropTable('answers_photos'));
};
