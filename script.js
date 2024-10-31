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
const estrelas = document.querySelectorAll('.estrela');
let notaSelecionada = 0;

estrelas.forEach(estrela => {
    estrela.addEventListener('click', () => {
        notaSelecionada = estrela.getAttribute('data-value');
        atualizarEstrelas(notaSelecionada);
    });
});

function atualizarEstrelas(nota) {
    estrelas.forEach(estrela => {
        if (estrela.getAttribute('data-value') <= nota) {
            estrela.classList.add('selecionada');
            estrela.innerHTML = '&#9733;'; // Estrela preenchida
        } else {
            estrela.classList.remove('selecionada');
            estrela.innerHTML = '&#9734;'; // Estrela vazia
        }
    });
}

document.getElementById('form-avaliacao').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;

    // Adicionar a avaliação
    addReview(nome, comentario, notaSelecionada);
    saveReviewToLocalStorage(nome, comentario, notaSelecionada);
    this.reset();
    atualizarEstrelas(0); // Resetar a avaliação
});

// Função para adicionar uma nova avaliação
function addReview(nome, comentario, nota) {
    const lista = document.getElementById('avaliacoes-lista').querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `<strong>${nome}:</strong> ${comentario} (${nota} estrelas)`;
    lista.appendChild(li);
}

// Salvar avaliações no localStorage
function saveReviewToLocalStorage(nome, comentario, nota) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ nome, comentario, nota });
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Carregar avaliações salvas ao recarregar a página
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.forEach(review => addReview(review.nome, review.comentario, review.nota));
}

// Carregar todas as imagens e avaliações quando a página for aberta
window.addEventListener('load', () => {
    loadImages();
    loadReviews();
});
