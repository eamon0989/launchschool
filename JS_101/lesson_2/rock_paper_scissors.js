const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_SCORE = 3;
const GAME_SCORE = {
  user: 0,
  computer: 0
};
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};
const SHORT_ANSWERS = {
  r:  'rock',
  p:  'paper',
  sc: 'scissors',
  l:  'lizard',
  sp: 'spock',
};
const YES = ['yes', 'y'];
const NO = ['no', 'n'];
let printCounter = 1;

function prompt(message) {
  console.log(`=> ${message}`);
}

function startGame() {
  console.clear();
  prompt(`The machine uprising has begun...`);
  prompt(`You are humanity's last hope...`);
  prompt(`You have one chance to beat the machine to 3...`);
  prompt(`Choose wisely my friend...`);
  gameFunctions();
}

function gameFunctions() {
  let winnersName;
  while (isTheGameOver() !== true) {
    let choice = getUserChoice();
    let computerChoice = getComputersChoice();
    console.clear();
    let roundWinner = declareRoundWinner(choice, computerChoice);
    updateScore(roundWinner);

    if (checkIfThereIsAWinner()) {
      winnersName = checkIfThereIsAWinner();
      declareGameWinner(winnersName);
    }
  }
  askToPlayAgain(winnersName);
}

function getUserChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  choice = validateUserChoice(choice);
  return choice;
}

function validateUserChoice(choice) {
  if (checkForS(choice)) {
    prompt('Type "sc" for scissors or "sp" for spock');
    choice = readline.question();
  }

  choice = shortAnswerToLong(choice);

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
    choice = shortAnswerToLong(choice);
  }
  return choice;
}

function shortAnswerToLong(choice) {
  if (SHORT_ANSWERS[choice]) {
    choice = SHORT_ANSWERS[choice];
  }
  return choice;
}

function checkForS(choice) {
  if (choice === 's') {
    return true;
  }
  return false;
}

function getComputersChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
}

function declareRoundWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (checkIfUserWinsRound(choice, computerChoice)) {
    if (GAME_SCORE.user < WINNING_SCORE) {
      prompt('You win this round!');
    }
    return 'user';
  } else if (checkIfComputerWinsRound(choice, computerChoice)) {
    if (GAME_SCORE.computer < WINNING_SCORE) {
      prompt('Computer wins this round!');
    }
    return 'computer';
  } else {
    prompt("It's a tie!");
    checkIfItsATie();
    return 'tie';
  }
}

function checkIfItsATie() {
  if (GAME_SCORE.user === WINNING_SCORE - 1 &&
    GAME_SCORE.computer === WINNING_SCORE - 1) {
    prompt(`That was a close one, I'm sweating!`);
  }
}

function checkIfUserWinsRound(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function checkIfComputerWinsRound(choice, computerChoice) {
  return WINNING_COMBOS[computerChoice].includes(choice);
}

function updateScore(roundWinner) {
  if (roundWinner === 'user') {
    GAME_SCORE.user += 1;
  } else if (roundWinner === 'computer') {
    GAME_SCORE.computer += 1;
  }
  printScore();
}

function printScore() {
  let humanScore = GAME_SCORE.user;
  let computerScore = GAME_SCORE.computer;
  if (humanScore === WINNING_SCORE - 1 &&
    computerScore < humanScore && printCounter > 0) {
    prompt(`You've almost got this!`);
    printCounter -= 1;
  } else if (computerScore === WINNING_SCORE - 1 &&
    computerScore > humanScore &&
      printCounter > 0) {
    prompt(`Oh no, be careful or humanity is dooooomed!`);
    printCounter -= 1;
  }
  prompt(`Human: ${humanScore}, Machine: ${computerScore}`);
}

function checkIfThereIsAWinner() {
  if (GAME_SCORE.user === WINNING_SCORE) {
    return 'user';
  } else if (GAME_SCORE.computer === WINNING_SCORE) {
    return 'computer';
  }
  return false;
}

function declareGameWinner(winnersName) {
  if (winnersName === 'user') {
    prompt('You win! Humanity lives to fight another day!');
  } else if (winnersName === 'computer') {
    prompt('Computer wins, the machine uprising has begun!');
  }
}

function isTheGameOver() {
  if (GAME_SCORE.user === WINNING_SCORE ||
    GAME_SCORE.computer === WINNING_SCORE) {
    return true;
  }
  return false;
}

function askToPlayAgain(winnersName) {
  let answer;
  if (winnersName === 'user') {
    prompt('Would you like to play again? The machines are on the run (y/n)');
    answer = readline.question();
  } else {
    prompt(`The machines look at you mockingly...`);
    prompt(`They seem to be daring you to play again... (y/n)`);
    answer = readline.question();
  }
  while (!YES.includes(answer) && !NO.includes(answer)) {
    prompt(`Sorry, I don't understand you. Type 'y' or 'n'.`);
    answer = readline.question();
  }
  verifyYesOrNo(answer, winnersName);
}

function verifyYesOrNo(answer, winnersName) {
  if (YES.includes(answer)) {
    resetGame();
  } else if (NO.includes(answer)) {
    if (winnersName !== 'user') {
      prompt(`I would have given up too...`);
    }
    return false;
  }
  return false;
}

function resetGame() {
  GAME_SCORE.user = 0;
  GAME_SCORE.computer = 0;
  printCounter = 0;
  console.clear();
  gameFunctions();
}

startGame();