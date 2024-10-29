// Script para adicionar interatividade ao botão de WhatsApp e validação de formulário

// Função para abrir o link do WhatsApp
function openWhatsApp() {
  const phoneNumber = "5511999999999"; // Coloque o número de telefone com o código do país
  const message = "Olá, gostaria de mais informações sobre o Centro Cultural Carro de Boi do Dário.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Adiciona evento de clique ao botão de WhatsApp
document.addEventListener('DOMContentLoaded', function () {
  const whatsappButton = document.getElementById('whatsapp-button');
  if (whatsappButton) {
    whatsappButton.addEventListener('click', openWhatsApp);
  }
});

// Validação do formulário de contato
function validateForm(event) {
  event.preventDefault(); // Impede o envio do formulário para validar antes

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const errorMessage = document.getElementById('error-message');

  // Verifica se os campos estão preenchidos
  if (!name || !email) {
    errorMessage.textContent = "Por favor, preencha todos os campos obrigatórios.";
    errorMessage.style.color = 'red';
    return false;
  }

  // Expressão regular para validar email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Por favor, insira um e-mail válido.";
    errorMessage.style.color = 'red';
    return false;
  }

  // Envia o formulário se todas as validações passarem
  errorMessage.textContent = "";
  alert("Formulário enviado com sucesso!");
  return true;
}

// Adiciona evento de envio ao formulário
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', validateForm);
  }
});

