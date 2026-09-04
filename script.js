// Garante que o código só vai rodar quando toda a página estiver carregada
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Botão de Alternar Tema
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // 2. Botões "Quero Esse!"
    const botoesPedir = document.querySelectorAll('.btn-pedir');
    
    botoesPedir.forEach((botao) => {
        botao.addEventListener('click', (evento) => {
            // Caminho direto para pegar o título do bolo
            const cardBolo = evento.target.parentElement;
            const nomeDoBolo = cardBolo.querySelector('h3').textContent;
            
            alert(`🎂 Ótima escolha! O bolo "${nomeDoBolo}" foi adicionado ao seu carrinho.`);
        });
    });

});
