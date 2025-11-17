//Laços de Repetição
console.log("Olá, mundo!");
console.log("Olá, mundo!");
console.log("Olá, mundo!");
console.log("Olá, mundo!");
console.log("Olá, mundo!");


//Criamos uma variavel para contar quantas vezes o loop já rodou
let numeroDeVezes = 0;

//Enquanto a variavel numeroDeVezes for menor que 5, o bloco de código dentro do while será executado
while (numeroDeVezes < 5) {
    console.log("Olá, mundo!");
    //Incrementamos a variavel numeroDeVezes em 1 a cada iteração
    numeroDeVezes++;
}
numeroDeVezes = numeroDeVezes + 1; // mesma coisa que numeroDeVezes++

for (let i = 0; i < 5; i++) {
    console.log("Olá, mundo!");
}

let frutas = ["Maçã", "Banana", "Uva", "Laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log("Eu gosto de" +frutas[i]);
}
