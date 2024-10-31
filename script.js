// Função para salvar avaliações
document.addEventListener("DOMContentLoaded", function () {
    const formAvaliacao = document.getElementById("form-avaliacao");
    const nomeInput = document.getElementById("nome");
    const comentarioInput = document.getElementById("comentario");
    const avaliacoesLista = document.getElementById("avaliacoes-lista").querySelector("ul");

    const savedReviews = JSON.parse(localStorage.getItem("avaliacoes")) || [];
    savedReviews.forEach(({ nome, comentario }) => addReview(nome, comentario));

    formA
valiacao.addEventListener("submit", function (e) {
        e.preventDefault();

        const comentario = comentarioInput.value.trim();
        if (comentario) {
            const novoComentario = document.createElement("li");
            novoComentario.textContent = comentario;
            avaliacoesLista.appendChild(novoComentario);

            comentarioInput.value = "";
        }
    });

    const estrelas = document.querySelectorAll(".estrela");
    estrelas.forEach((estrela, index) => {
        estrela.addEventListener("click", () => {
            estrelas.forEach((el, i) => {
                el.style.color = i <= index ? "#ffcc00" : "#ccc";
            });
        });
    });
});
