let readline = require('readline-sync');
const WINNING_SCORE = 5;

/* I originally implimented validMove with classes but I wanted to use the
objects own property names dynamically for the different strings throughout
the program, that way if we change the moves, the strings are automatically
updated. It finds the shorthand versions using the objects prototype.
*/

let validMoves = {
  rock: { move: 'rock', beats: ['lizard', 'scissors'] },
  paper: { move: 'paper', beats: ['rock', 'spock'] },
  scissors: { move:'scissors', beats: ['paper', 'lizard'] },
  spock: { move: 'spock', beats: ['scissors', 'rock'] },
  lizard: { move: 'lizard', beats: ['paper', 'spock'] },
};

let shortMoveNames = {
  r: validMoves.rock,
  p: validMoves.paper,
  l: validMoves.lizard,
  sc: validMoves.scissors,
  sp: validMoves.spock,
};

Object.setPrototypeOf(validMoves, shortMoveNames);

class CreatePlayer {
  constructor() {
    this.move = null;
  }
}

class CreateComputer extends CreatePlayer {
  constructor() {
    super();
  }

  choose = function() {
    const choices = Object.keys(validMoves);
    let randomIndex = Math.floor(Math.random() * choices.length);
    this.move = choices[randomIndex];
  }
}

class CreateHuman extends CreatePlayer {
  constructor() {
    super();
  }

  choose = function() {
    let choice;

    while (true) {
      let moves = Object.keys(validMoves);
      let chooseOptions = `Please choose ${moves.slice(0, -1)
        .join(', ')} or ${moves.slice(-1)}.`;

      console.log(chooseOptions);
      choice = readline.question();

      if (validMoves[choice]) break;
      if (choice === 'history') break;

      console.log('Sorry, invalid choice.');
    }

    this.move = choice;
  }
}

class RPSGame {
  constructor() {
    this.human = new CreateHuman();
    this.computer = new CreateComputer();
    this.score = {
      humanScore: 0,
      computerScore: 0,
    };
    this.moveHistory = [];

    this.resetScores = function() {
      this.score.humanScore = 0;
      this.score.computerScore = 0;
    };

    this.updateHumanScore = function() {
      this.score.humanScore += 1;
    };

    this.updateComputerScore = function() {
      this.score.computerScore += 1;
    };
  }

  printHistory() {
    console.clear();
    this.moveHistory.forEach((round, index) => {
      let padding = ' ';
      if (round[0].length < 8) {
        padding = ' '.repeat(9 - round[0].length);
      }
      console.log(`Round ${index + 1}: Computer move: ${round[0]},${padding}Human move: ${round[1]}`);
    });
  }

  displayWelcomeMessage = function() {
    console.clear();
    console.log(`Welcome to ${Object.keys(validMoves).join(', ')}!`);
    console.log(`Type history at any time (after round 1) to see your move history!`);
  }

  displayGoodbyeMessage = function() {
    console.log(`Thanks for playing ${Object.keys(validMoves)
      .join(', ')}. Goodbye!`);
  }

  checkRoundWinner() {
    let humanMove = validMoves[this.human.move].move;
    let computerMove = this.computer.move;

    if (validMoves[humanMove].beats.includes(computerMove)) {
      return 'human';
    } else if (validMoves[computerMove].beats.includes(humanMove)) {
      return 'computer';
    } else {
      return 'tie';
    }
  }

  updateScore(roundWinner) {
    if (roundWinner === 'human') {
      this.updateComputerScore();
    } else if (roundWinner === 'computer') {
      this.updateHumanScore();
    }
  }

  displayRoundWinner = function(winner) {
    console.clear();
    console.log(`You chose: ${validMoves[this.human.move].move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if (winner === 'human') {
      console.log('You win this round!');
    } else if (winner === 'computer') {
      console.log('Computer wins this round!');
    } else if (winner === 'tie') {
      console.log("It's a tie");
    }

    console.log(`Your score: ${this.score.humanScore}, Computer score: ${this
      .score.computerScore}`);

  }

  isThereAWinner() {
    for (let prop in this.score) {
      if (this.score[prop] === WINNING_SCORE) {
        return prop;
      }
    }

    return null;
  }

  displayWinner(winner) {
    if (winner === 'humanScore') {
      console.log('You win the game!');
    } else if (winner === 'computerScore') {
      console.log('Computer wins the game!');
    }
  }

  playAgain = function() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  }

  play = function() {
    this.displayWelcomeMessage();
    while (true) {
      this.gameMechanics();

      let gameWinner = this.isThereAWinner();
      if (gameWinner) {
        this.displayWinner(gameWinner);
        if (!this.playAgain()) break;
        this.resetScores();
      }
    }

    this.displayGoodbyeMessage();
  }

  gameMechanics() {
    this.human.choose();
    this.computer.choose();
    this.addToMoveHistory();

    if (this.human.move === 'history') {
      this.printHistory();
    } else {
      let roundWinner = this.checkRoundWinner();
      this.updateScore(roundWinner);
      this.displayRoundWinner(roundWinner);
    }
  }

  addToMoveHistory() {
    this.moveHistory.push([this.computer.move,
      validMoves[this.human.move].move]);
  }
}

let game = new RPSGame();
game.play();


/* class ValidMovesConstructor {
  constructor() {
    this.rock =  { beats: ['lizard', 'scissors', 'l', 'sc'] };
    this.paper = { beats: ['rock', 'spock', 'r', 'sp'] };
    this.scissors = { beats: ['paper', 'lizard', 'l', 'p'] };
    this.spock = { beats: ['scissors', 'rock', 'sc', 'r'] };
    this.lizard = { beats: ['paper', 'spock', 'p', 'sp'] };
  }
}

let validMoves = new ValidMovesConstructor();

let shortMoveNames = {
  r: validMoves.rock,
  p: validMoves.paper,
  l: validMoves.lizard,
  sc: validMoves.scissors,
  sp: validMoves.spock,
};

ValidMovesConstructor.prototype = Object.assign(shortMoveNames); */