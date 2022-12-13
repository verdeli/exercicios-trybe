const validationDescription = (require, response, next) => {

const { description } = require.body;

if(!description) return response.status(400).json({ "message": "O campo description é obrigatório" });
if(!description.rating) return response.status(400).json({ "message": "O campo rating é obrigatório" });
if(!description.difficulty) return response.status(400).json({ "message": "O campo difficulty é obrigatório" });
if(!description.createdAt) return response.status(400).json({ "message": "O campo createdAt é obrigatório" });

  next();
}

module.exports = validationDescription;