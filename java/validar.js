function validar(elementos){
    let estancorrectos = true;
    for (var i=0;i<elementos.length; i++){
        if (elementos[1].value=="" || elementos[1].value=="off"){
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " esta vacio";
            
            estancorrectos = false;
        }
    }


    return estancorrectos;
}