
// Espera o carregamento completo do conteúdo do site
document.addEventListener("DOMContentLoaded", () => {

    // Captura o formulário de inscrição e adiciona uma função para o envio
    const signupForm = document.querySelector("#signup form");
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = signupForm.querySelector("input[type='text']").value;
        const email = signupForm.querySelector("input[type='email']").value;
        
        alert(`Obrigado por se inscrever, ${name}! Você receberá um e-mail de confirmação em ${email}.`);
        
        // Limpa o formulário
        signupForm.reset();
    });

    // Captura o formulário de avaliações
    const ratingsForm = document.querySelector("#ratings form");
    const ratingsSection = document.querySelector("#ratings");

    ratingsForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        // Coleta os valores de avaliação e comentário
        const rating = ratingsForm.querySelector("#rating").value;
        const comment = ratingsForm.querySelector("textarea").value;

        // Cria um novo elemento para mostrar a avaliação e o comentário
        const newRating = document.createElement("div");
        newRating.classList.add("user-rating");
        newRating.innerHTML = `
            <p><strong>Avaliação:</strong> ${rating} estrelas</p>
            <p>${comment}</p>
        `;
        
        // Adiciona a nova avaliação à seção de avaliações
        ratingsSection.appendChild(newRating);
        
        // Limpa o formulário
        ratingsForm.reset();
    });
});
