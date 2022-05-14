
function valor_dielectricos(){

var dielectrico=document.getElementById("diele").value;


if(dielectrico==1){
return 4.4;
}
if(dielectrico==2){
return 3.8;
}
if(dielectrico==3){
return 6.4;
}
if(dielectrico==4){
return 4;
}
if(dielectrico==5){
return 2.2;
}
if(dielectrico==6){
return 3.1;
}
if(dielectrico==7){
return 2.56;
}
if(dielectrico==8){
return 2.25;
}
if(dielectrico==9){
return 6;
}
if(dielectrico==10){
return 2.1;
}
if(dielectrico==11){
return 3;
}
if(dielectrico==12){

return Number(document.getElementById("dielectrico_in").value);
}
    


}

function cambiar_estilo(){
document.getElementById("dielectrico_in").style.display="none";
var dielectrico=document.getElementById("diele").value;    
if (dielectrico==12){
    document.getElementById("dielectrico_in").style.display="block";
}    
}