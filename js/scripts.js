// Toggle menú mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-menu');
if (toggle && menu) {
toggle.addEventListener('click', () => {
const open = menu.classList.toggle('open');
toggle.setAttribute('aria-expanded', String(open));
});
}

// Demo envío reservas
const form = document.getElementById('form-reservas');
if (form) {
form.addEventListener('submit', (e) => {
e.preventDefault();
const data = Object.fromEntries(new FormData(form).entries());
alert(`Reserva recibida:\n${data.fecha} ${data.hora} • ${data.comensales} comensales`);
form.reset();
});
}