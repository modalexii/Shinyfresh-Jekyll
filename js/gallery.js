var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var y = document.getElementsByClassName("slide-meta");
  var z = document.getElementsByClassName("series-thumb");
  //var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     y[i].style.display = "none";
     z[i].style.display = "none";
  }
  //for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  //}
  x[slideIndex-1].style.display = "block";
  y[slideIndex-1].style.display = "block";
  z[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " w3-opacity-off";
}