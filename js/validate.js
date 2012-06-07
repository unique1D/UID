

function validateName(){
	var username = document.getElementById("username");
	console.log("Hello");
	if(username.value.length<6 )
		return "->Name should be atleast 6 characters\n";
	else
		return "";
}
function validatePassword(){
	var password = document.getElementById("password");
	if(password.value.length<6)
		return "->Password should be atleast 6 characters\n";
	else
		return "";
}
function validateEmail(){
	var Email = document.getElementById("Email");
	var len=Email.value.length;
	var atpos=Email.value.indexOf("@");
	var dotpos=Email.value.lastIndexOf(".");
	if(atpos<1||dotpos<atpos+2||dotpos+2>=len)
		return "->Not a Valid Email ID\n";
	else
		return "";
}
function validatePhone(){
	var mobile = document.getElementById("mobile");
	if(mobile.value.length<10 || mobile.value.length>10)
		return "->Phone number should contain 10 numbers\n";
	else
		return "";
}
function validateConfirmPassword()
{
	var ConfirmPassword = document.getElementById("ConfirmPassword");
	if(ConfirmPassword.value!=password.value)
		return "->Both the Passwords Should Match\n";
	else
		return "";
}
function validate(){
	var err="";
	err+=validateName();
	console.log("xjfhjgxfd");
	err+=validatePassword();
	err+=validateEmail();
	err+=validatePhone();
	err+=validateConfirmPassword();
	if(err.length==0)
		return true;
	else{
		alert(err);
		return false;
	}
}