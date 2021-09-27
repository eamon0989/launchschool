document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  let input = document.querySelector('#guess');
  let paragraph = document.querySelector('p');
  let guessBtn = document.querySelector('[type="submit"]');
  let link = document.querySelector('a');
  let answer;
  let guesses;
  
  function newGame() {
    guessBtn.disabled = false;
    form.reset();
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
  }
  
  form.addEventListener('submit', event => {
    event.preventDefault();

    let guess = parseInt(input.value, 10);
    let message;

    guesses += 1;
    
     if (Number.isNaN(guess)) {
       message = 'Please enter a number';
     } else {
       if (guess === answer) {
       message = `You guessed it! It took you ${guesses} guesses.`;
       guessBtn.disabled = true;
     } else if (guess > answer) {
       message = `My number is lower than ${guess}`;
     } else {
       message = `My number is higher than ${guess}`;
     }  
   }
    
   paragraph.textContent = message;
  });

  link.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  });
  
  newGame();
});