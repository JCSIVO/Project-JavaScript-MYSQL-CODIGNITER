function validarEnteroEnCampo(texto){
	var archivo = document.getElementById("texto")
	var valueInt = parseInt(archivo.value)

	

	if(!Number.isInteger(valueInt)){
		alert("No es un entero")
	} else{
		archivo.value = valueInt

	}
}