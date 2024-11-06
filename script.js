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
// Avaliações
const estrelas = document.querySelectorAll('.estrela');
const enviarBtn = document.getElementById('enviar');
const notaSelecionadaDisplay = document.getElementById('nota-selecionada');
const listaAvaliacoes = document.getElementById('lista-avaliacoes');
let notaSelecionada = 0;

// Atualiza a cor das estrelas ao passar o mouse
estrelas.forEach((estrela, index) => {
    estrela.addEventListener('mouseover', () => {
        atualizarEstrelas(estrelas, index + 1);  // Atualiza as estrelas ao passar o mouse
    });
    estrela.addEventListener('mouseout', () => {
        atualizarEstrelas(estrelas, notaSelecionada); // Reseta para a nota atual ao tirar o mouse
    });
    estrela.addEventListener('click', () => {
        notaSelecionada = index + 1;
        notaSelecionadaDisplay.textContent = `Você selecionou ${notaSelecionada} estrela(s)`; // Exibe nota selecionada
        atualizarEstrelas(estrelas, notaSelecionada); // Marca as estrelas
    });
});

// Atualiza a cor das estrelas com base na nota
function atualizarEstrelas(estrelas, nota) {
    estrelas.forEach((estrela, index) => {
        estrela.style.color = index < nota ? '#ffcc00' : '#ccc'; // Cor amarelo para as estrelas selecionadas
    });
}

// Enviar a avaliação
enviarBtn.addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const comentario = document.getElementById('comentario').value;

    // Validação: Verifica se todos os campos estão preenchidos e se uma nota foi selecionada
    if (notaSelecionada && nome && email && comentario) {
        saveReviewToLocalStorage(nome, comentario, notaSelecionada, email);
        limparCampos();
        alert('Sua avaliação foi enviada com sucesso!');
    } else {
        alert("Por favor, preencha todos os campos e selecione uma nota.");
    }
});

// Limpa os campos do formulário após o envio
function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('comentario').value = '';
    atualizarEstrelas(estrelas, 0);  // Reseta as estrelas para 0
    notaSelecionadaDisplay.textContent = '';  // Limpa a exibição da nota
}

// Função para salvar avaliações no localStorage
function saveReviewToLocalStorage(nome, comentario, nota, email) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ nome, comentario, nota, email });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    loadReviews();  // Atualiza a lista de avaliações imediatamente
}

// Carregar e exibir avaliações ao abrir a página
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    listaAvaliacoes.innerHTML = ''; // Limpa a lista antes de recarregar

    if (reviews.length > 0) {
        let mediaNotas = 0;
        reviews.forEach(review => {
            addReview(review.nome, review.comentario, review.nota, review.email);
            mediaNotas += review.nota;  // Soma das notas para cálculo da média
        });
        
        const media = (mediaNotas / reviews.length).toFixed(1);
        document.getElementById('media-nota').textContent = `Média: ${media} de 5 (${reviews.length} avaliações)`; // Exibe média
    } else {
        document.getElementById('media-nota').textContent = 'Ainda não há avaliações.';
    }
}

// Exibir a avaliação na lista
function addReview(nome, comentario, nota, email) {
    const li = document.createElement('li');
    li.textContent = `${nome} (${email}): ${comentario} - Nota: ${'⭐'.repeat(nota)}`;

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', () => {
        excluirAvaliacao(nome, email, comentario, nota);
    });

    li.appendChild(botaoExcluir);
    listaAvaliacoes.appendChild(li);
}

// Excluir uma avaliação
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

// Carrega as avaliações quando a página é carregada
loadReviews();
