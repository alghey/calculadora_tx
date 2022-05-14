

document.getElementById("dimensiones_calculo").onclick=function(){
    calcular_dimensiones();
    }


function calcular_dimensiones(){





        var dielectrico= valor_dielectricos();
        var diametro=document.getElementById("conductor_input").value;
        var impedancia=document.getElementById("impedancia_input").value;
        var medida= document.getElementById("diam").value;
        var Zc=376.73;
        var D,s;



        var decimales= /^(\d+)?([.]?\d{1,10})?$/;
        var permitividad1=document.getElementById("dielectrico_in").value;
        var permitividad2=document.getElementById("diele").value;



        if(diametro.length == 0 || /^\s+$/.test(diametro) ||impedancia.length == 0 || /^\s+$/.test(impedancia) ){
            alert("No puede haber campos vacios");
            return false;

        }


        if(diametro==0||impedancia==0){
            alert("Introduzca valores distintos de 0");
            return false;
        }



        if(!decimales.test(diametro)||!decimales.test(impedancia)){
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








        if(medida==1){
        D=diametro*Math.cosh(Math.PI*(impedancia/Zc)*Math.sqrt(dielectrico));
        s=D-diametro;


        if(D<=0||s<=0){
            alert("Revise los datos introducidos, reultado con valor menor o igual a 0");
            return false;
        }


        document.getElementById("bif_distancia").value=D.toPrecision(4) + " mm";
        document.getElementById("bif_espacio").value=s.toPrecision(4) +" mm";
        document.getElementById("bif_distancia").style.display="block";
        document.getElementById("bif_espacio").style.display="block";
        document.getElementById("resultadoespacio").style.display="block";
        document.getElementById("resultadodcc").style.display="block";

        }


        else{
            D=diametro*Math.cosh(Math.PI*(impedancia/Zc)*Math.sqrt(dielectrico));
            s=D-diametro;

            if(D<=0||s<=0){
                alert("Revise los datos introducidos, reultado con valor menor o igual a 0");
                return false;
            }

            document.getElementById("bif_distancia").value=D.toPrecision(4) + " cm";
            document.getElementById("bif_espacio").value=s.toPrecision(4) +" cm";
            document.getElementById("bif_distancia").style.display="block";
            document.getElementById("bif_espacio").style.display="block";
            document.getElementById("resultadoespacio").style.display="block";
            document.getElementById("resultadodcc").style.display="block";


        }



}
