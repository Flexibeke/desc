const armazem = {
  nomeUser: () => document.getElementById("nomeUser"),
  nomeObrigatorio: () => document.getElementById("nomeObrigatorio"),
  nomeInvalido: () => document.getElementById("nomeInvalido"),
  nomeExposto: () => document.getElementById("nomeExposto"),
  pegarNome: () => document.getElementById("pegarNome"),
};

function pegarNome() {
  let nome = armazem.nomeUser().value;
  armazem.nomeExposto().innerText = nome;
}

function validarNome() {
  const nomeValidacao = armazem.nomeUser().value;
  const contemNumero = /^[A-Za-zÀ-ÿ\s'-]+$/.test(nomeValidacao);

  if (nomeValidacao === "") {
    armazem.nomeObrigatorio().style.display = "block";
  } else if (!contemNumero) {
    //A ! faz com que o teste acima seja falso, ou seja, o teste só aceita letras, mas a ! faz o inverso,
    // em vez dele aceitar, ele recusa quem não tem apenas letras
    armazem.nomeInvalido().style.display = "block";
  } else {
    localStorage.setItem("nomeUserHTML", nomeValidacao);
    window.location.href = "ideia2 index.html";
  }
}
