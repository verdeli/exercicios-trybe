const validationRating = (require, response, next) => {

  const { description: {rating} } = require.body; 

  const ratingFix = [1, 2, 3, 4, 5];

  if(!ratingFix.includes(rating)) return response.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
  

  next();
}

module.exports = validationRating;