document.addEventListener('DOMContentLoaded', function() {
    //seleciona o botão do menu e a lista de navegação
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    //função para alternar a visibilidade do menu
    function toggleMenu() {
        navList.classList.toggle('active'); //adiona ou remove a classe 'active'
    }

    //adiciona um ouvinte de evento ao botão de alternar menu
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    //fecha o menu quando um link de navegação é clicado (em dispositivos móveis)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });


    //implementando scroll suave para as âncoras de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); //impede o comportamento padrão do link

            const targetId = this.getAttribute('href') //obtém o ID do alvo
            const targetElement = document.querySelector(targetId); //seleciona o elemento alvo

            if (targetElement) {
                //Calcula a posição de rolagem, ajustando para o header fixo 
                const headerOffset = document.querySelector('.main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' //roda suavemente até a posição calculada
                });
            }
        });
    })
});