/* - divide input num by 100 and round up the the nearest whole number
- convert the result to a string
- if the last digit is 1, 2, or 3, check if the 2nd to last digit is 1
  - if not, concat 'st', 'nd', or 'rd', otherwise concat 'th'
- return result as a string */

function century(year) {
  let cent = String(Math.ceil(year / 100));

  if (cent[cent.length - 1] === '1' && cent[cent.length - 2] !== '1') {
    return cent + 'st';
  } else if (cent[cent.length - 1] === '2' && cent[cent.length - 2] !== '1') {
    return cent + 'nd';
  } else if (cent[cent.length - 1] === '3' && cent[cent.length - 2] !== '1') {
    return cent + 'rd';
  } else {
    return cent + 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th