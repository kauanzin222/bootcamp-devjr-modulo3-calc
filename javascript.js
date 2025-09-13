

function calc(parameter){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = 0;
    
    switch(parameter){
        case 'soma' : result = num1 + num2; break;
        case 'sub': result = num1 - num2; break;
        case 'mult': result = num1 * num2; break;
        case 'div': result = num1 / num2; break;
    }

    document.getElementById("result").value = result;
}