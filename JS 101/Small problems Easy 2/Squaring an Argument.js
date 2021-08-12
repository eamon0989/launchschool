const multiply = (num1, num2) => num1 * num2;

// const square = (num) => multiply(num, num);

function power(num, power) {
  let num1 = num;
  while (power > 1) {
    num1 = multiply(num1, num);
    power -= 1;
  }
  return num1;
}

function power(num, exp) {
  if (exp === 1) {
    return multiply(num, 1);
  }
  return num * power(num, exp - 1);
}

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

console.log(power(5, 3));
console.log(power(5, 2));
console.log(power(10, 5));

// input num, power
// output, num * num power number of times
