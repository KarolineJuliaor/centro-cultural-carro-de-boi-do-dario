function toggleModoEscuro() {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll("section, footer").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
}

function adicionarComentario() {
    const comentario = document.getElementById("comentario").value;
    if (comentario.trim()) {
        const novoComentario = document.createElement("li");
        novoComentario.textContent = comentario;
        document.getElementById("comentarios").appendChild(novoComentario);
        document.getElementById("comentario").value = "";
    }
}
