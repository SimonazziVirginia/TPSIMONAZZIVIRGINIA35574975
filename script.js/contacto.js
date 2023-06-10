document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var surname = document.getElementById ('surname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Realiza alguna validación de los datos si es necesario

    // Simula el envío del formulario (puedes reemplazar esto con tu lógica de envío real)
    setTimeout(function() {
      var responseMessage = 'Gracias por tu mensaje, ' + name + '. Nos pondremos en contacto contigo pronto.';
      alert(responseMessage);

      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }, 1000);
  });
