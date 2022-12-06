let salarioBase;
let salarioLiquido;
let impostoIR;
let valorIR;
let imposto;
let auxiliarImposto;

let salarioBruto = 3000;
//Boloco do INSS
if(salarioBruto < 1556.94){
    console.log('Alicota do INSS 8%');
    imposto = (salarioBruto*0.08);
    salarioBase = salarioBruto - (salarioBruto*0.08);
}else if(salarioBruto <= 2594.92){
    console.log('Alicota do INSS 9%');
    salarioBase = salarioBruto - (salarioBruto*0.09);
    imposto = (salarioBruto*0.09);
}else if(salarioBruto <= 5189.82){
    console.log('Alicota do INSS 11%');
    salarioBase = salarioBruto - (salarioBruto*0.11);
    imposto = (salarioBruto*0.11);
} else {
    console.log('Alicota Máxima R$ 570,88');
    salarioBase = salarioBruto - 570.88;
}

// Bloco do Imposto de Renda

if(salarioBruto <= 1903.98){
    console.log('ISENTO');
} else if(salarioBase <= 2826.65){
    console.log('Alicota de 7,5% de IR');
    impostoIR = salarioBase*0.075;
    valorIR = 142.80;
} else if(salarioBase <= 3751.05){
    console.log('Alicota de 15% de IR');
    impostoIR = salarioBase*0.15;
    valorIR = 354.80;
} else if(salarioBase <= 4664.68){
    console.log('Alicota de 22,5% de IR');
    valorIR = 636.13;
    impostoIR = salarioBase*0.225;
} else{
    console.log('Alicota Máxima de IR de 27,5%');
    valorIR = 869.36;
    impostoIR = salarioBase*0.275;
}


salarioBase = salarioBruto - imposto;
auxiliarImposto = impostoIR - valorIR;
salarioLiquido = salarioBase - auxiliarImposto;

console.log('Seu salário Base será de: ', salarioBase);
console.log('Seu salario Liquido será de: ', salarioLiquido);
    