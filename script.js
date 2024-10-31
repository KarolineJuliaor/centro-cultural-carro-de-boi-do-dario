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
document.getElementById('form-avaliacao').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;
    addReview(nome, comentario);
    saveReviewToLocalStorage(nome, comentario);
    this.reset();
});

// Função para adicionar uma nova avaliação
function addReview(nome, comentario) {
    const lista = document.getElementById('avaliacoes-lista').querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `<strong>${nome}:</strong> ${comentario}`;
    lista.appendChild(li);
}

// Salvar avaliações no localStorage
function saveReviewToLocalStorage(nome, comentario) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ nome, comentario });
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Carregar avaliações salvas ao recarregar a página
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.forEach(review => addReview(review.nome, review.comentario));
}

// Carregar todas as imagens e avaliações quando a página for aberta
window.addEventListener('load', () => {
    loadImages();
    loadReviews();
});
