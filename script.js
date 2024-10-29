<body>
    <script>
        // Função para exibir uma atividade específica
        function showActivity(activityId) {
            // Oculta todas as seções de atividades
            document.querySelectorAll('.activity-content').forEach(function(section) {
                section.style.display = 'none';
                section.classList.remove('fade-in');
            });

            // Exibe a seção selecionada com efeito de transição
            const selectedSection = document.getElementById(activityId);
            selectedSection.style.display = 'block';
            selectedSection.classList.add('fade-in');

            // Atualiza o botão ativo
            document.querySelectorAll('.buttons-container button').forEach(function(button) {
                button.classList.remove('active-button');
            });
            document.querySelector(`[onclick="showActivity('${activityId}')"]`).classList.add('active-button');
        }

        // Função para inicializar a página com uma animação de introdução
        function initPage() {
            document.body.classList.add('page-load');
            setTimeout(() => document.body.classList.remove('page-load'), 1000);
        }

        // Inicia a animação ao carregar a página
        window.onload = initPage;
    </script>
</body>
