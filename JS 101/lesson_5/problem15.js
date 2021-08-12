let arr = [['a', 1], ['b', 'two'],
  ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// let obj = Object.fromEntries(arr);
// console.log(obj);

let obj = {};
arr.forEach(subArr => {
  let key = subArr[0];
  let value = subArr[1];
  obj[key] = value;
  // obj[subArr[0]] = subArr[1];

});
console.log(obj);
