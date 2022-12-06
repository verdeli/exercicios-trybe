const pessoas = [
  'Debora', 'Italo', ' Ayaonara', 'Ramila', 'Nelson'
];

pessoas.sort();

console.log(pessoas);

const number = [22,873,1,2334,55,4324,23,43,56,756,476,78,88,99,100];

function callback(a,b){
  return a -b;
}

number.sort(callback);


console.log(number);