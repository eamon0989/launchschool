const readline = require('readline-sync');

const SUITS = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack',
  'Queen', 'King', 'Ace'];
const YES_NO_ANSWERS = ['yes', 'y', 'no', 'n'];
const MAX_VALUE = 21;
const DEALER_HITS_UNTIL = MAX_VALUE - 4;
let gameScore = {
  player: 0,
  dealer: 0,
};
let gameCount = 0;


function prompt(message) {
  console.log(`=> ${message}`);
}

function start21() {
  let playerHand = [];
  let dealerHand = [];
  let deck = initializeDeck();
  dealCards(deck, playerHand, dealerHand);
  let playerTotal = total(playerHand);
  let dealerTotal = total(dealerHand);

  displayPlayerCards(playerHand, playerTotal);
  displayDealersCard(dealerHand, playerTotal);

  playerTotal = hitOrStay(playerHand, deck);
  if (!busted(playerTotal)) {
    dealerTotal = dealerTurn(dealerHand, deck, playerHand, playerTotal);
  }

  let winner = checkRoundWinner(playerTotal, dealerTotal);
  updateScore(winner);
  displayRoundWinner(winner, playerTotal, dealerTotal);
}

function initializeDeck() {
  let deck = [];
  SUITS.forEach(suit => {
    VALUES.forEach(card => deck.push([suit, card]));
  });
  return shuffle(deck);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
}

function dealCards(deck, playerHand, dealerHand) {
  playerHand.push(drawRandomCard(deck), drawRandomCard(deck));
  dealerHand.push(drawRandomCard(deck), drawRandomCard(deck));
}

function drawRandomCard(deck) {
  let cardIndex = Math.floor(Math.random() * deck.length);
  return deck.splice(cardIndex, 1)[0];
}

function displayPlayerCards(playerHand, playerTotal, drawnCard) {
  console.clear();
  if (drawnCard) {
    prompt(`You drew ${joinOr(drawnCard)}`);
  }
  prompt(`Your cards are the ${joinOr(playerHand)}`);
  if (!busted(playerTotal)) {
    prompt(`Your cards are worth ${playerTotal}`);
  }
}

function displayDealersCard(dealerHand) {
  prompt(`The dealers upturned card is the ${joinOr(dealerHand[0])}`);
}

function joinOr(array, char = ', ', string = 'and the' ) {
  let returnString = '';

  if (!Array.isArray(array[0])) {
    return `${array[1]} of ${array[0]}`;
  }

  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) {
      returnString += `${array[index][1]} of ${array[index][0]}`;
    } else if (index === array.length - 1) {
      returnString += ` ${string} ${array[index][1]} of ${array[index][0]}`;
    } else {
      returnString += `${char}${array[index][1]} of ${array[index][0]}`;
    }
  }
  return returnString;
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "Ace") {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "Ace").forEach(_ => {
    if (sum > MAX_VALUE) sum -= 10;
  });

  return sum;
}

function hitOrStay(playerHand, deck) {
  while (true) {
    let answer = verifyUserHitOrStayInput();
    if (answer === 'stay' || answer === 's' ||
      busted(playerHand)) break;

    let drawnCard = drawRandomCard(deck);
    playerHand.push(drawnCard);
    let playerTotal = total(playerHand);

    displayPlayerCards(playerHand, playerTotal, drawnCard);

    if (busted(total(playerHand))) {
      return total(playerHand);
    }
  }

  return total(playerHand);
}

function verifyUserHitOrStayInput() {
  let answer;
  let answers = ['hit', 'h', 'stay', 's'];
  while (!answers.includes(answer)) {
    prompt("Type (h)it or (s)tay?");
    answer = readline.question().toLowerCase();
  }

  return answer;
}

function dealerTurn(dealerHand, deck, playerHand, playerTotal) {
  displayPlayerCards(playerHand, playerTotal);
  prompt("You chose to stay!");
  prompt(`Dealers turn`);
  prompt(`The dealers cards are the ${joinOr(dealerHand)}`);

  while (total(dealerHand) < DEALER_HITS_UNTIL) {
    let card = drawRandomCard(deck);
    dealerHand.push(card);
    prompt(`The dealer drew the ${joinOr(card)}`);
  }

  if (busted(total(dealerHand))) {
    prompt(`The dealers cards are worth ${total(dealerHand)}.`);
  } else {
    prompt(`The dealer chose to stay!`);
  }
  return total(dealerHand);
}


function checkRoundWinner(playerTotal, dealerTotal) {
  if (busted(dealerTotal)) {

    return 'player';
  } else if (busted(playerTotal)) {
    return 'dealer';
  }
  if (playerTotal > dealerTotal) {
    return 'player';
  }

  return 'dealer';
}

function updateScore(winner) {
  if (winner === 'player') {
    gameScore.player += 1;
  } else {
    gameScore.dealer += 1;
  }
}

function displayRoundWinner(winner, playerTotal, dealerTotal) {

  if (busted(dealerTotal)) {
    prompt(`The dealer has gone bust!`);
    prompt(`Score: Player: ${gameScore.player} Dealer: ${gameScore.dealer}`);
    return false;
  } else if (busted(playerTotal)) {
    prompt(`Your cards are worth ${playerTotal}, you have gone bust!`);
    prompt(`Score: Player: ${gameScore.player} Dealer: ${gameScore.dealer}`);
    return false;
  }

  prompt(`Your cards are worth ${playerTotal
  } and the dealers are worth ${dealerTotal}`);

  if (winner === 'player') {
    prompt(`You win!`);
    prompt(`Score: Player: ${gameScore.player} Dealer: ${gameScore.dealer}`);
  } else if (winner === 'dealer') {
    prompt(`The dealer wins!`);
    prompt(`Score: Player: ${gameScore.player} Dealer: ${gameScore.dealer}`);
  }

}

function busted(total) {
  return total > MAX_VALUE;
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
      resetScores();
      callGame();
    } else if (answer === 'n' || answer === 'no') {
      prompt('Thanks for playing 21!');
      return false;
    }
  }
}

function isReadyForNextRound() {
  while (true) {
    prompt('Are you ready for the next round? (y/n)');
    let answer = readline.question().toLowerCase();
    while (!YES_NO_ANSWERS.includes(answer.toLowerCase())) {
      prompt(`Please type either 'y' or 'n'...`);
      answer = readline.question().toLowerCase();
    }
    if (answer === 'y' || answer === 'yes') {
      return true;
    } else if (answer === 'n' || answer === 'no') {
      return false;
    }
  }
}

function checkIfGameHasBeenWon() {
  if (gameScore.player === 5) {
    return 'player';
  } else if (gameScore.dealer === 5) {
    return 'dealer';
  }

  return false;
}

function displayGameWinner(gameWinner) {
  if (gameWinner === 'player') {
    prompt(`You won the game, congratulations!!!`);
  } else if (gameWinner === 'dealer') {
    prompt(`Sorry, the dealer wins. Maybe next time...`);
  }
}

function resetScores() {
  gameScore.player = 0;
  gameScore.dealer = 0;
  gameCount += 1;
}


function callGame() {
  if (gameCount === 0) {
    isReadyToStart();
  }

  while (true) {
    start21();
    let gameWinner = checkIfGameHasBeenWon();
    if (gameWinner) {
      displayGameWinner(gameWinner);
      break;
    } else {
      let nextRound = isReadyForNextRound();
      if (nextRound === false) {
        break;
      }
    }
  }
}

function isReadyToStart() {
  console.clear();
  let answer;
  while (!['y', 'yes'].includes(answer)) {
    prompt("First to win 5 games wins. Don't go over 21! Ready? Press 'y' to start");
    answer = readline.question().toLowerCase();
  }

  return answer;
}

callGame();
askToPlayAgain();