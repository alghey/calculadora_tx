
document.getElementById("reedireccionar").onclick=function(){
cambio_pagina();
}



function cambio_pagina (){
var linea = document.getElementById("tipo_linea").value;
var calculo =document.getElementById("tipo_calculo").value;

if(linea==1 && calculo==1){

window.location.replace("Microcinta2.html");

}
if(linea==1 && calculo==2){

    window.location.replace("Microcinta.html");
    
}


if(linea==2 && calculo==1){

    window.location.replace("Coaxial2.html");
    
    }
if(linea==2 && calculo==2){
    
        window.location.replace("Coaxial.html");
        
}


if(linea==3&& calculo==1){

    window.location.replace("Bifiliar2.html");
    
    }
if(linea==3 && calculo==2){
    
    window.location.replace("Bifiliar.html");
        
}


}

function menu(){
    window.location.replace("index.html");
}



