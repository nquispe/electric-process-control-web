/* Menú móvil */
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("abierto");
    });
  }

  /* Año dinámico en el pie */
  var anio = document.querySelectorAll(".anio");
  anio.forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* Formulario de contacto (demo, sin backend) */
  var form = document.getElementById("form-contacto");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var aviso = document.getElementById("aviso-form");
      aviso.classList.add("ok");
      aviso.textContent =
        "¡Gracias! Su mensaje fue registrado. Nos pondremos en contacto a la brevedad.";
      form.reset();
    });
  }
});
