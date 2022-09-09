let previousOperand = document.getElementById('equation');
let currentOperand = document.getElementById('answer');
let operation = null;
let isCalculated = false;

const allNumberButtons = document.querySelectorAll('[data-number]');
const allOperationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');

const display = document.querySelector('.screen');

//CLICK EVENTS

//number buttons
allNumberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    appendNumber(button.innerText);
  });
});

//operation buttons
allOperationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    chooseOperation(button.innerText);
  });
});

//all clear button
allClearButton.addEventListener('click', () => {
  clearAll();
});

//delete button
deleteButton.addEventListener('click', () => {
  remove();
});

//equals button
equalsButton.addEventListener('click', () => {
  calculate(operation);
});

//FUNCTIONS

function appendNumber(number) {
  if (number.toString() === '.' && currentOperand.innerText.includes('.'))
    return;
  if (operation === undefined && isCalculated) {
    currentOperand.innerText = '';
  }
  isCalculated = false;
  currentOperand.innerText += number.toString();
}

function clearAll() {
  previousOperand.innerText = '';
  currentOperand.innerText = '';
  operation = undefined;
  isCalculated = false;
  display.classList.remove('error');
}

function remove() {
  if (isCalculated) return;
  currentOperand.innerText = currentOperand.innerText.toString().slice(0, -1);
}

function chooseOperation(chosenOperation) {
  if (currentOperand.innerText === '') return;
  if (previousOperand.innerText != '') {
    calculate(chosenOperation);
  }

  operation = chosenOperation;
  previousOperand.innerText =
    currentOperand.innerText + chosenOperation.toString();
  currentOperand.innerText = '';
}

function calculate(chosenOperation) {
  let calculation = 0;

  let currentOperation = chosenOperation;

  const previous = parseFloat(previousOperand.innerText.toString());
  const current = parseFloat(currentOperand.innerText.toString());

  if (isNaN(previous) || isNaN(current)) return;

  switch (currentOperation) {
    case '+':
      calculation = previous + current;
      break;
    case '-':
      calculation = previous - current;
      break;
    case 'X':
      calculation = previous * current;
      break;
    case '/':
      calculation = current === 0 ? 'ERROR' : previous / current;
      break;

    default:
      return;
  }
  if (calculation === 'ERROR') {
    display.classList.add('error');
  }
  currentOperand.innerText = calculation;
  operation = undefined;
  isCalculated = true;
  previousOperand.innerText = '';
}

clearAll();
