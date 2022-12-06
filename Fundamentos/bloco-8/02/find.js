// const numbers = [19, 21, 30, 3, 45, 22, 15, 44, 267183,23101230012,11,1];

// const findDivisibleBy3And5 = () => {
//   // Adiciona seu código aqui
//   return numbers.find((numeros) => numeros % 3 === 0 && numeros % 5 === 0);
// }

// console.log(findDivisibleBy3And5());

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   // Adicione seu código aqui:
//   return names.find((nomes) => nomes.length >= 5);
// }

// console.log(findNameWithFiveLetters());

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic(id) {
//   // Adicione seu código aqui
//   return musicas.find((procura) => procura.id === id);
// }

// console.log(findMusic('31031685'))

// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Reprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = (studentGrades) => (
//   Object.values(studentGrades).every((grade) => grade === 'Aprovado')
// );

// console.log(verifyGrades(grades));

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   //Adicione seu código aqui
//   return arr.some((nome) => nome === name);

// }

// console.log(hasName(names, 'Ana'));

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   //Adicione seu código aqui
//   return arr.every((velhote) => velhote.age >= minimumAge);
// }

// console.log(verifyAges(people, 18));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui

// people.sort((a , b) => {
// let idadeA = 0;
// let idadeB = 0;

// a.age.forEach((element) => idadeA += element);
// b.age.forEach((element) => idadeB += element);
// return idadeA - idadeB;

// });
people.sort((a,b) =>
a.age - b.age );

console.log(people);