var divClone

function calculate_bmi() {

	var result_form = document.getElementById("bmi_form");
	divClone = result_form.cloneNode(true);

	var main = document.getElementById("main");
	var result_element = document.getElementById("result_bmi");
	var weight = document.getElementById("weight").value;
	var height_ft = document.getElementById("height_ft").value;
	var height_in = document.getElementById("height_in").value;

	var converted_weight = weight * 0.45;
	var height = ((height_ft * 12) + (height_in * 1)) * 0.025;
	height = height * height;
	var bmi = converted_weight / height;

	result_element.innerHTML = bmi.toFixed(2);

	result_form.innerHTML=document.getElementById("bmi_form_result").innerHTML;

//	document.getElementById("bmi_form").style.visibility = "hidden";
//	document.getElementById("bmi_form_result").style.visibility = "visible";
	
}

function reset_form(){
	var new_form = document.getElementById("bmi_form_replace");
	var old_form = document.getElementById("bmi_form");

	old_form.innerHTML = new_form.innerHTML;
			

//	document.getElementById("bmi_form").style.visibility = "visible";
//	document.getElementById("bmi_form_result").style.visibility = "hidden";

}