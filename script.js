let displays = document.getElementById("display");


x``
 function addToDisplay(input){
     displays.value += input;
     x
 }
 function clearDisplay(){
    displays.value ="";

 }

 function calculate(){
    try{
    displays.value = eval(displays.value)
    }

    catch(error){
        displays.value ="Invalide"
    }
 }