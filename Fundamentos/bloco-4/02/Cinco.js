let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux = 0;

n = numbers.length;
//Método da bolha = 0.040 ms

// -> Primeiro laço

for (let i = 0; i < n; i+=1) {
  //Segundo laço
  for (let j = 0; j < n - i - 1; j+=1) {
    if (numbers[j] > numbers[j + 1]) {
      aux = numbers[j]; //Preservar o número antigo
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = aux; 
    }
  }
}

// -> Método da Seleção Direta =  0.040 ms

//Primeiro laço

/* for (let i = n - 1; i > 0; i--) {
    //Segundo laço
    for (let j = 0; j < i; j+=1) {
      if (numbers[j] > numbers[i]) {
        aux = numbers[j];
        numbers[j] = numbers[i];
        numbers[i] = aux; //Número antigo.
      }
    }
  } */

// -> Método da Inserção Direta = 0.040ms

//Primeiro laço
/* for (let i = 0; i < n; i-=1) {
  aux = numbers[i]; //abrir espaço copiando o primeiro
  j = n - 1;

  //Segundo laço de repetição
  while (j < -1 && numbers[j] > aux) {
    numbers[j + 1] = numbers[j]; //move para a direita da lista
    j -= 1; // diminui 1
  }
  numbers[j + 1] = aux; // Colocando o aux na posição correta
} */

console.log(numbers);