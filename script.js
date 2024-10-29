// Função para mostrar a atividade selecionada
function showActivity(activityId) {
    // Oculta todas as seções de atividade
    document.querySelectorAll('.activity-content').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('fade-in'); // Remove a animação ao ocultar
    });

    // Exibe a seção da atividade escolhida
    const activitySection = document.getElementById(activityId);
    if (activitySection) {
        activitySection.style.display = 'block';
        activitySection.classList.add('fade-in'); // Adiciona a animação de fade-in
        // Rola a página até a seção da atividade
        activitySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        alert('Atividade não encontrada!');
    }
}

// Função para voltar ao topo da página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cria e adiciona o botão "Voltar ao Topo"
function createBackToTopButton() {
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = 'Voltar ao Topo';
    backToTopButton.className = 'back-to-top';
    backToTopButton.onclick = scrollToTop;
    document.body.appendChild(backToTopButton);

    // Exibe o botão "Voltar ao Topo" quando o usuário rola para baixo
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 100 ? 'block' : 'none';
    });
}

// Função para adicionar estilos dinamicamente
function addDynamicStyles() {
    const styles = `
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
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = styles;
    document.head.appendChild(styleSheet);
}

// Inicialização do script
document.addEventListener('DOMContentLoaded', () => {
    addDynamicStyles();
    createBackToTopButton();
});
