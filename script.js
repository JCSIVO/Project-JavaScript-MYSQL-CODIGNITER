function registrarse(){
	var nombre = document.forms[0].nombre.value
	var apellido = document.registro_form.apellido.value
	var email = document.getElementById("email_id").value
	var password = document.getElementById("password_id").value

	console.log(nombre,apellido,email,password);
	if(nombre ==""){
		document.getElementById("Error_nombre").innerHTML ="El campo nombre es obligatorio"
	}else {
		document.getElementById("error_nomnbre").innerHTML =""
	}
} 
function seleccionarCurso(){
	var tipo_curso =document.getElementById("tipo_curso_id").value
	console.log(tipo_curso)
	switch(tipo_curso){
		case "1":
			document.getElementById("valor_curso").innerHTML = "500€"
			break
		case "2":
			document.getElementById("valor_curso").innerHTML = "1000€"
			break
		case "3":
			document.getElementById("valor_curso").innerHTML = "1500€"
			break
		default:
			document.getElementById("valor_curso").innerHTML = "no aplica"

	}
}
seleccionarCurso()
function sumar(){
	var op1 = document.getElementById("op1").value
	var op2 = document.getElementById("op2").value

	document.getElementById("resultado_id").value = parseInt(op1) + op2*1
}