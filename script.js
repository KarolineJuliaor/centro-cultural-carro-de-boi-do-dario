document.addEventListener("DOMContentLoaded", function() {
    const estrelas = document.querySelectorAll(".estrela");
    const notaInput = document.querySelector("#nota");
    const nomeInput = document.querySelector("#nome-avaliacao");
    const comentarioInput = document.querySelector("#comentario");
    const formAvaliacao = document.querySelector("#form-avaliacao");
    const listaAvaliacoes = document.querySelector("#lista-avaliacoes");

    // Configura o efeito de avaliação por estrelas
    estrelas.forEach((estrela, index) => {
        estrela.addEventListener("click", function() {
            const valor = index + 1;
            notaInput.value = valor;
            atualizarEstrelas(valor);
        });

        estrela.addEventListener("mouseover", function() {
            atualizarEstrelas(index + 1);
        });

        estrela.addEventListener("mouseout", function() {
            atualizarEstrelas(notaInput.value);
        });
    });

    // Função para destacar as estrelas até a nota selecionada
    function atualizarEstrelas(valor) {
        estrelas.forEach((estrela, index) => {
            estrela.style.color = index < valor ? "gold" : "gray";
        });
    }

    // Gerenciamento do envio do formulário de avaliação
    formAvaliacao.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o recarregamento da página

        const nota = notaInput.value;
        const nome = nomeInput.value.trim();
        const comentario = comentarioInput.value.trim();

        if (nota > 0 && nome !== "" && comentario !== "") {
            adicionarAvaliacao(nome, nota, comentario);
            formAvaliacao.reset();
            atualizarEstrelas(0);
            notaInput.value = "0";
        } else {
            alert("Por favor, preencha o nome, a nota e o comentário.");
        }
    });

    // Adiciona a avaliação na lista
    function adicionarAvaliacao(nome, nota, comentario) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${nome}</strong> - ${nota} estrelas<br>${comentario}`;
        listaAvaliacoes.appendChild(li);
    }
});
