function appendValue(value) {
    let display = document.getElementsByName('display')[0];
    
    if (display.value === '0' && !isOperator(value)) {
        display.value = value;
    } 
    else if (isOperator(display.value.slice(-1)) && isOperator(value)) {
    } 
    
    else {
        display.value += value;
    }
    
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function deleteLastCharacter() {
    let display = document.getElementsByName('display')[0];
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}


function resetDisplay() {
    document.getElementsByName('display')[0].value = '0';
}

function calculateResult() {
    let expression = document.getElementsByName('display')[0].value;
        let result = eval(expression);
        if (typeof result === 'number' && !isNaN(result)) {
            result = parseFloat(result.toFixed(5)); 
            document.getElementsByName('display')[0].value = result.toString();
        } 
}