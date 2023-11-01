const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber p');

const mathSign = document.querySelector('.mathSign');

const numberButtons = document.querySelectorAll('.number');

const operatorsButtons = document.querySelectorAll('.operator');

const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');

const calculatorHistory = document.querySelector('.calculatory-history');

const historyBtn = document.querySelector('.history-btn');


let result = '';




function displayNumbers() {

}

function operate() {

}

function showResult() {

}

function clearScreen() {

}

function clearHistory() {

}









// Event listener buttons

operatorsButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResult);

clearButton.addEventListener('click', clearScreen);

numberButtons.forEach((button) => button.addEventListener('click', displayNumbers));

historyBtn.addEventListener('click', clearHistory);