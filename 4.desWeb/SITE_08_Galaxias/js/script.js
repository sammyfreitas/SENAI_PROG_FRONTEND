document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.fade');
  let currentImageIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  // Inicializa a primeira imagem
  showImage(currentImageIndex);

  // Configura um intervalo para trocar as imagens a cada 3-5 segundos
  setInterval(nextImage, 5000); // Ajuste o intervalo conforme necessário
});
