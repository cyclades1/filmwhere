function valid() {
			// body...
	var name = document.getElementById("name").value;
	var no = document.getElementById("phone").value;
	var mail= document.getElementById("email").value;
	var pass = document.getElementById("pass").value;
	var cpass = document.getElementById("cpass").value;

	if(name =="")
	{
		alert("name can not be empty.");
		return false;
	}
	
	var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(pat.test(mail) == false)
	{
		alert("enter valid email.");
		return false;
	}
	
	pat = /^\d{10}$/;
	if(pat.test(no)== false)
	{
		alert("incorrect number");
		return false;
	}

	if(pass != cpass)
	{
		alert("password not matched");
		return false;
	}
	
}