// Get the modal
var modal = document.getElementById("myModal");
var out = document.getElementById("sair");

// Get the button that opens the modal
var btn = document.getElementById("botao_novo");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == out) {
    modal.style.display = "none";
  }
}