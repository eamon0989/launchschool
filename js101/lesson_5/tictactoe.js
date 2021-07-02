const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_SCORE = 5;
const YES_NO_ANSWERS = ['yes', 'y', 'no', 'n'];
const WHO_STARTS = ['player', 'computer', 'p', 'c'];
const CURRENT_PLAYER = [];
const WINNING_LINES = [
  ['a1', 'b1', 'c1'], ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3'], // rows
  ['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3'], // columns
  ['a1', 'b2', 'c3'], ['a3', 'b2', 'c1']             // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}
  `);
  // line 24, 26, 27 and 40 is the only way to get enough lines without
  // an eslint error, I wanted the special grid layout
  console.log(`  |  a  |  b  |  c  |
  |-----+-----+-----|`);
  console.log('  |     |     |     |');
  console.log(`1 |  ${board['a1']}  |  ${board['b1']}  |  ${board['c1']}  |`);
  console.log('  |     |     |     |');
  console.log('--+-----+-----+-----|');
  console.log('  |     |     |     |');
  console.log(`2 |  ${board['a2']}  |  ${board['b2']}  |  ${board['c2']}  |`);
  console.log('  |     |     |     |');
  console.log('--+-----+-----+-----|');
  console.log('  |     |     |     |');
  console.log(`3 |  ${board['a3']}  |  ${board['b3']}  |  ${board['c3']}  |`);
  console.log('  |     |     |     |');
  console.log(`__|_____|_____|_____|
  `);
}

function initializeBoard() {
  let board = {
    a1: INITIAL_MARKER,
    a2: INITIAL_MARKER,
    a3: INITIAL_MARKER,
    b1: INITIAL_MARKER,
    b2: INITIAL_MARKER,
    b3: INITIAL_MARKER,
    c1: INITIAL_MARKER,
    c2: INITIAL_MARKER,
    c3: INITIAL_MARKER,
  };

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim().toLowerCase();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (board.b2 === ' ') {
    let emptySquare = 'b2';
    return emptySquare;
  }

  if (markersInLine.filter(ele => ele === marker).length === 2) {
    let emptySquare = line.find(square => board[square] === INITIAL_MARKER);
    if (emptySquare !== undefined) {
      return emptySquare;
    }
  }

  return null;
}

function joinOr(array, char = ', ', string = 'or' ) {
  let returnString = '';

  if (array.length === 2) {
    return `${String(array[0])} ${string} ${String(array[1])}`;
  }

  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) {
      returnString += array[index];
    } else if (index === array.length - 1) {
      returnString += `${char}${string} ${String(array[index])}`;
    } else {
      returnString += `${char}${String(array[index])}`;
    }
  }
  return returnString;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWonRound(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
    if (checkIfPlayerWins(board, sq1, sq2, sq3)) {
      return 'Player';
    } else if (checkIfComputerWins(board, sq1, sq2, sq3)) {
      return 'Computer';
    }
  }

  if (!Object.values(board).includes(' ')) {
    return 'Draw';
  }

  return null;
}

function checkIfPlayerWins(board, sq1, sq2, sq3) {
  if (
    board[sq1] === HUMAN_MARKER &&
    board[sq2] === HUMAN_MARKER &&
    board[sq3] === HUMAN_MARKER
  ) {
    return true;
  }
  return false;
}

function checkIfComputerWins(board, sq1, sq2, sq3) {
  if (
    board[sq1] === COMPUTER_MARKER &&
    board[sq2] === COMPUTER_MARKER &&
    board[sq3] === COMPUTER_MARKER
  ) {
    return true;
  }
  return false;
}

function ticTacToe() {
  let score = {
    Player: 0,
    Computer: 0,
    roundCount: 1,
  };
  askWhoStarts();
  gameMechanics(score);
}

function askWhoStarts() {
  console.clear();
  prompt(`Who starts, you or the computer? type 'player' or 'computer'`);
  let starter = readline.question().toLowerCase();
  while (!WHO_STARTS.includes(starter)) {
    starter = readline.question().toLowerCase();
  }
  if (starter === 'p') {
    starter = 'player';
  } else if (starter === 'c') {
    starter = 'computer';
  }
  WHO_STARTS[4] = starter;
  CURRENT_PLAYER[0] = starter;
}

function gameMechanics(score) {
  while (true) {
    let board = initializeBoard();

    playerAndComputerMoves(board);
    displayBoard(board);
    updateScore(score, board);
    displayScore(score);

    let winner = checkIfGameIsOver(score);
    if (winner) {
      declareOverallGameWinner(winner);
      return false;
    }
    let roundWinner = someoneWonRound(board);
    if (roundWinner) {
      displayRoundWinner(roundWinner);
    }

    if (!askForNextRound(score.roundCount)) return false;
  }
}

function playerAndComputerMoves(board) {
  while (true) {
    displayBoard(board);

    chooseSquare(board);
    alternatePlayer();

    if (someoneWonRound(board) || boardFull(board)) break;
  }
}

function chooseSquare(board) {
  if (CURRENT_PLAYER[0] === 'player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer() {
  if (CURRENT_PLAYER[0] === 'player') {
    CURRENT_PLAYER[0] = 'computer';
  } else if (CURRENT_PLAYER[0] === 'computer') {
    CURRENT_PLAYER[0] = 'player';
  }
}

function checkIfGameIsOver(score) {
  if (score.Player === WINNING_SCORE || score.Computer === WINNING_SCORE) {
    let winner = determineOverallWinner(score);
    return winner;
  }
  return false;
}

function determineOverallWinner(score) {
  if (score.Player === WINNING_SCORE) {
    return 'Player';
  }
  return 'Computer';
}

function updateScore(score, board) {
  score[`${detectWinner(board)}`] += 1;
  score.roundCount += 1;
}

function displayScore(score) {
  let currentOrFinal = (checkIfGameIsOver(score)) ? 'final' : 'current';
  prompt(`The ${currentOrFinal} score is Player: ${score.
    Player}, Computer: ${score.Computer}`);
}

function displayRoundWinner(roundWinner) {
  return roundWinner === 'Draw' ? prompt(`It's a tie!`) :
    prompt(`${roundWinner} won that round!`);
}

function declareOverallGameWinner(winner) {
  if (winner === 'Player') {
    prompt('Congrats, you have triumphed over the machine!');
  } else if (winner === 'Computer') {
    prompt(`There are no words... You have lost...`);
  }
}

function askForNextRound(round) {
  prompt(`Are you ready for round ${round}? (y/n)`);
  let answer = readline.question().toLowerCase();
  while (!YES_NO_ANSWERS.includes(answer.toLowerCase())) {
    prompt(`Please type either 'y' or 'n'...`);
    answer = readline.question().toLowerCase();
  }
  if (answer === 'y' || answer === 'yes') {
    CURRENT_PLAYER[0] = WHO_STARTS[4];
    debugger;
    return true;
  } else if (answer === 'n' || answer === 'no') {
    return false;
  }
  return false;
}

function askToPlayAgain() {
  while (true) {
    prompt('Would you like to play again? (y/n)');
    let answer = readline.question().toLowerCase();
    while (!YES_NO_ANSWERS.includes(answer.toLowerCase())) {
      prompt(`Please type either 'y' or 'n'...`);
      answer = readline.question().toLowerCase();
    }
    if (answer === 'y' || answer === 'yes') {
      ticTacToe();
    } else if (answer === 'n' || answer === 'no') {
      prompt('Thanks for playing Tic Tac Toe!');
      return false;
    }
  }
}

ticTacToe();
askToPlayAgain();