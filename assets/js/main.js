document.getElementById('year').textContent = new Date().getFullYear();
// Close the responsive menu after following a section link.
document.querySelectorAll('#menu .nav-link, #menu .btn').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('show') && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
const form = document.getElementById('contactForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  const status = document.getElementById('formStatus');
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    status.textContent = 'Revisa los campos obligatorios y el formato del correo.';
    return;
  }
  status.textContent = 'Formulario de demostración: todavía no envía información. Configura un servicio de recepción y el aviso de privacidad antes de publicarlo.';
});
