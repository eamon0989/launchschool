function isPalindromicNumber(num) {
  let string = String(num);
  if (string.split('').reverse().join('') === string) {
    return console.log(true);
  }

  return console.log(false);
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(002200);           // true
isPalindromicNumber(5);            // true