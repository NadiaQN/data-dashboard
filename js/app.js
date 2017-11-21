/*
 * Funcionalidad de tu producto
 */
//funcion navegacion por tabs
//con la funcion load mantengo una pestaña predeterminada
window.addEventListener("load",function(){
document.getElementById('estudent').style.display="none";
document.getElementById('teacher').style.display="none";
});
//con la funcion openpage se muestra el contenido de cada pestaña
var openPage = function(id){
	var tabs = document.getElementsByClassName('tabcontent');
	for(i=0; i<tabs.length; i++){
		tabs[i].style.display="none";
	}
	document.getElementById(id).style.display = "";
};
//fin navegación por tabs

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
