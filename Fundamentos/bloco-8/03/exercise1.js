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

// Adicione o código do exercício aqui:

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

// 1)
// function formatedBookNames() {
//   // escreva seu código aqui
//   return books.map((element) => `O nome do Livro: ${element.name} - Gênero: ${element.genre} - Nome do Autor: ${element.author.name}`);
// }
// console.log(formatedBookNames());

// 2)

// function newbjects() {
//   return books.map((element) => ({
//     age: element.releaseYear - element.author.birthYear,
//     author: element.author.name,
//   })).sort((a,b) => a.age - b.age);
// }
// console.log(newbjects());

// 3)
// function newobjects(){
//   return books.filter((elements) => (elements.genre === 'Ficção Científica' || elements.genre === 'Fantasia'));
// }
// console.log(newobjects());

// 4)
// function older(){
//   return books.filter((element) => (2022 - parseInt(element.releaseYear)) > 60).sort((a,b) => a.releaseYear -b.releaseYear);
// }
// console.log(older());
// 5)
// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

// function fantasyOrScienceFictionAuthors() {
//   // escreva seu código aqui
// }

// // 6)🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
// Copiar
// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

// function oldBooks() {
//   // escreva seu código aqui
// }





// 7)const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  
}
