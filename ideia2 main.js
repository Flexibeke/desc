const nomePg2 = localStorage.getItem("nomeUserHTML");
document.getElementById("nomeUserPg2").innerText = nomePg2;

function proximo() {
  const sim = document.getElementById("sim");
  const nao = document.getElementById("nao");

  if (sim.checked || nao.checked) {
    const respostaPg2 = sim.checked ? "sim" : "nao";
    localStorage.setItem("respostaPg2", respostaPg2);
    window.location.href = "pag3 index.html";
  } else {
    document.getElementById("erro").style.display = "block";
  }
}
