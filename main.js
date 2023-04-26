const valor1 = 10
const valor2 = 21

const resultado1 = valor1 + valor2
const resultado2 = valor1 - valor2
const resultado3 = valor1 * valor2
const resultado4 = valor1 / valor2
const resultado5 = valor1 % valor2

console.log("", resultado1);
console.log("", resultado2);
console.log("", resultado3);
console.log("", resultado4);
console.log("", resultado5);


// let idade = 10
// idade += 10

// console.log(idade)

// exercício 1 
const n1 = 3
const n2 = 4

const resultadoSoma = n1 + n2 

console.log("resultado do exercício 1 é ", resultadoSoma);

//exercício 2  
const n3 = 3
const n4 = 5

const resultadoMulti = (n3 * n4) / 2 

console.log("resultado do exercício 2 é ",resultadoMulti);

//exercício 3 
const n5 = 5
const n6 = 4 

const resultadoSub = (n6 - n5) * -1 

console.log("resultado do exercício 3 é ", resultadoSub);

//exercício 4 
const n7 = 234
const n8 = 5

const resultadoDivisao = n7 % n8

console.log("resultado do exercício 4 é ",resultadoDivisao);

// operadores aritméticos 

const priN = 10
const segN = 20

console.log("10 === 20 é ", priN === segN);
console.log('10 !== 20 é ', priN !== segN);
console.log("10 > 20 é ", priN > segN);
console.log("10 >= 20 é ", priN >= segN);
console.log("10 < 20 é ", priN < segN);
console.log("10 <= 20 é ", priN <= segN);

console.log("1"===1);
console.log(1===1);
console.log("1"==1);

// operadores lógicos 

// &&
// true && true    resultado = true
// true && false   resultado = false
// false && true   resultado = false
// false && false  resultado = false

// ||
// true || true    resultado = true
// true || false   resultado = true
// false || true   resultado = true
// false || false  resultado = false

// ! 
// !true           resultado = false
// !false          resultado = true

//exercícios 
const nome = prompt("Qual o seu nome?");
const idade = parseInt(prompt("Qual sua idade?"));
const idadeEm2050 = 2050 - new Date().getFullYear() + idade;

console.log("é maior de idade ", idade > 18);
console.log("em 2050", nome, "terá", idadeEm2050 );












