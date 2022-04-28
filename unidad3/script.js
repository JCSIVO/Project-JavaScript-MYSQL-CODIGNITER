function Calculadora(){
	const op1 = document.getElementById("op1_id").value
	const op2 = document.getElementById("op2_id").value
	const operacion = document.getElementById("operacion_id").value
	
	console.log(op1,op2)


	switch(operacion){
		case "1":
			document.getElementById("resultado_id").value = parseInt(op1) + parseInt(op2)
			break
		case "2":
			document.getElementById("resultado_id").value = parseInt(op1) - parseInt(op2)
			break
		case "3":
			document.getElementById("resultado_id").value = parseInt(op1) * parseInt(op2)
			break
		case"4":
			document.getElementById("resultado_id").value = parseInt(op1) / parseInt(op2)
			break
		default:
			document.getElementById("resultado_id").value = "NO Aplica"
	}

}