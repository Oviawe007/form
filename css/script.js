const firstname = document.getElementById("firstname").value
const surname = document.getElementById("surname")
const password = document.getElementById("password")
const url = document.getElementById("url")
const email = document.getElementById("email")
const form = document.getElementById("form")
const error= document.getElementById("error")


function validateForm(){
	if (firstname == ""){
		alert("firstname is empty!");
	}
}