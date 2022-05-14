
document.getElementById("impedancia_calculo2").onclick=function(){
    calcular_impedancia();
    }



function calcular_impedancia(){

var dielectrico= valor_dielectricos();
var diametro_exterior=document.getElementById("de_input").value;
var diametro_interior=document.getElementById("di_input").value;

var permitividad1=document.getElementById("dielectrico_in").value;
var permitividad2=document.getElementById("diele").value;
var decimales= /^(\d+)?([.]?\d{1,10})?$/;  



if(diametro_exterior.length == 0 || /^\s+$/.test(diametro_exterior) ||diametro_interior.length == 0 || /^\s+$/.test(diametro_interior) ){
    alert("No puede haber campos vacios");
    return false;

}

if(diametro_interior==0||diametro_exterior==0){
    alert("Introduzca valores distintos de 0");
    return false;
}




if(!decimales.test(diametro_interior)||!decimales.test(diametro_exterior)){
    alert("solo se aceptan numeros positivos con hasta 10 decimales ");
    return false;
}

if(diametro_exterior<=diametro_interior){
    alert("El diametro exterior debe ser mayor a el diametro interior");
    return false;
}


if(permitividad2==12 ){


if(permitividad1.length==0 ||/^\s+$/.test(permitividad1)){
    alert("No puede haber campos vacios");
    return false;
}


if(!decimales.test(permitividad1)){
    alert("solo se aceptan numeros positivos con hasta 10 decimales ");
    return false;
}


}



var z0=(138.06*Math.log10(diametro_exterior/diametro_interior))/Math.sqrt(dielectrico);

if(z0<=0){
    alert("Revise los datos introducidos, reultado con valor menor o igual a 0");
    return false;
}


document.getElementById("coax_res").value=z0.toPrecision(4) + " Ω";
document.getElementById("coax_res").style.display="block";
document.getElementById("resultado").style.display="block";
}
