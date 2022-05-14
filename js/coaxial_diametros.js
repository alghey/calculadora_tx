document.getElementById("dimensiones_calculo").onclick=function(){
    calcular_dimensiones();
    }


function calcular_dimensiones(){
        var dielectrico= valor_dielectricos();
        var impedancia=document.getElementById("impedancia_input").value;
        var frecuencia=document.getElementById("frecuencia_input").value;
        var permitividad1=document.getElementById("dielectrico_in").value;
        var permitividad2=document.getElementById("diele").value;
        var decimales= /^(\d+)?([.]?\d{1,10})?$/;



        if(impedancia.length == 0 || /^\s+$/.test(impedancia) ||frecuencia.length == 0 || /^\s+$/.test(frecuencia) ){
            alert("No puede haber campos vacios");
            return false;

        }
        if(impedancia==0||frecuencia==0){
            alert("Introduzca valores distintos de 0");
            return false;
        }


        if(!decimales.test(impedancia)||!decimales.test(frecuencia)){
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



        var logaritmo =(impedancia*Math.sqrt(dielectrico))/138.06;
        var a = 10**logaritmo;
        var b = (2*11.8)/(Math.PI*Math.sqrt(dielectrico)*frecuencia);
        var diametro_interior=b/(a+1);
        var diametro_exterior=b-diametro_interior;
        var diamecm= diametro_exterior/0.39370;
        var diamicm =diametro_interior/0.39370

        if(diametro_exterior<=0||diametro_interior<=0){
            alert("Revise los datos introducidos, reultados con valor menor o igual a 0");
            return false;
        }



        document.getElementById("coax_diame").value=diametro_exterior.toPrecision(4) + " in" +" = "+diamecm.toPrecision(4)+ " cm";
        document.getElementById("coax_diami").value=diametro_interior.toPrecision(4) + " in" +" = "+diamicm.toPrecision(4)+ " cm";


}
