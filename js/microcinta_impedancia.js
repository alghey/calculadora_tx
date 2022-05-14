


document.getElementById("impedancia_calculo").onclick=function(){
 
    calcular_impedancia();
    }





function calcular_impedancia(){
document.getElementById("micro_res").style.display="none";
document.getElementById("resultado").style.display="none";
var permitividad1=document.getElementById("dielectrico_in").value;
var permitividad2=document.getElementById("diele").value;
var dielectrico= valor_dielectricos();   
var espesor=document.getElementById("espesor_input").value;
var ancho=document.getElementById("ancho_input").value;
var Ee;
var z0;
var decimales= /^(\d+)?([.]?\d{1,10})?$/;  




if(espesor.length == 0 || /^\s+$/.test(espesor) ||ancho.length == 0 || /^\s+$/.test(ancho) ){
    alert("No puede haber campos vacios");
    return false;
    
}

if(espesor==0||ancho==0){
    alert("Introduzca valores distintos de 0");
    return false;
    
}

if(!decimales.test(ancho)||!decimales.test(espesor)){
    alert("solo se aceptan numeros positivos con hasta 10 decimales ");
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



if(ancho/espesor < 1){
Ee=((dielectrico+1)/2) + ((dielectrico-1)/2)*(1/(Math.sqrt( 1+12*espesor/ancho ) )+0.04*Math.pow(1-(ancho/espesor),2));

z0=  60/(Math.sqrt(Ee))* Math.log(8*(espesor/ancho) + 0.25*(ancho/espesor));
    
}
else{
  
Ee=((dielectrico+1)/2) + ((dielectrico-1)/2)*(1/(Math.sqrt( 1+12*espesor/ancho)));
z0= 120*Math.PI/ (Math.sqrt(Ee))/(ancho/espesor+1.393+2/3*Math.log(ancho/espesor+1.444));

}


if(z0<=0){
    alert("Revise los datos introducidos, reultado con valor menor o igual a 0");
    return false;
}



document.getElementById("micro_res").value=z0.toPrecision(4) + " Ω";
document.getElementById("micro_res").style.display="block";
document.getElementById("resultado").style.display="block";


}






function medida(){
var medida= document.getElementById("esp").value;  


if(medida==1){
    document.getElementById("med").value=1;

    }
    else{
    
    document.getElementById("med").value=2;  
   
    }
    

   
   
}



