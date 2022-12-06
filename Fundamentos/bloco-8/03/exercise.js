// 1)
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten());


const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2)Todas as pessoas autoras
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames() {
//   // escreva seu código aqui
// const frase = books.map((element) => element.author.name).reduce((acc,cur) => `${acc}, ${cur}`);
// const pontoFinal = `${frase}.`;
// return pontoFinal;
// }
// console.log(reduceNames());




// 🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const expectedResult = 43;

// function averageAge() {
//   // escreva seu código aqui
//   const numerosLivros = books.length;
//   const media = books.map((element) => {
//     element.reduce((acc, cur) => {
//       const soma = acc + (books.releaseYear - books.author.birthYear);
//       return soma;
//       ), 0
//   }
//   }
// console.log(numerosLivros);

// console.log(averageAge());

// array =  ['aula', 'ao', 'vivo'];
// console.log(array.reduce((acc, val) => `${acc} ${val}`));

// 🚀 6.**- Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato
//  { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno 
//  na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map.
//   Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const quantidade = grades[0].length;
  console.log(quantidade);
  const caderneta = students.map((estudante,index) => ({
    name: estudante,
    media: (grades[index].reduce((acc,cur) => acc + cur / quantidade,0))}));
    return caderneta;
  }
console.log(studentAverage());































