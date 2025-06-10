const nomePg3 = localStorage.getItem("nomeUserHTML");
document.getElementById("nomeUserPg3").innerText = nomePg3;

function proximoPg3() {
  const simPg3 = document.getElementById("simPg3");
  const naoPg3 = document.getElementById("naoPg3");

  if (simPg3.checked || naoPg3.checked) {
    const respostaPg3 = simPg3.checked ? "sim" : "nao";
    localStorage.setItem("respostaPg3", respostaPg3);
    window.location.href = "pag4 index.html";
  } else {
    document.getElementById("erroPg3").style.display = "block";
  }
}
