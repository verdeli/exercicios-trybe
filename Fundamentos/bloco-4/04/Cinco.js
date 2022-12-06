numeroInteiros = [2, 3, 2, 5, 8, 2, 3,12,3,3,4,3,3,3,3];

function quantidadeMaior(numeroInteiros) {
  let maior = 0;
  for (let index in numeroInteiros) {
    if (numeroInteiros[maior] < numeroInteiros[index]) {
      maior = index;
    }
  }
  return maior;
}
console.log(quantidadeMaior(numeroInteiros));
