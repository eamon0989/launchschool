let bar = { a: 'prototype'};
let foo = Object.create(bar);
foo.b = 'child';

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});