function uivar() {
    const audio = new Audio("sons/uivo.mp3");
    audio.volume = 0.6;
    audio.play();
  
    const mensagens = [
      "Você cutucou o WolF, bobinha 😳",
      "O lobo te ama tanto que uiva por você 💘",
      "Uiiiii~ Ele sentiu saudade 🐺",
      "Tsc tsc... mexeu no mascote de novo, danadinha 😏",
      "Esse uivo é só seu, sabia? 💌"
    ];
  
    const bilhete = document.getElementById("mensagem-bia");
    const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
  
    bilhete.textContent = mensagem;
    bilhete.style.opacity = 1;
    bilhete.style.animation = "aparecer 1s ease";
  
    setTimeout(() => {
      bilhete.style.opacity = 0;
    }, 4000);
  }
  