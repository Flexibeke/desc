const nomePg5 = localStorage.getItem("nomeUserHTML");
document.getElementById("nomeUserPg5").innerText = nomePg5;

function proximoPg5() {
  const simPg5 = document.getElementById("simPg5");
  const naoPg5 = document.getElementById("naoPg5");

  if (simPg5.checked || naoPg5.checked) {
    const respostaPg5 = simPg5.checked ? "sim" : "nao";
    localStorage.setItem("respostaPg5", respostaPg5);
    window.location.href = "pag6 index.html";
  } else {
    document.getElementById("erroPg5").style.display = "block";
  }
}
