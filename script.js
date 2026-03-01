const form = document.querySelector('#contact-form');
const emailInput = document.querySelector('#email');
const message = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!emailInput.value.includes('@')) {
    message.textContent = 'Lütfen geçerli bir e-posta adresi gir.';
    message.style.color = '#ffb3b3';
    return;
  }

  message.textContent = 'Harika! En kısa sürede seninle iletişime geçeceğiz.';
  message.style.color = '#a4ffcf';
  form.reset();
});
