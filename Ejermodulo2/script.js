function registrarse(){
	var nombre = document.forms[0].nombre.value
	var apellido = document.registro_form.apellido.value
	var email = document.getElementById("email_id").value
	var telefono = document.getElementById("telefono_id").value
	var password = document.getElementById("password_id").value
	var passwordd = document.getElementById("passwordd_id").value

	console.log(nombre,apellido,email,telefono,password,passwordd)
	if(nombre ==""){
		document.getElementById("error_nombre").innerHTML ="El campo nombre es obligatorio"
	}else {
		document.getElementById("error_nomnbre").innerHTML =""
	}
	if(apellido ==""){
		document.getElementById("error_apellido").innerHTML ="El campo apellido es obligatorio"
	}else {
		document.getElementById("error_apellido").innerHTML =""
	}
	if(email ==""){
		document.getElementById("error_email").innerHTML ="El campo email es obligatorio"
	}else {
		document.getElementById("error_email").innerHTML =""
	}
	if(telefono ==""){
		document.getElementById("error_telefono").innerHTML ="El campo telefono es obligatorio"
	}else {
		document.getElementById("error_telefono").innerHTML =""
	}
	if(password ==""){
		document.getElementById("error_password").innerHTML ="El campo password es obligatorio"
	}else {
		document.getElementById("error_password").innerHTML =""
	}
	if(passwordd ==""){
		document.getElementById("error_passwordd").innerHTML ="El campo passwordd es obligatorio"
	}else {
		document.getElementById("error_passwordd").innerHTML =""
	}
}
function comprobarClave(){
	var password = document.getElementById("password_id").value
	var passwordd = document.getElementById("passwordd_id").value
	if (password == passwordd){ 
		alert ("registrado")
	}else{
		alert("las contraseñas no son iguales")
		return registrarse();
	}
  
} 

