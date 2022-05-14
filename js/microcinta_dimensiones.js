document.getElementById("dimensiones_calculo").onclick=function(){
    calcular_dimensiones();
    }


function calcular_dimensiones(){

        document.getElementById("micro_ancho").style.display="none";
        document.getElementById("micro_largo").style.display="none";
        document.getElementById("resultadoancho").style.display="none";
        document.getElementById("resultadolongitud").style.display="none";


        var permitividad1=document.getElementById("dielectrico_in").value;
        var permitividad2=document.getElementById("diele").value;
        var elevar,L,tipo;

        var fr = document.getElementById("fr").value;
        var dielectrico= valor_dielectricos();   
        var medida_frecuencia;
        var frecuencia=document.getElementById("frecuencia_input").value;
        var espesor=document.getElementById("espesor_input").value;
        var longitud=document.getElementById("longitud_input").value;
        var impedancia=document.getElementById("impedancia_input").value;

        var tipo_medida=document.getElementById("esp").value;
        var Ee;


        var decimales= /^(\d+)?([.]?\d{1,10})?$/;  

     

        if(espesor.length == 0 || /^\s+$/.test(espesor) ||longitud.length == 0 || /^\s+$/.test(longitud) ||impedancia.length == 0 || /^\s+$/.test(impedancia) ||frecuencia.length == 0 || /^\s+$/.test(frecuencia) ){
            alert("No puede haber campos vacios");
            return false;
            
        }
        
        if(espesor==0||frecuencia==0||impedancia==0){
            alert("Introduzca valores distintos de 0");
            return false;
        }

        
        if(!decimales.test(longitud)||!decimales.test(espesor)||!decimales.test(impedancia)||!decimales.test(frecuencia)){
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




        if(fr == 1){
        medida_frecuencia=frecuencia;
        }
        if(fr==2){
        medida_frecuencia=frecuencia*Math.pow(10,3);
        }
        if(fr==3){
        medida_frecuencia=frecuencia*Math.pow(10,9);
        }

        var W_H= (impedancia/60)*Math.sqrt((dielectrico+1)/2) + ((dielectrico-1)/(dielectrico+1))*(0.23+(0.11/dielectrico));

    
        var a=(8*Math.exp(W_H))/(Math.exp(2*W_H)-2);
        var ancho = a*espesor;

        
        if((a)<1){
        Ee=((dielectrico+1)/2) + ((dielectrico-1)/2)*(1/(Math.sqrt( 1+12*espesor/ancho ) )+0.04*Math.pow(1-(ancho/espesor),2));
        }

       
        if((a)>=1){
        Ee=((dielectrico+1)/2) + ((dielectrico-1)/2)*(1/(Math.sqrt( 1+12*espesor/ancho))); 
        }


        if(tipo_medida==1){
        elevar=10**3;
        L = ((longitud*(Math.PI/180)*3*10**8)/(2*Math.PI*medida_frecuencia*Math.sqrt(Ee)))*elevar;
        tipo="mm";
        ancho=ancho;
        }
        if(tipo_medida==2){
        elevar=10**2;   
        L = ((longitud*(Math.PI/180)*3*10**8)/(2*Math.PI*medida_frecuencia*Math.sqrt(Ee)))*elevar;
        tipo="cm";
      
        }

        if(L<=0||ancho<=0){
            alert("Revise los datos introducidos, reultados con valor menor o igual a 0");
            return false;
        }


        


        document.getElementById("micro_ancho").value=ancho.toPrecision(4) +" "+tipo;
        document.getElementById("micro_largo").value=L.toPrecision(4) +" "+tipo;
        document.getElementById("micro_ancho").style.display="block";
        document.getElementById("micro_largo").style.display="block";
        document.getElementById("resultadoancho").style.display="block";
        document.getElementById("resultadolongitud").style.display="block";

        
}