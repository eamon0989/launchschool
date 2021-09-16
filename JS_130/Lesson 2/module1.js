let { add, printStuff } = require('./module2');
console.log(exports);
console.log(add(1, 2));
printStuff();
console.log(__dirname);
console.log(__filename);

console.log(Object.getPrototypeOf(module));
/*
{
  load: [Function (anonymous)],
  require: [Function (anonymous)],
  _compile: [Function (anonymous)]
}
*/
let proto = Object.getPrototypeOf(module);

console.log(Object.getPrototypeOf(proto));