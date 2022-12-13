const validationName = require('./middleware/validationName');
const validationPrice = require('./middleware/validationPrice');
const validationDescription = require('./middleware/validationDescription');
const validationCreatedAt = require('./middleware/validationCreateAt');
const validationRating = require('./middleware/validationRating');
const validationDifficulty = require('./middleware/validationDifficulty');

const generateToken = require('./utils/generateToken');
const validadeToken = require('./middleware/validadeToken');

const express = require('express');
const app = express();
app.use(express.json());




app.post('/activities', validadeToken, validationName, validationPrice, validationDescription, validationCreatedAt, validationRating, validationDifficulty, (require, response)=> { 
  const { name, price, description: {rating, difficulty, createdAt } } = require.body;
  
  const newActivities = {
    name,
    price,
    description: {
      rating,
      difficulty,
      createdAt
    }
  };
  
  return response.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
    // return response.status(201).json(newActivities);
  })

  app.post('/signup', (require, response) => {

    const { email, password, firstName, phone } = require.body;

    const newUser = {
      email,
      password,
      firstName,
      phone
    };

    return response.status(200).json( { message: generateToken() } );
  })


module.exports = app;