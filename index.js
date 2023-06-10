document.addEventListener("DOMContentLoaded", function () {
  var carouselItems = document.querySelectorAll("#carouselExampleIndicators .carousel-item");
  var intervalPerSlide = 4000; // Intervalo de 3 segundos para cada imagen (ajusta según tus necesidades)

  var carousel = new bootstrap.Carousel(document.getElementById("carouselExampleIndicators"), {
    interval: false // Desactiva el intervalo automático predeterminado de Bootstrap
  });

  function startInterval(index) {
    carousel.to(index); // Muestra la imagen correspondiente al índice

    // Reinicia el intervalo después de un tiempo
    setTimeout(function () {
      var nextIndex = (index + 1) % carouselItems.length;
      startInterval(nextIndex); // Muestra la siguiente imagen en el carrusel
    }, intervalPerSlide);
  }

  // Inicia el intervalo para la primera imagen del carrusel
  startInterval(0);
});
