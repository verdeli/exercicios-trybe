const validationName = (require, response, next )=> {
  
  const { name } = require.body;
  if(!name) return response.status(400).json({ "message": "O campo name é obrigatório" }); 
  
  if(name.length < 5) return response.status(400).json( { "message": "O campo name deve ter pelo menos 4 caracteres" } );

  next();
}

module.exports = validationName;