document.addEventListener("DOMContentLoaded", function(event) { 

/* manage mobile nav menu toggle */
var toggleButton = document.getElementById('mobilemenu');
var toggledElement = document.getElementById('navigation');
// if toggle button is visible (indicating mobile view) 
if (toggleButton.offsetWidth !== 0 && toggleButton.offsetHeight !== 0) {
	// hide menu 
	toggledElement.style.display = 'none';
	// remove sticky property from menu
	document.getElementById('navigation').style.position='initial'
}
toggleButton.onclick=function(){
	var currentDisplayMode = toggledElement.style.display;
	var newDisplayMode = (currentDisplayMode == 'none') ? '' : 'none';
	toggledElement.style.display = newDisplayMode;
}


});