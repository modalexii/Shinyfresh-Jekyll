var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();

if (window.location.pathname.includes('byyear')) {
  /* show the div named for the year parmeter */
  var child = document.getElementById(urlParams['y']);
  child.style.display = 'block';
} else {
  var child = document;
}

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
  var x = child.getElementsByClassName("slide");
  var y = child.getElementsByClassName("slide-meta");
  var z = child.getElementsByClassName("series-thumb");
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

document.addEventListener("DOMContentLoaded", function(event) { 

  // supprot swipe on carousel
  var slides = document.getElementsByClassName('slide');
  var hammered = [];
  for (elem = 0; elem < slides.length; elem++) {;
    hammered[elem] = new Hammer(slides[elem]);
    hammered[elem].on("swipeleft", function(ev) {
        plusDivs(1);
    });
    hammered[elem].on("swiperight", function(ev) {
        plusDivs(-1);
    });
  }

});

