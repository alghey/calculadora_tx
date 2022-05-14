
document.getElementById("impedancia_calculo3").onclick=function(){
    calcular_impedancia();
    }



function calcular_impedancia(){


  
var dielectrico= valor_dielectricos();
var diametro_conductor=Number(document.getElementById("conductor_input").value);
var diametro_cc=Number(document.getElementById("dcc_input").value);

var decimales= /^(\d+)?([.]?\d{1,10})?$/;
var permitividad1=document.getElementById("dielectrico_in").value;
var permitividad2=document.getElementById("diele").value;






if(diametro_conductor.length == 0 || /^\s+$/.test(diametro_conductor) ||diametro_cc.length == 0 || /^\s+$/.test(diametro_cc) ){
    alert("No puede haber campos vacios");
    return false;

}
if(diametro_conductor==0||diametro_cc==0){
    alert("Introduzca valores distintos de 0");
    return false;
}


if(!decimales.test(diametro_cc)||!decimales.test(diametro_conductor)){
    alert("solo se aceptan numeros positivos con hasta 10 decimales ");
    return false;
}

if(diametro_conductor>=diametro_cc){
    alert("El diametro del conductor debe ser menor a la distancia centro a centro");
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





var z0=(376.63/(Math.PI*Math.sqrt(dielectrico)))*Math.acosh(diametro_cc/diametro_conductor);

if(z0<=0){
    alert("Revise los datos introducidos, reultado con valor menor o igual a 0");
    return false;
}


document.getElementById("bifiliar_res").value=z0.toPrecision(4) + " Ω";
document.getElementById("bifiliar_res").style.display="block";
document.getElementById("resultado").style.display="block";


}









function medida(){
var medida= document.getElementById("diam").value;


if(medida==1){
    document.getElementById("dcc").value=1;

    }
    else{

    document.getElementById("dcc").value=2;

    }




}
