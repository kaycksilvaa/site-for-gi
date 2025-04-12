// Animação de corações flutuando
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.querySelector(".hearts-container").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  setInterval(createHeart, 300);
  
  const perguntas = [
    {
      pergunta: "Qual a data do meu primeiro 'Eu te amo'?",
      opcoes: ["14/01", "20/01", "04/01", "04/02"],
      correta: 2
    },
    {
      pergunta: "Primeira foto que postei com você?",
      opcoes: ["27/12", "30/11", "20/12", "28/11"],
      correta: 1
    },
    {
      pergunta: "Data do nosso primeiro date?",
      opcoes: ["14/12", "26/12", "19/12", "21/12"],
      correta: 3
    },
    {
      pergunta: "Qual apelido carinhoso a gente se chama mais?",
      opcoes: ["Momo", "Morzito", "Be", "Momuxo"],
      correta: 1
    }
  ];
  
  let indicePergunta = 0;
  
  document.querySelector(".formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(".formulario").classList.add("escondido");
    document.getElementById("mensagem-pos-cadastro").classList.remove("escondido");
  });
  
  document.getElementById("iniciarQuiz").addEventListener("click", () => {
    document.getElementById("mensagem-pos-cadastro").classList.add("escondido");
    mostrarPergunta();
  });
  
  function mostrarPergunta() {
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = "";
    quiz.classList.remove("escondido");
  
    const p = perguntas[indicePergunta];
    const h2 = document.createElement("h2");
    h2.textContent = p.pergunta;
    quiz.appendChild(h2);
  
    p.opcoes.forEach((opcao, index) => {
      const btn = document.createElement("button");
      btn.textContent = opcao;
      btn.addEventListener("click", () => {
        if (index === p.correta) {
          alert("Acertou amor! 💘");
          indicePergunta++;
          if (indicePergunta < perguntas.length) {
            mostrarPergunta();
          } else {
            quiz.classList.add("escondido");
            document.getElementById("mensagem-final").classList.remove("escondido");
          }
        } else {
          alert("Errou... volta pro início do quiz, amorzinho 🥲");
          indicePergunta = 0;
          mostrarPergunta();
        }
      });
      quiz.appendChild(btn);
    });
  }
  
  document.getElementById("verCarta").addEventListener("click", () => {
    document.getElementById("mensagem-final").classList.add("escondido");
    document.getElementById("carta").classList.remove("escondido");
  });