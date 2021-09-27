let cursorInterval;
let focusedTextField;

document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');

  textField.addEventListener('click', event => {
    event.stopPropagation();

    focusedTextField = textField;
    textField.classList.add('focused');

    cursorInterval = cursorInterval || setInterval(() => textField.classList.toggle('cursor'), 500);
  });
});

document.addEventListener('keydown', event => {
  if (focusedTextField) {
    let contentDiv = focusedTextField.querySelector('.content');
    if (event.key === 'Backspace') {
      contentDiv.textContent = contentDiv.textContent.slice(0, contentDiv.textContent.length - 1);
    } else if (event.key.length === 1) {
      contentDiv.textContent = contentDiv.textContent + event.key;
    }
  }
});

document.addEventListener('click', event => {
  clearInterval(cursorInterval);
  cursorInterval = null;
  if (focusedTextField) {
    focusedTextField.classList.remove('focused');
    focusedTextField.classList.remove('cursor');
    focusedTextField = null;
  }
});