const validadeToken = (require, response, next) => {

  const { authorization } = require.headers;

  console.log(authorization);
  if(!authorization || authorization.length !== 16) return response.status(401).json({ "message": "Token inválido!" })

  next();
}

module.exports = validadeToken;