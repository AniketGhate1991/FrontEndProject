var Post1 = document.getElementById("delpost1");
var Post2 = document.getElementById("delpost2");
var Post3 = document.getElementById("delpost3");
var Post4 = document.getElementById("delpost4");
var Post5 = document.getElementById("delpost5");

function deletepost() {
    // Fetch the modal
    var modal = document.getElementById("deletepost");
    // Display the modal to the user
    modal.style.display = "block";
    Post1.style.display = "block";
    // Hides the modal if user clicks else where on the display
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  function GoToNo(){
    var modal = document.getElementById("deletepost");
    modal.style.display = "none";
  }

  function GoToYes(PostValue){
    var modal1 = document.getElementById("post5");
    modal1.style.display = "none";
    var modal = document.getElementById("deletepost");
    modal.style.display = "none";

  }

 
// When the user clicks on the button, open the modal 


