// let moves = {
// 	rock: ['paper'],
// }

// moves.r = moves.rock;

// console.log(moves.r); // [ 'paper' ]


let validMoves = {
  rock: { beats: ['lizard', 'scissors'] },
  paper: { beats: ['rock', 'spock'] },
  scissors: { beats: ['paper', 'lizard'] },
  spock: { beats: ['scissors', 'rock'] },
  lizard: { beats: ['paper', 'spock'] },
};

let shortMoveNames = {
  r: validMoves.rock,
  p: validMoves.paper,
  l: validMoves.lizard,
  sc: validMoves.scissors,
  sp: validMoves.spock,
};

let validNames = Object.create(shortMoveNames);
Object.assign(validNames, validMoves);
console.log(validNames);
console.log(validNames.r);
console.log((validMoves).join(', '));

if (validNames.r) console.log('YES');
// function shortMoves() {
//   return {
//     r: this.rock,
//     p: this.paper,
//     l: this.lizard,
//     sc: this.scissors,
//     sp: this.spock,
//   };
// }

Object.assign(validMoves, shortMoves.call(validMoves));
console.log(validMoves);

console.log(validMoves.r); // { beats: [ 'lizard', 'scissors' ] }