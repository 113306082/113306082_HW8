function getNumber1() {
  return parseFloat(document.getElementById('number1').value);
}

function getNumber2() {
  return parseFloat(document.getElementById('number2').value);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Division by zero is not allowed.");
    return null;
  }
  return a / b;
}

function calculate() {
  const num1 = getNumber1();
  const num2 = getNumber2();
  const operation = document.getElementById('operation').value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  switch (operation) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
      alert("Invalid operation selected.");
      return;
  }

  if (result !== null) {
    document.getElementById('result').textContent = `Result = ${result.toFixed(2)}`;
  }
}