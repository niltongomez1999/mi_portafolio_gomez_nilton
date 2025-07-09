document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Gracias por tu mensaje. ¡Te responderé pronto!");
});
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("show");
});


  document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function (e) {
      e.preventDefault(); // Detiene el envío automático

      // Crear y mostrar mensaje de éxito
      const mensaje = document.createElement('p');
      mensaje.textContent = '¡Mensaje enviado con éxito!';
      mensaje.style.color = 'green';
      formulario.appendChild(mensaje);

      // Espera 2 segundos y luego envía el formulario
      setTimeout(() => {
        formulario.submit();
      }, 2000);
    });
  });



