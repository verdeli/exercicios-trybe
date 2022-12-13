const validationDifficulty = (require, response, next) => {
  
  const { description: {difficulty} } = require.body;

  const difficultyFix = ['Fácil','Médio', 'Difícil', 'difficulty'];

if(!difficultyFix.some((element) => element === difficulty)) return response.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
// if(!difficultyFix.some((element) => element in require.body)) return response.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  next();
}

module.exports = validationDifficulty;