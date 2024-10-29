// Função para mostrar a atividade selecionada
function showActivity(activityId) {
    document.querySelectorAll('.activity-content').forEach(function(section) {
        section.style.display = 'none';
    });

    const activitySection = document.getElementById(activityId);
    if (activitySection) {
        activitySection.style.display = 'block';
        activitySection.classList.add('fade-in');
    } else {
        alert('Atividade não encontrada!');
    }

    const sectionPosition = activitySection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
}

// Função para voltar ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Cria o botão de "Voltar ao Topo"
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Voltar ao Topo';
backToTopButton.className = 'back-to-top';
backToTopButton.onclick = scrollToTop;
document

.body.appendChild(backToTopButton);

// Estilos para o botão "Voltar ao Topo"
const style = document.createElement('style');
style.innerHTML = `
    .back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4caf50;
        color: white;
        border: none;
        padding: 1rem;
        border-radius: 5px;
        cursor: pointer;
        display: none;
        transition: background-color 0.3s;
    }
    
    .back-to-top:hover {
        background-color: #ff5733;
    }
`;
document.head.appendChild(style);

// Exibe o botão "Voltar ao Topo" ao rolar a página
window.onscroll = function() {
    if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Animação fade-in
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

