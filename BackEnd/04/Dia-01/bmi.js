//Exercicio 01

function calculateIMC (){
const readline = require('readline-sync');

const weight = readline.question('Qual o seu peso: ');
const height = readline.question('Qual a sua altura: ');

const imc = (weight / (height*height)).toFixed(2);
console.log(imc); 

const MAGREZA = 18.5;
const NORMAL = 18.5;
const SOBREPESO = 25;
const OBESIDADE1 = 35;
const OBESIDADE2 = 40;

switch (true) {
  case imc > OBESIDADE2:
    console.log('Obesidade grau III e IV, muito gordo, necessita emagrecer');

    break;
  case imc > OBESIDADE1:
    console.log('Obesidade grau II, quantidade de gordura acima do normal, necessita emagrecer');
    
    break;

  case imc > SOBREPESO:
    console.log('Obesidade grau I, tá mei gordin, mais dieta e academia');

    break;
  
  case imc > NORMAL:
    console.log('peso Normal');

    break;

  case imc < MAGREZA:
    console.log('Peso abaixo do normal, magreza');
    
    break;

  default:
    console.log('Programa entrou aonde não devia!');
    break;
}
}
calculateIMC();


//exercicio 2





//exercicio 3