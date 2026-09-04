// Seleciona o botão de alterar tema
const themeToggleBtn = document.getElementById('theme-toggle');

// Adiciona um evento de clique ao botão
themeToggleBtn.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no elemento body
    document.body.classList.toggle('dark-mode');
});
