// creo una funcion validar formulario

function validarFormulario(){
    var nombre =
 document.getElementById("nombre").value;
    var mail =
 document.getElementById("mail").value;
  if (nombre == "") {
    alert("campo vacio.");
    return false;
  }   
  if (mail == ""){
     alert("campo vacio.");
     return false;
  } 
  if (mail )  

    alert("datos enviados");  
    return true;
}