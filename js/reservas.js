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