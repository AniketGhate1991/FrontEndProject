var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var btn = document.getElementById("SignUpButton");
var btn2 = document.getElementById("SignInButton");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

function GoToSignUp(){
    modal2.style.display = "none";
    modal.style.display = "block";
}

btn.onclick = function() {
    modal.style.display = "block";
  }
  btn2.onclick = function() {
    modal2.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }
  span2.onclick = function() {
    modal2.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
    
  }