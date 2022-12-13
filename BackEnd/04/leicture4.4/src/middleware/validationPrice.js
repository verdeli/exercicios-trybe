const validationPrice = (require, response , next) => {

  const { price } = require.body;

  if(price === undefined)  return response.status(400).json({ "message": "O campo price é obrigatório" });
  if(price < 0 || typeof price !== 'number') return response.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });

  next();
}

module.exports = validationPrice;