document.addEventListener("DOMContentLoaded", () => {
    fetch("cartas.json")
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById("cartas-container");
        data.forEach((carta, index) => {
          const cartaDiv = document.createElement("div");
          cartaDiv.classList.add("carta");
          cartaDiv.innerHTML = `
            <h3>${carta.titulo}</h3>
            <p class="texto-carta" data-texto="${carta.mensagem}">Clique para ler 💖</p>
          `;
          cartaDiv.addEventListener("click", () => abrirCarta(cartaDiv));
          container.appendChild(cartaDiv);
        });
      })
      .catch(error => console.error("Erro ao carregar as cartas:", error));
  });
  
  function abrirCarta(el) {
    const p = el.querySelector(".texto-carta");
    const texto = p.getAttribute("data-texto");
    p.textContent = "";
    let i = 0;
  
    function escrever() {
      if (i < texto.length) {
        p.textContent += texto.charAt(i);
        i++;
        setTimeout(escrever, 35);
      }
    }
  
    el.classList.add("aberta");
    escrever();
  }
  