const temp1 = document.getElementById("tempvalue1");
const temp2 = document.getElementById("tempvalue2");
const tempunit1 = document.getElementById("tempunit1");
const tempunit2 = document.getElementById("tempunit2");



/* add event listener 
temp1.addEventListener("keyup",tempresult);
temp2.addEventListener("keyup", tempresult);
tempunit1.addEventListener("keyup", tempresult);
tempunit2.addEventListener("keyup", tempresult);*/

//function


function tempresult() {
    let temp = 0;
    let t1 =  parseInt(temp1.value);
    
    if(tempunit1.value === "Celsius" &&  tempunit2.value === "Celsius" ) {
    temp2.value = temp + t1;   
    }
    if(tempunit1.value === "Celsius" &&  tempunit2.value === "Fahrenheit" ) {
    temp2.value = ((temp + t1)*9)/5 + 32;    
    }
    
    
    if(tempunit1.value === "Celsius" &&  tempunit2.value === "Kelvin" ) {
    temp2.value = ((temp + t1)+ 275.15);    
    }
    
    
    
    //Fahrenheit

if(tempunit1.value === "Fahrenheit" &&  tempunit2.value === "Celsius" ) {
    temp2.value = ((temp + t1) - 32)/1.80;   
    }
    if(tempunit1.value === "Fahrenheit" &&  tempunit2.value === "Fahrenheit" ) {
    temp2.value = temp + t1;  
    }
    
    
    if(tempunit1.value === "Fahrenheit" &&  tempunit2.value === "Kelvin" ) {
    temp2.value = (((temp + t1)*5)/9+275.15);    
    }
    
    //Kelvin

if(tempunit1.value === "Kelvin" &&  tempunit2.value === "Celsius" ) {
    temp2.value = temp + t1 - 273.15;   
    }
    if(tempunit1.value === "Kelvin" &&  tempunit2.value === "Fahrenheit" ) {
    temp2.value = ((temp + t1 - 273.15)*9)/5 + 32;    
    }
    
    
    if(tempunit1.value === "Kelvin" &&  tempunit2.value === "Kelvin" ) {
    temp2.value = (temp + t1);    
    }

    
}
