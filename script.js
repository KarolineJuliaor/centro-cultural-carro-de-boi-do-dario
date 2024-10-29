// Função para rolar para o topo ao clicar em "Voltar ao Topo"
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Botão "Voltar ao Topo"
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Voltar ao Topo';
backToTopButton.className = 'back-to-top';
backToTopButton.onclick = scrollToTop;
document.body.appendChild(backToTopButton);

// Estilo do botão "Voltar ao Topo"
const style = document.createElement('style');
style.innerHTML = `
    .back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #6200ea;
        color: white;
        border: none;
        padding: 0.8rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        display: none;
        transition: background-color 0.3s;
    }
    
    .back-to-top:hover {
        background-color: #ff6f61;
    }
`;
document.head.appendChild(style);

// Exibir o botão ao rolar a página
window.onscroll = function() {
    if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};
