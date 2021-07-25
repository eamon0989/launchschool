const readline = require('readline-sync');

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  score: {
    humanScore: 0,
    computerScore: 0,
  },

  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  readyToStart() {
    console.log('First to 5 is the winner.');
    console.log('Are you ready to start the game? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  readyToStartNextRound() {
    console.log('Are you ready for the next round? (y)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  displayWinner(winner) {
    if (winner === 'humanScore') {
      console.log('You win the game!');
    } else if (winner === 'computerScore') {
      console.log('Computer wins the game!');
    }
  },

  checkRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      return 'human';
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      return 'computer';
    } else {
      return 'tie';
    }
  },

  displayRoundWinner(winner) {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    // if (!gameWinner) {}
    if (winner === 'human') {
      console.log('You win this round!');
    } else if (winner === 'computer') {
      console.log('Computer wins this round!');
    } else if (winner === 'tie') {
      console.log("It's a tie");
    }

    console.log(`Your score: ${this.score.humanScore}, Computer score: ${this.score.computerScore}`);
  },

  updateScore(roundWinner) {
    if (roundWinner === 'human') {
      this.score.humanScore += 1;
    } else if (roundWinner === 'computer') {
      this.score.computerScore += 1;
    }
  },

  isThereAWinner() {
    for (let prop in this.score) {
      if (this.score[prop] === 5) {
        return prop;
      }
    }

    return null;
  },

  play() {
    this.displayWelcomeMessage();
    let start = this.readyToStart();
    while (!start) {
      start = this.readyToStart();
    }

    while (true) {
      this.gameMechanics();

      let gameWinner = this.isThereAWinner();
      if (gameWinner) {
        this.displayWinner(gameWinner);
        if (!this.playAgain()) break;
      } else {
        let nextRound = this.readyToStartNextRound();
        while (!nextRound) nextRound = this.readyToStartNextRound();
      }
    }

    this.displayGoodbyeMessage();
  },

  gameMechanics() {
    console.clear();
    this.human.choose();
    this.computer.choose();
    let roundWinner = this.checkRoundWinner();
    this.updateScore(roundWinner);
    this.displayRoundWinner(roundWinner);
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },
};

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    move: null,

    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose (r)ock, (p)aper, or (s)cissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors', 'r', 'p', 's'].includes(choice)) {
          if (['r', 'p', 's'].includes(choice)) choice = shortAnswers(choice);
          break;
        }
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },


  };

  return Object.assign(playerObject, humanObject);
}


function shortAnswers(choice) {
  if (choice === 'r') {
    choice = 'rock';
  } else if (choice === 'p') {
    choice = 'paper';
  } else if (choice === 's') {
    choice = 'scissors';
  }

  return choice;
}
function createPlayer() {
  return {
    move: null,
  };
}

RPSGame.play();