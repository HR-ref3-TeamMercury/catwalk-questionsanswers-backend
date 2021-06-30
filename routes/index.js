const express = require('express');
const controller = require('../db/controllers');

const router = express.Router();

router.get('/questions', controller.questions.get);
router.post('/questions', controller.questions.post);
module.exports = router;
