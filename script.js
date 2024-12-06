function validaformulario(){
    let nombre=document.getElementById("nombre").value;
    if(nombre==""){
        alert("error:porfavor escriba el nombre!");
        return false;
    }
    let correo=document.getElementById("email").value;
    if(correo==""){
        alert("error:porfavor escriba el email!");
        return false;
    }
    let mensaje=document.getElementById("mensaje").value;
    if(mensaje==""){
        alert("error:porfavor escriba el mensaje!");
        return false;
    }
    return true;
}

