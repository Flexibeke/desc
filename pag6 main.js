const nomePg6 = localStorage.getItem("nomeUserHTML");

function verificarSim() {
  document.getElementById("apaga").style.display = "none";
  document.getElementById("hack").style.display = "block";

  let contarSim = 0;

  const respostas = [
    localStorage.getItem("respostaPg2"),
    localStorage.getItem("respostaPg3"),
    localStorage.getItem("respostaPg4"),
    localStorage.getItem("respostaPg5"),
  ];

  respostas.forEach((radio) => {
    if (radio && radio.trim().toLowerCase() === "sim") {
      contarSim++;
    }
  });

  const resultado = document.getElementById("resultado");
  if (contarSim == 0) {
    resultado.textContent = `\nUOUU, parabéns viu, esse daí é hetero com força, la elee`;
  } else if (contarSim == 1) {
    resultado.textContent = `\nParabéns ${nomePg6}, você não é viadinho, teve 75% de perguntas de nãos respondidas `;
  } else if (contarSim == 2) {
    resultado.textContent = `\nOlha, tu teve 50% de cada, se ta meio pá frente viu ${nomePg6} Hhehehe`;
  } else if (contarSim == 3) {
    resultado.textContent = `\nXiiiiiii, 75% de perguntas respondidas com simm, esse (a) vai dar trabalhooo viu ${nomePg6} 🌈🌈`;
  } else {
    resultado.textContent = `\nRAPAIZZZZZ, hoje tem com uns ingredientes especial viuu. Hetero tu não em nenhum lugar ${nomePg6} 🌈🌈`;
  }
}

function gerarBug() {
  const bugs = [
    "0110010",
    "TasdeSS",
    "ERROR!404",
    nomePg6,
    "#####&&*%",
    "X_X",
    "HACKEDd",
  ];

  const bug = document.createElement("div");
  bug.className = "bug";
  bug.textContent = bugs[Math.floor(Math.random() * bugs.length)];

  bug.style.left = Math.random() * window.innerWidth + "px";
  bug.style.top = Math.random() * window.innerWidth + "px";
  bug.style.fontSize = Math.random() * 20 + 10 + "px";

  document.body.appendChild(bug);

  setTimeout(() => {
    bug.remove();
  }, 2500);
}

function hackearTudo() {
  document.getElementById("body").style.background = "#000";
  document.getElementById("resultados").textContent =
    "SYSTEM HACKED,,, SYSRED;#";

  let interval = setInterval(gerarBug, 100);
  setTimeout(() => {
    clearInterval(interval);
    alert("SYSTEM.HACKED.SUCESS!");
  }, 8000);
}
