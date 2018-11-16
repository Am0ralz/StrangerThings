
function invalid(){

	var w =document.forms["sup"]["firstname"].value; /*gets the value of string of whats inside the textfield of labeled firstname box/jtextfeild*/
	var x =document.forms["sup"]["lastname"].value;
	var y =document.forms["sup"]["Email"].value;

	if(w=="" || x=="" || y==""){
		return false;/*wont even continue to the rest/not needed*/
	}
	else{
		return true;
	}
}
function illEvalu(){
	if(invalid()){
		alert('Your message has been sent. Thank you for your time.');
	}
	else if(!invalid()){
		alert('INVALID! PLEASE ENTER THE INFO NEEDED!');
}
}