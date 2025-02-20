var columnas_tabla = []                                          
window.onload = function(){
	 let aplicacion = localStorage.getItem("crimson_aplicacion")
    
    listadoTablas(aplicacion);         		
    modal()     
    cargoAplicaciones()
    imprimir();
    muestraBI()
    generarDocumento();
    subirArchivos();
   
}


 
 
 
 
