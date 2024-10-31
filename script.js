// Sistema de avaliações
document.addEventListener("DOMContentLoaded", function () {
    const estrelas = document.querySelectorAll(".estrela");
    let avaliacaoAtual = 0;

    estrelas.forEach((estrela, index) => {
        estrela.addEventListener("click", () => {
            avaliacaoAtual = index + 1;
            atualizarEstrelas(avaliacaoAtual);
        });
    });

    function atualizarEstrelas(rating) {
        estrelas.forEach((estrela, index) => {
            estrela.style.color = index < rating ? "#ffcc00" : "#ddd";
        });
    }

    // Adicionar comentário e exibir na página
    const formAvaliacao = document.querySelector("#avaliacoes form");
    const listaAvaliacoes = document.querySelector("#avaliacoes-lista ul");

    formAvaliacao.addEventListener("submit", (event) => {
        event.preventDefault();
        const comentarioInput = document.querySelector("#comentario");

        if (avaliacaoAtual > 0 && comentarioInput.value.trim() !== "") {
            const novoComentario = document.createElement("li");
            novoComentario.textContent = `${avaliacaoAtual} estrelas - ${comentarioInput.value}`;
            listaAvaliacoes.appendChild(novoComentario);

            // Limpar campos após o envio
            comentarioInput.value = "";
            avaliacaoAtual = 0;
            atualizarEstrelas(avaliacaoAtual);
        } else {
            alert("Por favor, selecione uma avaliação e escreva um comentário.");
        }
    });
});
