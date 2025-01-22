// Get display element
const display = document.getElementById('display');

// Initialize variables
let currentInput = '';
let previousInput = '';
let operator = null;

// Function to update the display
function updateDisplay(value) {
    display.value = value;
}

// Button event listeners
document.getElementById('clear').addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay('');
});

document.getElementById('divide').addEventListener('click', () => {
    if (currentInput === '') return;
    previousInput = currentInput;
    currentInput = '';
    operator = '/';
    updateDisplay(previousInput + operator);
});

document.getElementById('multiply').addEventListener('click', () => {
    if (currentInput === '') return;
    previousInput = currentInput;
    currentInput = '';
    operator = '*';
    updateDisplay(previousInput + operator);
});

document.getElementById('subtract').addEventListener('click', () => {
    if (currentInput === '') return;
    previousInput = currentInput;
    currentInput = '';
    operator = '-';
    updateDisplay(previousInput + operator);
});

document.getElementById('add').addEventListener('click', () => {
    if (currentInput === '') return;
    previousInput = currentInput;
    currentInput = '';
    operator = '+';
    updateDisplay(previousInput + operator);
});

document.getElementById('equal').addEventListener('click', () => {
    if (operator === null || currentInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay(currentInput);
});

document.getElementById('decimal').addEventListener('click', () => {
    if (currentInput.includes('.')) return;
    currentInput += '.';
    updateDisplay(currentInput);
});

document.querySelectorAll('.btn:not(.operator)').forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.innerText;
        updateDisplay(currentInput);
    });
});
