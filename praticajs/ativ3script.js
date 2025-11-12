// ======================================
// Seção 1: Operadores de Atribuição (=)
// ======================================

// Atribuindo o Resultado de uma Expressão:
let num1 = 15;
let num2 = 7;
let soma = num1 + num2;
console.log("Resultado da soma:", soma); // 22

// Reatribuição de Valor:
let contador = 0;
contador = 10;
contador = contador + 5;
console.log("Valor final de contador:", contador); // 15


// ======================================
// Seção 2: Operadores Aritméticos (+, -, *, /, %, **, ())
// ======================================

// Operações Básicas:
let a = 20;
let b = 5;
console.log("a + b =", a + b); // 25
console.log("a - b =", a - b); // 15
console.log("a * b =", a * b); // 100
console.log("a / b =", a / b); // 4

// Operador de Módulo (%)
console.log("a % b =", a % b); // 0

// Operador de Exponenciação (**)
console.log("2 ** 3 =", 2 ** 3); // 8
console.log("5 ** 2 =", 5 ** 2); // 25

// Combinação de Operadores:
let x = 10, y = 4, z = 2;
let resultado = (x + y) * z - (x / y);
console.log("Resultado da expressão (x + y) * z - (x / y):", resultado);


// ======================================
// Seção 3: Operadores de Atribuição Combinados (+=, -=, *=, /=, %=)
// ======================================

// Soma e Atribuição (+=)
let saldo = 100;
saldo += 50; // Depósito de 50
console.log("Saldo após depósito:", saldo); // 150

// Subtração e Atribuição (-=)
saldo -= 30; // Retirada de 30
console.log("Saldo após retirada:", saldo); // 120
