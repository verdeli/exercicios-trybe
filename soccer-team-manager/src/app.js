// src/app.js
const express = require('express');
const activities = require('./data/activities');

const app = express(); // instancia de um servidor

// app.use(express.json());

app.get('/activities', (request, response) => {
  console.log('Listando tarefas ...');  
  return response.status(200).json(activities);
});
app.post('/activities', (request, response) => {
  console.log('CADASTRANDO TAREFAS ...');
  console.log(request.body);
  
  const { description, status, priority } = request.body;

  const task = {
    id: activities.length + 1,
    description,
    priority,
    status,
  };

  activities.push(task);
  return response.json(200).send('OK');
});

module.exports = app;