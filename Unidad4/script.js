const getGracias = ()=>{
    const http = new XMLHttpRequest()
    http.onreadystatechange = ()=>{
        console.log('onreadystatechange',http.readyState,http.status)
        if(http.readyState==4 && http.status==200){
            document.getElementById('mensaje').innerHTML = http.responseText
        }
    }
    http.open("GET","http://localhost/Modulo-2-Unidad-2/Unidad4/GRACIAS.TXT") 
    http.send()

}
const registrarse = () =>{
	const nombre = document.forms[0].nombre.value;
    const apellido = document.registro_form.apellido.value;
    const telefono = document.getElementById('telefono_id').value;
    const email = document.getElementById('email_id').value;
    const tipoDeContacto = document.getElementById('tipo_contacto_id').value;
    const asunto = document.getElementById('asunto_id').value;
    const descripcion = document.getElementById('descripcion_id').value;

	console.log(nombre,apellido,email);

	let verificable = true;

	if(nombre ==""){
		document.getElementById("error_nombre").innerHTML ="El campo nombre es obligatorio"
	}else {
		document.getElementById("error_nombre").innerHTML =""
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
	if(asunto ==""){
		document.getElementById("error_asunto").innerHTML ="El campo asunto es obligatorio"
	}else {
		document.getElementById("error_asunto").innerHTML =""
	}
	if(descripcion ==""){
		document.getElementById("error_descripcion").innerHTML ="El campo descripcion es obligatorio"
	}else {
		document.getElementById("error_descripcion").innerHTML =""
	}

	if (verificable) {
		console.log("paso")
		getGracias()
	}
}
const seleccionarContacto = () => {
    let tipo_contacto = document.getElementById("tipo_contacto_id").value
      switch(tipo_contacto){
        case "1":
            document.getElementById("valor_contacto").innerHTML = "El soporte se comunicara con vos"
            break;
        case "2":
            document.getElementById("valor_contacto").innerHTML = "El DPTO de ventas se comunicara con vos"
            break;
        default:
            document.getElementById("valor_contacto").innerHTML = "No selecciono opciones"
    }
}
seleccionarContacto()