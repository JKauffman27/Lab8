function init(){
//add your javascrip between these two lines of code
  var button = document.getElementByID('entrybutton');
  
  function showText() {
	var txt_box = document.getElementByID('entryinput');
	document.getElementByID('textoutput').innerHTML = txt_box.value
	alert("Jordan Kauffman: " + txt_box.value);
  }
  
  button.addEventListener('click', showText);
  }

window.addEventListener('load', init);
