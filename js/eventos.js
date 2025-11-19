// Demo envío eventos
const form = document.getElementById('form-eventos');
if (form) {
form.addEventListener('submit', (e) => {
e.preventDefault();
const data = Object.fromEntries(new FormData(form).entries());
alert(`¡Recibimos tu mensaje! A la brevedad nos pondremos en contacto`);
form.reset();
});
}