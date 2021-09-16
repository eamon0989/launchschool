/* Find the sum of the digits of all the numbers from 1 to N (both ends
  included).

Examples
# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

Input: number

Output: number

Rules:
add all the digits of all the numbers from 1 to num

Algorithm:
  - create a helper function called sum of digits
    - take a number, coerce it to a string, extract it's digits
        add them together and return the number
  - create a base case of num equals 0
  - recursively call function counting num down 1 each time until it hits
      the base case

*/

function twistedSum(num, sum = 0) {
  if (num <= 0) return sum;

  while (num > 0) {
    sum += sumOfDigits(num);
    num -= 1;
  }

  return sum;
}

function sumOfDigits(num) {
  let digits = String(num).split('').map(Number);
  return digits.reduce((acc, digit) => acc + digit);
}

console.log(twistedSum(3));//, 6, "n = 3"); });
console.log(twistedSum(10));//, 46, "n = 10"); });
console.log(twistedSum(11));//, 48, "n = 11"); });
console.log(twistedSum(12));//, 51, "n = 12"); });