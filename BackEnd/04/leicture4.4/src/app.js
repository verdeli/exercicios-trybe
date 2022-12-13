const validationName = require('./middleware/validationName');
const validationPrice = require('./middleware/validationPrice');
const validationDescription = require('./middleware/validationDescription');
const validationCreatedAt = require('./middleware/validationCreateAt');
const validationRating = require('./middleware/validationRating');
const validationDifficulty = require('./middleware/validationDifficulty');

const generateToken = require('./utils/generateToken');

const express = require('express');
const app = express();
app.use(express.json());




app.post('/activities', validationName, validationPrice, validationDescription, validationCreatedAt, validationRating, validationDifficulty, (require, response)=> { 
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

  app.post('/sign', (require, response)=>{
    const { email, password, firstName, phone } = require.body;

    const newUser = {
      email,
      password,
      firstName,
      phone,
      token: generateToken
    };
    
    return response.status(200).json({ "message": "Usuário cadastrado com sucesso!" });
  })


module.exports = app;