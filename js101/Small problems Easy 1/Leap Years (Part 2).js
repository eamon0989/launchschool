// input = a number greater than 0
// output = true if year % 4 && !year % 100 = 0, false otherwise
// true is year % 400 === 0

// leap year 2 - if before 1752, any year evenly divisible by 4 is a leap year
// after 1752 use code from leap year 1

function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
      return true;
  }
  
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true