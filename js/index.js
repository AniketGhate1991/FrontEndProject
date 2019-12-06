var modalPost = document.getElementById("myModalPost");
var btnPost = document.getElementById("CreatePost") ;
var spanPost = document.getElementsByClassName("close")[2] ;

btnPost.onclick = function() {
    modalPost.style.display = "block";
  }

  spanPost.onclick = function() {
    modalPost.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modalPost) {
        modalPost.style.display = "none";
    }
  }