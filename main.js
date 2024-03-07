const operations = document.querySelector('.operations');
const text = document.querySelector('.text');

let firstNum = "";
let secondNum = "";
let operator = "";

operations.addEventListener('click', (e) => {
    const buttonValue = e.target.innerText;

    if (buttonValue >= "0" && buttonValue <= "9") {
        if (!operator) {
            firstNum += buttonValue;
            text.innerText = firstNum;
        } else {
            secondNum += buttonValue;
            text.innerText = secondNum;
        }
    } else if (buttonValue === "=") {
        if (firstNum && secondNum && operator) {
            const result = operate(firstNum, secondNum, operator);
            text.textContent = result;
            firstNum = result;
            secondNum = '';
            operator = '';
        }
    }  else if(buttonValue === "C"){
        firstNum = '';
        secondNum = '';
        operator = '';
        text.innerText  = '0'
    }
    else {
        if (!operator && firstNum) {
            operator = buttonValue;
            text.textContent = operator;
        }
    }
});

function operate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error';
        default: return 'Error';
    }
}
