// Função para adicionar imagens na galeria cultural
document.getElementById('file-input').addEventListener('change', function() {
    const gallery = document.getElementById('gallery-display');
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        gallery.appendChild(img);
        saveImageToLocalStorage('gallery', img.src);
    };
    reader.readAsDataURL(file);
});

// Função para adicionar imagens em eventos
function addImage(input) {
    const eventImages = input.nextElementSibling;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        eventImages.appendChild(img);
        saveImageToLocalStorage('events', img.src, eventImages);
    };
    reader.readAsDataURL(file);
}

// Função para salvar imagens no localStorage
function saveImageToLocalStorage(key, src, container) {
    let storedImages = JSON.parse(localStorage.getItem(key)) || [];
    storedImages.push({ src: src, containerId: container ? container.id : null });
    localStorage.setItem(key, JSON.stringify(storedImages));
}

// Carregar imagens do localStorage ao recarregar a página
function loadImages() {
    const gallery = document.getElementById('gallery-display');
    const storedGalleryImages = JSON.parse(localStorage.getItem('gallery')) || [];
    storedGalleryImages.forEach(imgData => {
        const img = document.createElement('img');
        img.src = imgData.src;
        gallery.appendChild(img);
    });

    const storedEventImages = JSON.parse(localStorage.getItem('events')) || [];
    storedEventImages.forEach(imgData => {
        const container = document.querySelector(`#${imgData.containerId}`);
        if (container) {
            const img = document.createElement('img');
            img.src = imgData.src;
            container.appendChild(img);
        }
    });
}

// Avaliação
// Seleciona as estrelas e inicializa a nota
const estrelas = document.querySelectorAll('.estrela');
let notaSelecionada = 0;

// Adiciona evento de clique nas estrelas
estrelas.forEach((estrela, index) => {
    estrela.addEventListener('click', () => {
        notaSelecionada = index + 1; // Atualiza a nota selecionada
        atualizarEstrelas(notaSelecionada); // Atualiza a visualização das estrelas
    });
});

// Função de envio da avaliação
const form = document.getElementById('form-avaliacao');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;

    // Adiciona a nova avaliação ao armazenamento local
    saveReviewToLocalStorage(nome, comentario, notaSelecionada);
    form.reset(); // Limpa o formulário
    atualizarEstrelas(0); // Resetar a avaliação
});

// Salvar avaliações no localStorage
function saveReviewToLocalStorage(nome, comentario, nota) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ nome, comentario, nota });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    exibirAvaliacoes(); // Chama a função para exibir as avaliações após salvar
}

// Carregar avaliações salvas ao recarregar a página
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.forEach(review => {
        addReview(review.nome, review.comentario, review.nota); // Adiciona a avaliação
    });
}

// Exibir as avaliações
function exibirAvaliacoes() {
    const listaAvaliacoes = document.getElementById('lista-avaliacoes');
    listaAvaliacoes.innerHTML = ''; // Limpa a lista atual
    const reviews = JSON.parse(localStorage.getItem('reviews')) || []; // Recupera as avaliações
    reviews.forEach(avaliacao => {
        const li = document.createElement('li');
        li.textContent = `${avaliacao.nome}: ${avaliacao.comentario} (Nota: ${avaliacao.nota})`;
        listaAvaliacoes.appendChild(li);
    });
}

// Exibir a avaliação
function addReview(nome, comentario, nota) {
    const listaAvaliacoes = document.getElementById('lista-avaliacoes');
    const li = document.createElement('li');
    li.textContent = `${nome}: ${comentario} (Nota: ${nota})`;
    listaAvaliacoes.appendChild(li);
}

// Chame a função loadReviews no evento de carregamento da janela
window.addEventListener('load', () => {
    loadReviews(); // Carrega as avaliações ao abrir a página
});
