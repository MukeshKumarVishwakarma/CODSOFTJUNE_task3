let displayValue="";
function appendTodisplay(val){
    displayValue+=val;
    document.getElementById("screen").value=displayValue;
}
function clearDisplay(){
    
    displayValue="";
    document.getElementById('screen').value='';
}
function calculateResult(){
    const result=eval(displayValue);
    displayValue=result.toString();
    document.getElementById('screen').value=result
}