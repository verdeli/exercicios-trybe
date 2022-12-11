// const { readFile } = require('fs').promises;
const { join } = require('path');

const fs = require('fs').promises;

async function simpsons() {
  
  const file = await fs.readFile(join(__dirname, '/simpson.json'), 'utf-8');
  const personagem = JSON.parse(file);
  console.log(personagem);

  const simpson = personagem.map(({ id, name }) => console.log(`${id} - ${name}`));

// C retirar id 10 e 4

const personagemSem10e4 = personagem.filter((simpson) => simpson.id !== '10' && simpson.id !== '4');
console.log(personagemSem10e4);

//D Criar um novo json
// const simpsonsId1e4 = personagem.filter((simpson1e4) => simpson1e4.id === '1' && simpson1e4.id === '4');
family = [1,2,3,4];
const simpsonsId1e4 = personagem.filter((p) => family.includes(Number(p.id)));

console.log(simpsonsId1e4);

const simpsonFamily = await fs.writeFile('./BackEnd/04/Dia-01/simpson/simpsonFamily.json', JSON.stringify(simpsonsId1e4, null,2), 'utf-8');

//E)adicionando mais um elemento no Obj

  personagem.push({id: '11', name: 'Nelson Muntz'})
  personagem.push({id:'12', name:'Verdelin'});
  console.log(personagem);

//F) Criar uma função que substitua o personagem Nelson:
const subsNelson = personagem.filter((p) => p.name !== 'Nelson Muntz');
const addMaggie = subsNelson.concat({id: '8', name: 'Maggie Simpson'});
console.log(addMaggie);

}

async function main(){
  await simpsons();
}

main();
