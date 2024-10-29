document.addEventListener('DOMContentLoaded', () => {
  // Ação do botão WhatsApp
  const whatsappButton = document.getElementById('whatsapp-button');
  whatsappButton.addEventListener('click', () => {
    const phoneNumber = '(48) 99932-3570'; // Número do WhatsApp
    const message = 'Olá, gostaria de saber mais sobre as atividades do Centro Cultural!';
    const whatsappURL = `https://api.whatsapp.com/send?phone=55${phoneNumber.replace(/\D/g, '')}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank'); // Abre o WhatsApp em uma nova aba
  });

  // Validação do formulário
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    if (nome && email) {
      // Aqui você pode adicionar a lógica para enviar os dados para o servidor, se necessário
      alert('Formulário enviado com sucesso!');
      form.reset(); // Reseta o formulário após o envio
    } else {
      document.getElementById('error-message').textContent = 'Por favor, preencha todos os campos.';
    }
  });
});
