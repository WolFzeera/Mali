document.addEventListener("DOMContentLoaded", () => {
    const inicio = new Date("2025-02-16T00:00:00"); // ← data corrigida
    const diasEl = document.getElementById("dias-juntos");
  
    function atualizarContador() {
      const agora = new Date();
      const diff = agora - inicio;
      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      
      // Se ainda não chegou a data
      if (dias < 0) {
        diasEl.textContent = `Faltam ${Math.abs(dias)} dias pro nosso dia começar 💌`;
      } else {
        diasEl.textContent = `${dias} dias juntinhos 💖`;
      }
    }
  
    atualizarContador();
    setInterval(atualizarContador, 3600000);
  });
  function uivar() {
    const audio = new Audio("sons/uivo.mp3");
    audio.play();
  }
  
  