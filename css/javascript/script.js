const form  = document.getElementById('form');

form.addEventListener('submit', (event) => {
			
    event.preventDefault();
    var firstname = document.getElementById("firstname").value;
    //var firstname = document.forms["form"]["firstname"].value;

    if (firstname == ""){
		alert("firstname is empty!");
	}
});
//alert('not again!!');