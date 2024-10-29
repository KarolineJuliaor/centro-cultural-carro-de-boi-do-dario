// Função para mostrar a atividade selecionada
function showActivity(activityId) {
    // Oculta todas as seções de atividade
    document.querySelectorAll('.activity-content').forEach(function(section) {
        section.style.display = 'none';
    });

    // Exibe a seção da atividade escolhida
    const activitySection = document.getElementById(activityId);
    if (activitySection) {
        activitySection.style.display = 'block';
        activitySection.classList.add('fade-in'); // Adiciona uma classe para animação
    } else {
        alert('Atividade não encontrada!');
    }

    // Rola a página até a seção da atividade
    const sectionPosition = activitySection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth' // Rolagem suave
    });
}

// Função para voltar ao topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave
    });
}

// Adiciona um botão "Voltar ao Topo"
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
        background-color: #4caf50; /* Verde pastel */
        color: white;
        border: none;
        padding: 1rem;
        border-radius: 5px;
        cursor: pointer;
        display: none; /* Inicialmente escondido */
        transition: background-color 0.3s;
    }
    
    .back-to-top:hover {
        background-color: #ff5733; /* Laranja suave */
    }
`;
document.head.appendChild(style);

// Exibe o botão "Voltar ao Topo" quando o usuário rola para baixo
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Adiciona animação de fade-in nas seções
const styleFadeIn = document.createElement('style');
styleFadeIn.innerHTML = `
    .fade-in {
        animation: fadeIn 0.5s forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleFadeIn);
