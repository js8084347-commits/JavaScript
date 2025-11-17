//BLOCO 01
//Bom dia flor do diaa 7 vezes
for (let i = 0; i < 7; i++) {
    console.log("Bom dia, flor do Diaa!");
  }
  
// Imprima os números ímpares de 1 a 25
for (let i = 1; i <= 25; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }

//Tabuada Simples

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

console.log(numero);

//Soma dos Elementos de um Array
let numeros = [12, 5, 23, 17, 8, 30, 4];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma + numeros[i];
}

console.log("Soma total:", soma);