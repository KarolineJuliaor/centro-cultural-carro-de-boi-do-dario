document.addEventListener("DOMContentLoaded", function() {
    const estrelas = document.querySelectorAll(".estrela");
    const notaInput = document.querySelector("#nota");
    const nomeInput = document.querySelector("#nome");
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
        event.preventDefault();

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

// Lógica para a avaliação com estrelas
const estrelas = document.querySelectorAll('.estrela');
const notaInput = document.getElementById('nota');

// Marcar estrelas ao clicar
estrelas.forEach(estrela => {
    estrela.addEventListener('click', () => {
        const valor = estrela.dataset.valor;
        notaInput.value = valor;

        // Atualizar a aparência das estrelas
        estrelas.forEach((e, index) => {
            e.style.color = index < valor ? 'gold' : 'gray'; // Altera a cor das estrelas
        });
    });
});

// Lidar com a submissão do formulário de avaliação
document.getElementById('form-avaliacao').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio real do formulário

    const comentario = document.getElementById('comentario').value;
    const nota = notaInput.value;

    // Criar um novo item de lista para a avaliação
    const li = document.createElement('li');
    li.textContent = `Avaliação: ${nota} Estrelas - Comentário: ${comentario}`;
    document.getElementById('lista-avaliacoes').appendChild(li);

    // Limpar o formulário
    this.reset();
    notaInput.value = '0'; // Resetar valor da nota
    estrelas.forEach(e => e.style.color = 'gray'); // Resetar a cor das estrelas
document.addEventListener("DOMContentLoaded", function() {
    // Seleção dos elementos de avaliação
    const estrelas = document.querySelectorAll(".estrela");
    const notaInput = document.querySelector("#nota");
    const comentarioInput = document.querySelector("#comentario");
    const formAvaliacao = document.querySelector("#form-avaliacao");
    const listaAvaliacoes = document.querySelector("#lista-avaliacoes");

    // Configura o efeito de avaliação por estrelas
    estrelas.forEach(estrela => {
        estrela.addEventListener("click", function() {
            const valor = this.getAttribute("data-valor");
            notaInput.value = valor;
            atualizarEstrelas(valor);
        });
    });

    // Função para destacar as estrelas até a nota selecionada
    function atualizarEstrelas(valor) {
        estrelas.forEach(estrela => {
            estrela.style.color = estrela.getAttribute("data-valor") <= valor ? "gold" : "gray";
        });
    }

    // Gerenciamento do envio do formulário de avaliação
    formAvaliacao.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o recarregamento da página

        const nota = notaInput.value;
        const comentario = comentarioInput.value;

        if (nota > 0 && comentario.trim() !== "") {
            adicionarAvaliacao(nota, comentario);
            formAvaliacao.reset();
            atualizarEstrelas(0);
            notaInput.value = "0";
        } else {
            alert("Por favor, preencha a nota e o comentário.");
        }
    });

    // Adiciona a avaliação na lista
    function adicionarAvaliacao(nota, comentario) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${nota} estrelas:</strong> ${comentario}`;
        listaAvaliacoes.appendChild(li);
    }
});
