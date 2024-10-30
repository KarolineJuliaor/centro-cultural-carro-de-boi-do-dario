// Script para gerenciar o envio de avaliações
document.addEventListener("DOMContentLoaded", function() {
    const ratingsForm = document.querySelector("#ratings form");
    const ratingsSection = document.querySelector("#ratings");

    // Função para adicionar uma nova avaliação na página
    function addRating(rating, comment) {
        const ratingDiv = document.createElement("div");
        ratingDiv.classList.add("user-rating");
        ratingDiv.innerHTML = `
            <p><strong>Avaliação:</strong> ${rating} estrelas</p>
            <p><strong>Comentário:</strong> ${comment}</p>
        `;
        ratingsSection.appendChild(ratingDiv);
    }

    // Evento de envio do formulário de avaliação
    ratingsForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Obtém valores do formulário
        const rating = document.querySelector("#rating").value;
        const comment = document.querySelector("textarea").value;

        if (rating && comment) {
            addRating(rating, comment); // Adiciona a avaliação à página

            // Limpa o formulário após o envio
            document.querySelector("#rating").value = "";
            document.querySelector("textarea").value = "";
            alert("Obrigado pela sua avaliação!");
        } else {
            alert("Por favor, preencha todos os campos antes de enviar.");
        }
    });
});
