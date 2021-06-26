const questionsData = require('../../../data/questions.csv');

const answersData = ('../../../data/answers.csv');

const answersPhotosData = ('../../../data/answers_photos.csv');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(() => knex('answers').del())
    .then(() => knex('answers_photos').del())
    .then(() => knex('questions').insert(questionsData))
    .then(() => knex('answers').insert(answersData))
    .then(() => knex('answers_photos').insert(answersPhotosData));
};
