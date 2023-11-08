function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');
  
  function showText() {
	var txt_box = document.getElementById('entryinput');
	document.getElementById('textoutput').innerHTML = txt_box.value
	alert("Jordan Kauffman: " + txt_box.value);
  }
  
  button.addEventListener('click', showText);
  }

window.addEventListener('load', init); 
