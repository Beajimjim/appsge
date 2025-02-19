function cargaGraficas(){
	console.log("Vamos a por las gráficas")
	fetch("../../servidor/?o=estadisticastablas")
    	.then(function(result){
			console.log("el servidor dice: ", result)
    		return result.json()
    	})
    	.then(function(datos){
    	console.log("el servidor dice ok")
    		let nuevografico = new BJGrafica(datos,"#dc143c","table tbody","Resgistros en cada tabla");
			nuevografico.anillo()
    	})
}

function cargoAplicaciones(){
	////////////////////////////////// CARGO LAS APLICACIONES /////////////////////////////////////////////
    
    fetch("apps/apps.json")
    .then(function(response){
    	return response.json()
    })
    .then(function(datos){
    	console.log('seccion principal: ',datos)
    	aplicaciones = datos
    })
}
