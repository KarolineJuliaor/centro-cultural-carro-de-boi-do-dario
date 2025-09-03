<script>
    // Seleciona todos os elementos de estrela e outros elementos do formulário de avaliação
    const estrelas = document.querySelectorAll('#estrelas .estrela');
    const formAvaliacao = document.getElementById('form-avaliacao');
    const listaAvaliacoesUl = document.getElementById('lista-avaliacoes');
    const comentarioInput = document.getElementById('comentario');
    let notaSelecionada = 0; // Variável para armazenar a nota que o usuário selecionou

    // Função para atualizar a cor das estrelas com base na nota
    function atualizarEstrelas(nota) {
        estrelas.forEach(estrela => {
            const valor = parseInt(estrela.dataset.valor); // Pega o valor da estrela (1 a 5)
            // Se o valor da estrela for menor ou igual à nota, pinta de ouro; caso contrário, de cinza
            estrela.style.color = valor <= nota ? 'var(--cor-estrela-ouro)' : 'var(--cor-cinza-neutro)';
        });
    }

    // Adiciona "ouvintes de evento" para cada estrela
    estrelas.forEach(estrela => {
        // Ao clicar: define a nota selecionada e atualiza as estrelas
        estrela.addEventListener('click', () => {
            notaSelecionada = parseInt(estrela.dataset.valor);
            atualizarEstrelas(notaSelecionada);
        });
        // Ao passar o mouse: atualiza as estrelas para mostrar a pré-seleção
        estrela.addEventListener('mouseover', () => {
            const valorHover = parseInt(estrela.dataset.valor);
            atualizarEstrelas(valorHover);
        });
        // Ao tirar o mouse: retorna as estrelas ao estado da nota selecionada (ou todas cinza se nenhuma)
        estrela.addEventListener('mouseout', () => {
            atualizarEstrelas(notaSelecionada);
        });
    });

    // Adiciona um ouvinte de evento para quando o formulário de avaliação for enviado
    formAvaliacao.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o comportamento padrão de recarregar a página
        const comentario = comentarioInput.value; // Pega o texto do comentário

        // Validação: verifica se uma nota foi selecionada e se o comentário não está vazio
        if (notaSelecionada === 0 || comentario.trim() === '') {
            alert('Por favor, selecione uma nota e digite seu comentário.');
            return; // Sai da função se a validação falhar
        }

        // Cria um novo item de lista (<li>) para a avaliação
        const novaAvaliacao = document.createElement('li');
        novaAvaliacao.innerHTML = `
            <strong>Nota: ${notaSelecionada} estrela(s)</strong>
            <p>${comentario}</p>
        `;
        // Adiciona a nova avaliação à lista de avaliações existente
        listaAvaliacoesUl.appendChild(novaAvaliacao);

        // Limpa o formulário após o envio
        comentarioInput.value = ''; // Limpa o campo de comentário
        notaSelecionada = 0; // Reseta a nota selecionada
        atualizarEstrelas(notaSelecionada); // Atualiza as estrelas para o estado inicial (todas cinza)
    });

    // Nota: Se você tivesse um backend (servidor), você enviaria os dados do formulário aqui.
    // Exemplo (comentado): fetch('/enviar-avaliacao', { method: 'POST', body: JSON.stringify({ nota: notaSelecionada, comentario: comentario }) });

</script>
