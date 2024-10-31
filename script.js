document.addEventListener("DOMContentLoaded", function () {
    // Avaliações
    const formAvaliacao = document.getElementById("form-avaliacao");
    const comentarioInput = document.getElementById("comentario");
    const nomeInput = document.getElementById("nome");
    const avaliacoesLista = document.getElementById("avaliacoes-lista").querySelector("ul");
    
    // Carregar avaliações do localStorage
    const avaliacoesSalvas = JSON.parse(localStorage.getItem("avaliacoes")) || [];
    avaliacoesSalvas.forEach(avaliacao => {
        adicionarAvaliacao(avaliacao.nome, avaliacao.comentario);
    });

    // Função para adicionar avaliação
    function adicionarAvaliacao(nome, comentario) {
        const novoComentario = document.createElement("li");
        novoComentario.innerHTML = `<strong>${nome}:</strong> ${comentario}`;
        avaliacoesLista.appendChild(novoComentario);
    }

    // Enviar avaliação
    formAvaliacao.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const nome = nomeInput.value.trim();
        const comentario = comentarioInput.value.trim();

        if (nome && comentario) {
            adicionarAvaliacao(nome, comentario);
            avaliacoesSalvas.push({ nome, comentario });
            localStorage.setItem("avaliacoes", JSON.stringify(avaliacoesSalvas));
            
            nomeInput.value = "";
            comentarioInput.value = "";
        }
    });

    // Galeria - Carregar imagens salvas
    const galeriaContainer = document.getElementById("galeria-imagens");
    const fotosSalvas = JSON.parse(localStorage.getItem("galeriaFotos")) || [];

    fotosSalvas.forEach(src => {
        const imgElement = document.createElement("img");
        imgElement.src = src;
        imgElement.classList.add("galeria-imagem");
        galeriaContainer.appendChild(imgElement);
    });

    // Adicionar novas imagens
    document.getElementById("galeria-input").addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                const src = reader.result;
                const imgElement = document.createElement("img");
                imgElement.src = src;
                imgElement.classList.add("galeria-imagem");
                galeriaContainer.appendChild(imgElement);

                fotosSalvas.push(src);
                localStorage.setItem("galeriaFotos", JSON.stringify(fotosSalvas));
            };
            reader.readAsDataURL(file);
        }
    });
});
