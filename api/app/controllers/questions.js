// load in the question Model
const { Questions, Choices } = require('../models');

// get all the questions for a quiz
exports.getByQuizId = (req, res) => {
  const questions = Questions.findAll();
  const { quizId } = req.params;
  // filter the questions to only questions for the quiz
  const publicQuestions = questions
    .filter(question => question.quizId === quizId)
    .map((question) => {
      const refactoredQuestion = question;
      // filter the choice to only choice for this question
      refactoredQuestion.choices = Choices
        .findAll()
        .filter(choice => choice.questionId === refactoredQuestion.id);
      return refactoredQuestion;
    });
  // respond with json of the public questions array
  res.json(publicQuestions);
};

// find one question by id
exports.getOneById = (req, res) => {
  // get the id from the route params
  const { id } = req.params;
  // search our question model for the question
  const question = Questions.findByPk(id);
  // if no question is found
  if (!question) {
    // return a 404 (not found) code
    res.sendStatus(404);
    return;
  }
  // if the question is found send it back.
  res.json(question);
};

// add a new question
exports.createQuestion = (req, res) => {
  // get the title and type values from the request body
  const { title, quizId } = req.body;
  // create the item and save the new id
  const id = Questions.create({ title, quizId });
  // send the new id back to the request
  res.json({ id });
};

// update an existing question
exports.updateQuestion = (req, res) => {
  const { id } = req.params;
  const updatedQuestion = Questions.update(req.body, id);
  res.json(updatedQuestion);
};

// delete a question
exports.removeQuestion = (req, res) => {
  // get the id from the route
  const { id } = req.params;
  // remove the question
  Questions.destroy(id);
  // send a good status code
  res.sendStatus(200);
};
