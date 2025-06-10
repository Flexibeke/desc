const nomePg4 = localStorage.getItem("nomeUserHTML");
document.getElementById("nomeUserPg4").innerText = nomePg4;

function proximoPg4() {
  const simPg4 = document.getElementById("simPg4");
  const naoPg4 = document.getElementById("naoPg4");

  if (simPg4.checked || naoPg4.checked) {
    const respostaPg4 = simPg4.checked ? "sim" : "nao";
    localStorage.setItem("respostaPg4", respostaPg4);
    window.location.href = "pag5 index.html";
  } else {
    document.getElementById("erroPg4").style.display = "block";
  }
}
