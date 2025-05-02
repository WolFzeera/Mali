document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".corações");
  
    function criarCoracao() {
      const cor = document.createElement("div");
      cor.classList.add("coracao");
      cor.style.left = Math.random() * 100 + "vw";
      cor.style.animationDuration = Math.random() * 2 + 3 + "s";
      container.appendChild(cor);
  
      setTimeout(() => cor.remove(), 5000);
    }
  
    setInterval(criarCoracao, 600);
  });
  