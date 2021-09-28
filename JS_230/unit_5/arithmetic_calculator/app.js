document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let value1 = document.querySelector('input[name="first-number"]').value;
    let value2 = document.querySelector('input[name="second-number"]').value;
    let operator = document.querySelector('select[name="operator"]').value;

    let result = document.getElementById('result');
    result.textContent = calculate(Number(value1), operator, Number(value2));    
  })
})

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}