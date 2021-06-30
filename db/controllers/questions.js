const models = require('../models');

module.exports = {

  get: (req, res) => {
    models.questions.getAll((err, results) => {
      if (err) {
        console.error('an error occurred in getting questions.', err);
      }
      res.json(results);
    });
  },

  post: (req, res) => {
    const params = [req.body.body, req.body.name, req.body.email, req.body.product_id];
    models.questions.create(params, (err, results) => {
      if (err) {
        console.error('an error occurred in creating a question', err);
      }
      res.sendStatus(201);
    });
  },

  put: (req, res) => {

  },
};
