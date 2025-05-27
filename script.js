<script>
  // Seleciona elementos do DOM
  const estrelas = document.querySelectorAll('#estrelas .estrela');
  const formAvaliacao = document.getElementById('form-avaliacao');
  const listaAvaliacoes = document.getElementById('avaliacoes-lista');
  const comentarioInput = document.getElementById('comentario');
  let notaSelecionada = 0;

  // Função para atualizar visual das estrelas
  function atualizarEstrelas(nota) {
    estrelas.forEach(estrela => {
      const valor = parseInt(estrela.dataset.valor);
      if (valor <= nota) {
        estrela.style.color = '#ffcc00'; // amarelo
      } else {
        estrela.style.color = '#ccc'; // cinza claro
      }
    });
  }

  // Marca a nota ao clicar em uma estrela
  estrelas.forEach(estrela => {
    estrela.addEventListener('click', () => {
      notaSelecionada = parseInt(estrela.dataset.valor);
      atualizarEstrelas(notaSelecionada);
    });

    // Opcional: muda cor ao passar mouse (hover)
    estrela.addEventListener('mouseover', () => {
      const valorHover = parseInt(estrela.dataset.valor);
      atualizarEstrelas(valorHover);
    });
    estrela.addEventListener('mouseout', () => {
      atualizarEstrelas(notaSelecionada);
    });
  });

  // Envia avaliação e adiciona na lista
  formAvaliacao.addEventListener('submit', (e) => {
    e.preventDefault();

    if (notaSelecionada === 0) {
      alert('Por favor, selecione uma nota clicando nas estrelas.');
      return;
    }

    const comentario = comentarioInput.value.trim();
    if (!comentario) {
      alert('Por favor, escreva um comentário.');
      return;
    }

    // Cria novo item de avaliação
    const novoItem = document.createElement('li');
    novoItem.innerHTML = `
      <strong>Nota: ${notaSelecionada} estrelas</strong>
      <p>${comentario}</p>
    `;

    // Adiciona na lista
    listaAvaliacoes.prepend(novoItem);

    // Reseta formulário
    notaSelecionada = 0;
    atualizarEstrelas(0);
    comentarioInput.value = '';
  });
</script>
