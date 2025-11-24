document.addEventListener('DOMContentLoaded', () => {

    //1. Pegar os elementos do HTML que vamos usar 
    const formulario = document.getElementById('meuFormulario');
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const erroNome = document.getElementById('nomeErro');
    const erroEmail = document.getElementById('emailErro');
    const statusFormulario = document.getElementById('statusformulario');

    // funções Auxiliares para mostrar/ esconder os erros--- 

    function mostrarErro(inputElemento, mensagemErroElemento, mensagem) {
        inputElemento.classList.add('Invalido'); 
        inputElemento.classList.remove('Valido'); 
        mensagemErroElemento.textContent = mensagem; 
    }

    function limparErro(inputElemento, mensagemErroElemento) {
        inputElemento.classList.remove('Invalido'); 
        inputElemento.classList.add('Valido'); 
        mensagemErroElemento.textContent = ''; 
    }

    // ==========================
    // Validação do Nome
    // ==========================

    function validarNome() {
        const nomeValor = inputNome.value.trim(); 

        if (nomeValor === '') { 
            mostrarErro(inputNome, erroNome, 'Por favor, preencha este campo!');
            return false;

        } else if (nomeValor.length < 2) {
            mostrarErro(inputNome, erroNome, 'O nome deve ter pelo menos 2 caracteres.');
            return false;

        } else {
            limparErro(inputNome, erroNome);
            return true;
        }
    }

    // ==========================
    // Validação do Email
    // ==========================

    function validarEmail() {
        const emailValor = inputEmail.value.trim(); 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValor === '') { 
            mostrarErro(inputEmail, erroEmail, 'Por favor, preencha este campo!');
            return false;

        } else if (!emailRegex.test(emailValor)) {
            mostrarErro(inputEmail, erroEmail, 'Por favor, insira um email válido.');
            return false;

        } else {
            limparErro(inputEmail, erroEmail);
            return true;
        }
    }

    // ==========================
    // Validação em tempo real
    // ==========================

    inputNome.addEventListener('input', validarNome);
    inputEmail.addEventListener('input', validarEmail);

    // ==========================
    // Manipulação do envio do formulário
    // ==========================

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nomeValido = validarNome();
        const emailValido = validarEmail();

        if (nomeValido && emailValido) {

            statusFormulario.textContent = 'Formulário enviado com sucesso!';
            statusFormulario.classList.add('sucesso');
            statusFormulario.classList.remove('erro');

        } else {

            statusFormulario.textContent = 'Por favor, corrija os erros antes de enviar.';
            statusFormulario.classList.add('erro');
            statusFormulario.classList.remove('sucesso');

            // Limpa a mensagem de status após 5 segundos
            setTimeout(() => {
                statusFormulario.textContent = '';
                statusFormulario.classList.remove('erro');
            }, 5000);
        }
    });

});
