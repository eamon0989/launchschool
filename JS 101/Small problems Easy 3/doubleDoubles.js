/* - define a function called twice
- take the input and convert it to a string
- if there is only one digit double it and return it
- if there are more than 2 digits and there are an odd number of digits,
    double the number and return it
- if there are an even amount of digits, split the string in half and check if
    the left side and right side strings are identical
- if they are identical, return the original number
- otherwise double the original number and return it */

function twice(num) {
  num = String(num);

  if (num.length < 2) {
    return num * 2;
  } else if (num.length % 2 !== 0) {

    return num * 2;
  }
  let [left, right] = [num.slice(0, num.length / 2), num.slice(num.length / 2)];

  if (left === right) {
    return Number(num);
  } else {
    return num * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676