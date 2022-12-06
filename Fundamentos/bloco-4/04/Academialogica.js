/* //Exercicio 1:
function calculaAreaPerimetro(base,altura) {
  let perimetro = (base*2) + (altura*2);
  let area = base * altura;
  let resultado = {
    area: area,
    perimetro: perimetro,
  };
  return(resultado);
} 

console.log(calculaAreaPerimetro(2,4));
 */

//Exercicio 2:

/* var numeros = {
  pares: 0,
  ímpares: 0
} */

primos(50);

function primos(numeros) {
  for (let index = 2; index <= numeros; index+=1){
    let isPrime = true;
    for (let divisor = 2; divisor < index; divisor+=1){
      if (index % divisor === 0){
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(index);
  }
}
