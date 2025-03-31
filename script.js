
let currentNumber = '';
let num1 = null;
let num2 = null;
let operation = null;

function addNumber(num) {
    currentNumber += num;
    updateDisplay()
}

function setOperation(op) {
    if (currentNumber === '') return;
    firstNumber = parseFloat(currentNumber);
    operation = op;
    currentNumber = '';
    updateDisplay();
}

function calculate() {
    if (currentNumber === '') return
    num1 = parseFloat(currentNumber)
    num2 = parseFloat(currentNumber);
    let result = ''

    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '/':
            if (num2 === 0) {
                alert('divisão por zero não permitida!')
            return
            }
            result = num1 / num2; break;
        
    }

    currentNumber = result.toString()
    num1 = null
    num2 = null
    updateDisplay()
}

function clearDisplay() {
    currentNumber = '';
    num1 = null;
    operation = null;
    updateDisplay();
}
function updateDisplay() {
    document.getElementById('display').value = currentNumber;
    console.log()
}

