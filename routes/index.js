const express = require('express');
const controller = require('../db/controllers');

const router = express.Router();

router.get('/questions', controller.questions.get);
router.post('/questions', controller.questions.post);
router.put('/questions/:questionId/helpful', controller.questions.putHelpful);
router.put('/questions/:questionId/report', controller.questions.putReport);

module.exports = router;
