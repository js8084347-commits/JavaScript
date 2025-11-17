let somaDados = 0;
let rodadas = 0;
while (somaDados < 10){
    rodadas++;
    let dado1 = Math.floor (Math.random() * 6) + 1; // Gera um número aleatório entre 1 e 6
    let dado2 = Math.floor (Math.random() * 6) + 1; // Gera um número aleatório entre 1 e 6
    somaDados = dado1 + dado2;
    console.log (`rodada ${rodadas}: dado1 = ${dado1}, dado2 = ${dado2}, soma = ${somaDados}`);
}
console.log (`Fim de jogo! A soma (${somaDados}) atingiu ou ultrapassou 10 em ${rodadas} rodadas.`);