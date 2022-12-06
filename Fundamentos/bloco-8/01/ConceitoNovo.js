const checkout = (items, desconto) => {
  let total = 0;
  //for que percorre todo o array
  for (const item of items) {
    total += item;
  }
  total -= desconto(total);
  
  return total;
};

// const desconto10porcento = total * .1;
// const desconto20porcento = total * .2;
const desconto20reais = () => 20;
const desconto50reais = () => 50;
const descontoPromocional = (total) => (total > 100) ? 20 : total * .3;
const descontoMaior = (total) => (total > 150) ? 50 : 0;

console.log(checkout([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], desconto20reais));