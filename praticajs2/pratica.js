let fruta = ["Maçã", "Banana", "Uva" ];
console.log(fruta);
console.log(fruta[0]); // Acessa o primeiro elemento do array
console.log(fruta.length); // Mostra o tamanho do array
fruta.push("Laranja","morango" ); // Adiciona um elemento ao final do array, é preciso colocar console log depois para mostrar a alteração
console.log(fruta);
console.log(fruta.length);
fruta.unshift("Abacaxi"); // Adiciona um elemento no início do array
console.log(fruta);
console.log(fruta.length);
console.log(fruta[0]);

//excluindo elementos
fruta.pop(); // Remove o último elemento do array
console.log(fruta);
fruta.shift(); // Remove o primeiro elemento do array
console.log(fruta);

//Ordenando e Invertendo Arrays 
fruta.sort(); // Ordena os elementos do array em ordem alfabética
console.log(fruta);
fruta.reverse(); // Inverte a ordem dos elementos do array
console.log(fruta);


