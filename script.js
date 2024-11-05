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
        saveImageToLocalStorage('events', img.src);
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
        const img = document.createElement('img');
        img.src = src;
        const container = document.querySelector(`#event-container`); // Atualize conforme necessário
        if (container) {
            container.appendChild(img);
        }
    });
}

// Seleciona as estrelas de avaliação e inicializa a nota
const estrelas = document.querySelectorAll('.estrela');
let notaSelecionada = 0;

// Atualiza a cor das estrelas conforme a nota selecionada
function atualizarEstrelas(estrelas, nota) {
    estrelas.forEach((estrela, i) => {
        estrela.style.color = i < nota ? '#ffcc00' : '#000';
    });
}

// Adiciona eventos de clique para as estrelas
estrelas.forEach((estrela, index) => {
    estrela.addEventListener('click', () => {
        notaSelecionada = index + 1;
        atualizarEstrelas(estrelas, notaSelecionada);
    });
});

// Salva avaliações no localStorage
function saveReviewToLocalStorage(nome, comentario, nota, email) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ nome, comentario, nota, email });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    loadReviews(); // Atualiza a lista de avaliações
}

// Carrega as avaliações do localStorage
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const listaAvaliacoes = document.getElementById('lista-avaliacoes');
    listaAvaliacoes.innerHTML = ''; // Limpa a lista antes de recarregar
    reviews.forEach(review => {
        addReview(review.nome, review.comentario, review.nota, review.email);
    });
}

// Adiciona uma avaliação à lista
function addReview(nome, comentario, nota, email) {
    const listaAvaliacoes = document.getElementById('lista-avaliacoes');
    const li = document.createElement('li');
    li.textContent = `${nome} (${email}): ${comentario} (Nota: ${nota}) `;

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', () => {
        excluirAvaliacao(nome, email, comentario, nota);
    });

    li.appendChild(botaoExcluir);
    listaAvaliacoes.appendChild(li);
}

// Exclui uma avaliação
function excluirAvaliacao(nome, email, comentario, nota) {
    const senha = prompt("Digite a senha para excluir a avaliação:");
    if (senha === "@Boidemamão2023") {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews = reviews.filter(review => !(review.nome === nome && review.email === email && review.comentario === comentario && review.nota === nota));
        localStorage.setItem('reviews', JSON.stringify(reviews));
        loadReviews(); // Atualiza a exibição após a exclusão
    } else {
        alert("Senha incorreta. Você não tem permissão para excluir esta avaliação.");
    }
}

// Carrega as avaliações ao abrir a página
window.addEventListener('load', loadReviews);
