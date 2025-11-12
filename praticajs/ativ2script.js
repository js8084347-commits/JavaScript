function inicio() {
    let nome = prompt("Qual é o seu nome?");
    let idade = prompt("Quantos anos você tem?");
    let interesse = prompt("Qual é o seu interesse principal? (ex: Tecnologia, Design, Marketing)");
  
    let resposta = document.getElementById("resultado");
  
    // Lista de interesses válidos
    const opcoesValidas = ["tecnologia", "design", "marketing"];
  
    // Validação das entradas
    if (!nome || !idade || !interesse) {
      resposta.innerHTML = `<p>⚠️ Você precisa preencher todas as informações para continuar.</p>`;
      return; // Encerra a função
    }
  
    // Normaliza o texto (deixa em minúsculas e remove espaços extras)
    interesse = interesse.trim().toLowerCase();
  
    // Verifica se o interesse está entre as opções válidas
    if (!opcoesValidas.includes(interesse)) {
      resposta.innerHTML = `
        <p>⚠️ O interesse informado não é válido.</p>
        <p>Por favor, escolha uma das opções: <strong>Tecnologia</strong>, <strong>Design</strong> ou <strong>Marketing</strong>.</p>
      `;
      return;
    }
  
    // Se tudo estiver certo, mostra a mensagem personalizada
    resposta.innerHTML = `
      <p>Seja bem-vindo(a), <strong>${nome}</strong>!</p>
      <p>Que legal ter você por aqui. Com seus <strong>${idade}</strong> anos e seu interesse em <strong>${interesse}</strong>,</p>
      <p>temos certeza de que vai gostar do nosso conteúdo. Explore o site!</p>
    `;
  }
  
  function limparResultado() {
    let resposta = document.getElementById("resultado");
    resposta.innerHTML = `<p id="initial-message">Aguardando sua interação... Clique em "Chamar Boas-Vindas" para iniciar.</p>`;
  }