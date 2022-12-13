const validationCreatedAt = (require, response, next) => {

  const { description } = require.body;

  const date = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if(!date.test(description.createdAt)) return response.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
  
  next();
}

module.exports = validationCreatedAt;