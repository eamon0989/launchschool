let add = (num1, num2) => num1 + num2;
function printStuff() {
  console.log(`Stuff`);
}

// module.exports = { add, printStuff };
module.exports.printStuff = printStuff;
module.exports.add = add;
// console.log(add);
console.log(module.exports);