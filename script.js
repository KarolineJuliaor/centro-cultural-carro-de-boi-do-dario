// Função para adicionar imagens na galeria cultural
document.getElementById('file-input').addEventListener('change', function() {
    adicionarImagem(this, 'gallery-display', 'gallery');
});

// Função para adicionar imagens em eventos
function addImage(input) {
    adicionarImagem(input, input.nextElementSibling.id, 'events');
}

// Função para adicionar imagem ao display e ao localStorage
function adicionarImagem(input, displayId, storageKey) {
    const display = document.getElementById(displayId);
    const file = input.files[0];
    if (!file) return; // Verifica se um arquivo foi selecionado
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        display.appendChild(img);
        saveImageToLocalStorage(storageKey, img.src);
    };
    reader.readAsDataURL(file);
}

// Função para salvar imagens no localStorage
function saveImageToLocalStorage(key, src) {
    let storedImages = JSON.parse(localStorage.getItem(key)) || [];
    storedImages.push(src);
    localStorage.setItem(key, JSON.stringify(storedImages));
}

// Carregar imagens do localStorage ao recarregar a página
function loadImages() {
    carregarImagens('gallery', 'gallery-display');
    carregarImagens('events', 'event-container');
}

// Carregar imagens de uma chave específica do localStorage
function carregarImagens(key, displayId) {
    const display = document.getElementById(displayId);
    const storedImages = JSON.parse(localStorage.getItem(key)) || [];
    storedImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        display.appendChild(img);
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const estrelas = document.querySelectorAll('.estrela');
    let avaliacaoSelecionada = 0;

    // Adiciona a interação nas estrelas
    estrelas.forEach(estrela => {
        estrela.addEventListener('click', function() {
            avaliacaoSelecionada = parseInt(this.getAttribute('data-valor'));

            // Marca as estrelas
            estrelas.forEach(s => {
                s.innerHTML = s.getAttribute('data-valor') <= avaliacaoSelecionada ? '&#9733;' : '&#9734;';
            });

            // Salva a avaliação no localStorage
            localStorage.setItem('avaliacao', avaliacaoSelecionada);
        });
    });

    // Função para enviar uma avaliação
    function enviarAvaliacao() {
        if (avaliacaoSelecionada > 0) {
            const comentario = prompt("Deixe um comentário:");

            if (comentario) {
                // Adiciona a avaliação à lista
                const novaAvaliacao = document.createElement('li');
                novaAvaliacao.innerHTML = `Avaliação: ${avaliacaoSelecionada} estrelas - Comentário: ${comentario}`;
                document.querySelector('#avaliacoes-lista ul').appendChild(novaAvaliacao);

                // Salva novamente as avaliações no localStorage
                localStorage.setItem('avaliacoes', document.querySelector('#avaliacoes-lista').innerHTML);
            }
        } else {
            alert('Por favor, selecione uma avaliação.');
        }
    }

    // Função para enviar avaliação ao clicar em botão
    const botaoEnviar = document.getElementById('enviar-avaliacao');
    if (botaoEnviar) {
        botaoEnviar.addEventListener('click', enviarAvaliacao);
    }

    // Carregar avaliações salvas no localStorage
    const avaliacaoSalva = localStorage.getItem('avaliacoes');
    if (avaliacaoSalva) {
        document.getElementById('avaliacoes-lista').innerHTML = avaliacaoSalva;
    }
});
