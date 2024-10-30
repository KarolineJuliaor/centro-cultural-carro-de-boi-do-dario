
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
