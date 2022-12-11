// const { response } = require('express');
const { response } = require('express');
const express = require('express');
const fs = require('fs').promises;
const { join } = require('path');
const app = express();

app.use(express.json());

app.get('/', (require, response) => response.status(200).json({ message: 'Hello World' }));

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/teams', (require, response) => response.status(200).json({ teams }));

app.get('/movies', async (require, response) => response.status(200).json({ movies }));


async function readFile() {

try {

  const data = await fs.readFile(join(__dirname, './movies.json'), 'utf-8');

  return JSON.parse(data);

} catch(error) {

console.log('Arquivo não encontrado. ', error.message);

}
}

app.put('/movies/:id', async (require, response) => {
try{

  const movies = await readFile();
  console.log(movies);
  const { id } = require.params;
  const { movie, price } = require.body;

  const selectMovie = movies.find((movie) => movie.id === +id);

  selectMovie.movie = movie;
  selectMovie.price = price;

  const allMovies = JSON.stringify([...movies, selectMovie], null, 2);

  fs.writeFile(join(__dirname, './movies.json'), allMovies);

  response.status(200).json({status: "Success!"});

}catch(error){
  response.status(500).send({ error: error.message});
}
})
app.delete('/movies/:id', async (require, response)=>{
  try {
    const movies = await readFile();
    const { id } = require.params;

    const deletedMovies = movies.filter((movie) => movie.id !== +id);
    const updateMovie = JSON.stringify(deletedMovies, null, 2);
    fs.writeFile(join(__dirname, './movie.json'), updateMovie);

    response.status(200).send({status: "Sucess!"});
  } catch (error) {
  response.status(500).send({ error: error.message});    
  }
})

module.exports = app;