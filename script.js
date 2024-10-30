// Script para confirmar inscrição e simular envio de QR Code de confirmação
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio real do formulário para teste
    const nome = document.querySelector("#nome").value;
    const atividade = document.querySelector("#atividade").value;
    
    if (nome && atividade) {
        alert(`Inscrição confirmada para ${nome} na atividade de ${atividade}!`);
        // Aqui, você pode enviar uma requisição para gerar o QR Code
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Script para a contagem regressiva dos eventos
function atualizarContagemRegressiva() {
    const eventoData = new Date("2024-12-25T00:00:00"); // Exemplo: Natal como próximo evento
    const agora = new Date();
    const tempoRestante = eventoData - agora;

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById("contagem-regressiva").innerHTML = 
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Atualiza a contagem regressiva a cada segundo
    setTimeout(atualizarContagemRegressiva, 1000);
}

// Inicializa a contagem regressiva ao carregar a página
window.onload = function() {
    atualizarContagemRegressiva();
};
