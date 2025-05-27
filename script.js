let display=document.getElementById("display");

function appendNumber(number) {
    if(display.value === "0"){
        display.value=number;
    }
    else{
        display.value+=number;
    }
    
}

function appendOperator(operator){
    const lastchar=display.value.slice(-1);
    if("+-/*".includes(lastchar)){
        display.value.slice(0,-1) + operator;
    }else{
        display.value+=operator;
    }
}
function calculate(){
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value="Error";
    }
}

function clearDisplay(){
    display.value="0";
}