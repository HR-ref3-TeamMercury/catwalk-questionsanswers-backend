/* eslint-disable no-console */
const models = require('../models');

module.exports = {

  get: (req, res) => {
    const { page, count, product_id: productId } = req.query;
    models.questions.getAll(productId, count, page, (err, results) => {
      if (err) {
        console.error('an error occurred in getting questions.', err);
      }
      res.json(results);
    });
  },

  post: (req, res) => {
    const params = [req.body.body, req.body.name, req.body.email, req.body.product_id];
    models.questions.create(params, (err) => {
      if (err) {
        console.error('an error occurred in creating a question', err);
      }
      res.sendStatus(201);
    });
  },

  putHelpful: (req, res) => {
    const { question_id: questionId } = req.params;
    console.log(questionId);
    models.questions.helpful(questionId, (err) => {
      if (err) {
        console.error('an error occurred in marking a question as helpful', err);
      }
      res.sendStatus(201);
    });
  },

  putReport: (req, res) => {
    const { question_id: questionId } = req.params;

    models.questions.report(questionId, (err) => {
      if (err) {
        console.error('an error occurred in reporting a question', err);
      }
      res.sendStatus(201);
    });
  },
};
