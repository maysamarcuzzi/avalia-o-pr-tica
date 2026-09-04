// 1. Funcionalidade de Alternar Tema (Claro / Escuro)
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// 2. Funcionalidade dos Botões "Quero Esse!"
// Seleciona todos os botões de pedido da página
const botoesPedir = document.querySelectorAll('.btn-pedir');

// Adiciona o evento de clique em cada um deles
botoesPedir.forEach((botao) => {
    botao.addEventListener('click', (evento) => {
        // Encontra o card do bolo onde o botão foi clicado
        const cardBolo = evento.target.closest('.card-bolo');
        
        // Pega o nome do bolo dentro daquele card (o texto do h3)
        const nomeDoBolo = cardBolo.querySelector('h3').textContent;
        
        // Exibe uma mensagem na tela para o usuário
        alert(`🎂 Ótima escolha! O bolo "${nomeDoBolo}" foi adicionado ao seu carrinho.`);
    });
});
