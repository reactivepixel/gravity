const router = require('express').Router();
const questionCtrl = require('../controllers/questions');

// GET /questions by
router.get('/list/:quizId', questionCtrl.getByQuizId);

// GET /questions/:id
router.get('/:id', questionCtrl.getOneById);

// POST /questions
router.post('/', questionCtrl.createQuestion);

// PUT /questions/:id
router.put('/:id', questionCtrl.updateQuestion);

// DELETE /questions/:id
router.delete('/:id', questionCtrl.removeQuestion);

module.exports = router;
