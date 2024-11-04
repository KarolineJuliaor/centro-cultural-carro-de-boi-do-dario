// Função para adicionar imagens na galeria cultural
document.getElementById('file-input').addEventListener('change', function() {
    const gallery = document.getElementById('gallery-display');
    const file = this.files[0];
    if (!file) return; // Verifica se um arquivo foi selecionado
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
    const eventImages = input.nextElementSibling; // Verifique se é o elemento correto
    const file = input.files[0];
    if (!file) return; // Verifica se um arquivo foi selecionado
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        eventImages.appendChild(img);
        saveImageToLocalStorage('events', img.src); // Remove o container pois não é necessário
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
    const gallery = document.getElementById('gallery-display');
    const storedGalleryImages = JSON.parse(localStorage.getItem('gallery')) || [];
    storedGalleryImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        gallery.appendChild(img);
    });

    const storedEventImages = JSON.parse(localStorage.getItem('events')) || [];
    storedEventImages.forEach(src => {
        const container = document.querySelector(`#${src.containerId}`);
        if (container) {
            const img = document.createElement('img');
            img.src = src;
            container.appendChild(img);
        }
    });
}

// Avaliação
const estrelas = document.querySelectorAll('.estrela');
let notaSelecionada = 0;

// Adiciona evento de clique nas estrelas
estrelas.forEach((estrela, index) => {
    estrela.addEventListener('click', () => {
        notaSelecionada = index + 1;
        atualizarEstrelas(notaSelecionada);
    });
});

// Função de envio da avaliação
const form = document.getElementById('form-avaliacao');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;
    const email = document.getElementById('email').value;

    saveReviewToLocalStorage(nome, comentario, notaSelecionada, email);
    form.reset();
    atualizarEstrelas(0);
});

// Salvar avaliações no localStorage
function saveReviewToLocalStorage(nome, comentario, nota, email) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ nome, comentario, nota, email });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    exibirAvaliacoes();
}

// Carregar avaliações salvas ao recarregar a página
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.forEach(review => {
        addReview(review.nome, review.comentario, review.nota, review.email);
    });
}

// Exibir as avaliações
function exibirAvaliacoes() {
    const listaAvaliacoes = document.getElementById('lista-avaliacoes');
    listaAvaliacoes.innerHTML = '';
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.forEach(avaliacao => {
        const li = document.createElement('li');
        li.textContent = `${avaliacao.nome} (${avaliacao.email}): ${avaliacao.comentario} (Nota: ${avaliacao.nota})`;
        listaAvaliacoes.appendChild(li);
    });
}

// Exibir a avaliação
function addReview(nome, comentario, nota, email) {
    const listaAvaliacoes = document.getElementById('lista-avaliacoes');
    const li = document.createElement('li');
    li.textContent = `${nome} (${email}): ${comentario} (Nota: ${nota})`;
    listaAvaliacoes.appendChild(li);
}

// Chame a função loadImages e loadReviews no evento de carregamento da janela
window.addEventListener('load', () => {
    loadImages(); // Carrega as imagens ao abrir a página
    loadReviews(); // Carrega as avaliações ao abrir a página
});
