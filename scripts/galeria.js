document.addEventListener("DOMContentLoaded", () => {
  const fotos = document.querySelectorAll(".foto-galeria");
  let index = 0;

  function destacarFoto() {
    fotos.forEach(f => f.classList.remove("destaque"));
    fotos[index].classList.add("destaque");
    index = (index + 1) % fotos.length;
  }

  setInterval(destacarFoto, 2500);
  destacarFoto();

  // Zoom ao clicar
  const lightbox = document.getElementById("lightbox");
  const zoomImg = document.getElementById("zoom-imagem");

  fotos.forEach(foto => {
    foto.addEventListener("click", () => {
      zoomImg.src = foto.src;
      lightbox.classList.add("ativo");
    });
  });
});

function fecharZoom() {
  document.getElementById("lightbox").classList.remove("ativo");
}
