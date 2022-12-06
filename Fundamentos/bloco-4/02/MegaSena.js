//Programa gerar números mega sena
//[ ] Arrumar problema de repetição de números na mesma array
//[ ] Acertar todos os números
let megaSena = [];
let i=0;

for(let index=0;index<6;index++){
//megaSena[index] = Math.floor(Math.random() * 60) +1;
megaSena.push(Math.floor(Math.random() * 60) +1);
}

console.log(megaSena);

