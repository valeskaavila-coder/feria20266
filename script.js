document.querySelectorAll("#anio").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

document.querySelectorAll("form.contacto").forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = form.querySelector('[name="nombre"]').value.trim();
    const respuesta = form.querySelector(".form-respuesta");

    if (nombre === "") {
      respuesta.textContent = "Por favor completa tu nombre.";
      respuesta.style.color = "#b71c1c";
      return;
    }

    respuesta.textContent =
      "¡Gracias, " + nombre + "! Tu mensaje fue registrado.";
    respuesta.style.color = "#2e7d32";
    form.reset();
  });
});
