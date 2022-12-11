// const { readFile } = require('fs').promises;
const { join } = require('path');

const fs = require('fs').promises;

async function simpsons() {
  
  const file = await fs.readFile(join(__dirname, '/simpson.json'), 'utf-8');
  const personagem = JSON.parse(file);
  console.log(personagem);
  const simpson = personagem.map(({ id, name }) => console.log(`${id} - ${name}`));

}

async function main(){
  await simpsons();
}

main();
