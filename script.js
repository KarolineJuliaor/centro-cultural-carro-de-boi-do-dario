<script>
    function showActivity(activityId) {
        // Oculta todas as seções de atividades
        document.querySelectorAll('.activity-content').forEach(function(section) {
            section.style.display = 'none';
        });

        // Exibe a seção selecionada
        document.getElementById(activityId).style.display = 'block';
    }
</script>
