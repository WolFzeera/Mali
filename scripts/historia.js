document.addEventListener("DOMContentLoaded", () => {
    const eventos = document.querySelectorAll(".evento");
    let index = 0;
  
    function destacarProximo() {
      eventos.forEach((e, i) => {
        e.classList.remove("destaque");
      });
  
      eventos[index].classList.add("destaque");
  
      index = (index + 1) % eventos.length;
    }
  
    setInterval(destacarProximo, 2500); // muda a cada 2.5s
    destacarProximo(); // inicia com o primeiro
  });
  