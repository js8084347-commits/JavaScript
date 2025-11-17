/* Complete o codigo para :
Adicionar "Limão no final"
Remover o primeiro elemento
Ordenar alfabeticamente
Inverter a ordem */

let mercado = ["uva", "maçã", "banana"];
mercado.push("limão"); // Adiciona "limão" no final
console.log(mercado);
mercado.shift("uva"); // Remove o primeiro elemento
mercado.sort(); // Ordena alfabeticamente
console.log(mercado);
mercado.reverse(); // Inverte a ordem
console.log(mercado);

/*Qual é o valor final do array cores após as seguintes operações? */

let cores = ["azul", "verde"];
cores.push("amarelo"); // Adiciona "amarelo" no final
cores.unshift("vermelho"); // Adiciona "vermelho" no início
cores.pop(); // Remove o último elemento
cores.shift(); // Remove o primeiro elemento
cores.sort(); // Ordena alfabeticamente
console.log(cores); // Qual é o valor final do array cores? (Aparece azul, verde)

/* O que será  impresso no console após cada operação? */
let numeros = [3, 1, 4, 1, 5, 9];
numeros.sort(); // Ordena os números
console.log(numeros); // Primeiro console.log   1,1,3,4,5,9
numeros.sort((a, b) => a - b); // Ordena em ordem decrescente
console.log(numeros); // Segundo console.log    1,1,3,4,5,9
numeros.reverse(); // Inverte a ordem
console.log(numeros); // Terceiro console.log   9,5,4,3,1,1


