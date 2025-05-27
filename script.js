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
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        let storedImages = JSON.parse(localStorage.getItem(storageKey)) || [];

        if (storedImages.length >= 10) {
            alert('Limite de 10 imagens atingido.');
            return;
        }

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

// Função para carregar imagens do localStorage
function carregarImagens(key, displayId) {
    const display = document.getElementById(displayId);
    const storedImages = JSON.parse(localStorage.getItem(key)) || [];

    storedImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        display.appendChild(img);
    });

    // Permitir remover imagem ao clicar
    display.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG') {
            const srcToRemove = e.target.src;
            e.target.remove();

            let imagensAtualizadas = JSON.parse(localStorage.getItem(key)) || [];
            imagensAtualizadas = imagensAtualizadas.filter(src => src !== srcToRemove);
            localStorage.setItem(key, JSON.stringify(imagensAtualizadas));
        }
    });
}

// Carregar todas as imagens ao recarregar a página
function loadImages() {
    carregarImagens('gallery', 'gallery-display');
    carregarImagens('events', 'event-container');
}

document.addEventListener("DOMContentLoaded", function() {
    const estrelas = document.querySelectorAll('.estrela');
    let avaliacaoSelecionada = 0;

    // Carregar avaliação salva e marcar estrelas
    const avaliacaoSalvaValor = localStorage.getItem('avaliacao');
    if (avaliacaoSalvaValor) {
        avaliacaoSelecionada = parseInt(avaliacaoSalvaValor);
        estrelas.forEach(s => {
            s.innerHTML = s.getAttribute('data-valor') <= avaliacaoSelecionada ? '&#9733;' : '&#9734;';
        });
    }

    // Adicionar interação nas estrelas
    estrelas.forEach(estrela => {
        estrela.addEventListener('click', function() {
            avaliacaoSelecionada = parseInt(this.getAttribute('data-valor'));
            estrelas.forEach(s => {
                s.innerHTML = s.getAttribute('data-valor') <= avaliacaoSelecionada ? '&#9733;' : '&#9734;';
            });
            localStorage.setItem('avaliacao', avaliacaoSelecionada);
        });
    });

    // Função para enviar uma avaliação
    function enviarAvaliacao() {
        if (avaliacaoSelecionada > 0) {
            const comentario = prompt("Deixe um comentário:");
            if (comentario) {
                const novaAvaliacao = {
                    estrelas: avaliacaoSelecionada,
                    comentario: comentario
                };

                let avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
                avaliacoes.push(novaAvaliacao);
                localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));

                atualizarListaAvaliacoes();
            }
        } else {
            alert('Por favor, selecione uma avaliação.');
        }
    }

    // Atualizar a lista de avaliações na tela
    function atualizarListaAvaliacoes() {
        const lista = document.querySelector('#avaliacoes-lista ul');
        lista.innerHTML = '';

        const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
        avaliacoes.forEach(av => {
            const item = document.createElement('li');
            item.innerHTML = `Avaliação: ${av.estrelas} estrelas - Comentário: ${av.comentario}`;
            lista.appendChild(item);
        });
    }

    // Botão de enviar avaliação
    const botaoEnviar = document.getElementById('enviar-avaliacao');
    if (botaoEnviar) {
        botaoEnviar.addEventListener('click', enviarAvaliacao);
    }

    // Carregar lista de avaliações na tela
    atualizarListaAvaliacoes();

    // Carregar imagens salvas
    loadImages();
});
