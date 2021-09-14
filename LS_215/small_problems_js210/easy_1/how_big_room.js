let rlsync = require("readline-sync");
console.log('Enter the length of the room in meters:');
let length = rlsync.prompt();
console.log('Enter the width of the room in meters:');
let width = rlsync.prompt();

console.log(`The area of the room is ${length * width} square meters (${(length * width) * 10.7639} square feet).`);