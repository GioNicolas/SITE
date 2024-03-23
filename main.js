
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");


var btn = document.getElementById("openModal");
var btn2 = document.getElementById("openModal2");
var btn3 = document.getElementById("openModal3");


var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");


btn.onclick = function () {
  modal.style.display = "block";
}
btn2.onclick = function () {
  modal2.style.display = "block";
}
btn3.onclick = function () {
  modal3.style.display = "block";
}

// Função para fechar o modal quando o usuário clica no botão de fechar
close1.onclick = function () {
  modal.style.display = "none";
}
close2.onclick = function () {
  modal2.style.display = "none";
}
close3.onclick = function () {
  modal3.style.display = "none";
}

// Função para fechar o modal quando o usuário clica fora dele
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}