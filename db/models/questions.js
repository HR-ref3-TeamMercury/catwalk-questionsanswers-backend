const client = require('../index');

module.exports = {

  getAll: (productId, count = 5, page = 1, callback) => {
    // const count = 5;
    client.query(
      `SELECT
      q.id,
      q.product_id,
      q.body AS question_body,
      q.date,
      q.username,
      q.email,
      q.reported,
      q.helpful,
      a.body AS answer_body,
      a.id AS answer_id,
      a.date_written AS answer_date,
      a.answerer_name,
      a.helpful AS answer_helpfulness,
      ap.answer_id AS ap_answer_id,
      ap.url,
      ap.id AS ap_id
      FROM questions q
      LEFT JOIN answers a ON q.id = a.question_id
      LEFT JOIN answers_photos ap ON a.id = ap.answer_id
      WHERE q.product_id = ${productId}`,
    )
      .then((res) => {
        const returnObj = {
          product_id: res.rows[0].product_id,
          results: res.rows
            .reduce((acc, item) => {
              const existingQuestion = acc.find((q) => q.question_id === item.id);
              const question = existingQuestion || {
                question_id: item.id,
                question_body: item.question_body,
                question_date: item.date,
                asker_name: item.username,
                question_helpfulness: item.helpful,
                reported: item.reported,
                answers: {},
              };
              if (item.answer_id) {
                const existingAnswer = question.answers[item.answer_id.toString()];
                question.answers[item.answer_id.toString()] = existingAnswer || {
                  id: item.answer_id,
                  body: item.answer_body,
                  date: item.answer_date,
                  answerer_name: item.answerer_name,
                  helpfulness: item.answer_helpfulness,
                  photos: [],
                };
              }
              if (item.ap_id) {
                question.answers[item.answer_id.toString()].photos.push(item.url);
              }
              if (!existingQuestion) {
                return [...acc, question];
              }
              return acc;
            }, [])
            .slice(count * (page - 1), (count * page)),
        };
        callback(null, returnObj);
      })
      .catch((error) => callback(error));
  },

  create: (params, callback) => {
    client.query(
      `INSERT INTO questions
      (body, username, email, product_id, reported, helpful, date)
      VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [...params, false, 0, Date.now()],
      (err, res) => {
        callback(err, res);
      },
    )
      .catch((error) => callback(error));
  },

  helpful: (questionId, callback) => {
    client.query(`UPDATE questions SET helpful = helpful + 1 WHERE id = ${questionId}`,
      (err, res) => {
        callback(err, res);
      });
  },
};
