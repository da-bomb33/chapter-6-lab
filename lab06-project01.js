function Blank(inputField){
    if(inputField.type=="checkbox"){
	if(inputField.checked)
	    return false;
	return true;
    }
    if (inputField.value==""){
	return true;
    }
    return false;
}

function Red(input){
   	input.style.backgroundColor="#AA0000";
	input.parentNode.style.backgroundColor="#AA0000";
	input.parentNode.style.color="#FFFFFF";		
}
function Clean(input){
	input.parentNode.style.backgroundColor="#AA0000";
	input.parentNode.style.color="#000000";
	
}

window.onload = function(){
    var mainForm = document.getElementById("mainForm");
    var required = document.querySelectorAll(".required");
    for (var i=0; i < required.length; i++){
	required[i].onfocus = function(){
	    this.style.backgroundColor = "#EEEE00";
	}
    }
    mainForm.onsubmit = function(e){
	var required = document.querySelectorAll(".required");
	for (var i=0; i < required.length; i++){
	    if( Blank(required[i]) ){
		e.preventDefault();
		Red(required[i]);
	    }
	    else{
		Clean(required[i]);
	    }
	}
    }
}