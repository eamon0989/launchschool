/* 
LINK: 
START TIME: 
END TIME: 
INPUT(S): integer
  - 
REQUIREMENTS:
  - take an int, return the century
  - add st, nd, rd or th to the cent before returning it
  - 
TEST CASES:
  console.log(century(2000));        // "20th"
  console.log(century(2001));        // "21st"
  console.log(century(1965));        // "20th"
  console.log(century(256));         // "3rd"
  console.log(century(5));           // "1st"
  console.log(century(10103));       // "102nd"
  console.log(century(1052));        // "11th"
  console.log(century(1127));        // "12th"
  console.log(century(11201));       // "113th"
DESCRIBE THE PROBLEM:
  - given a year, figure out the century and return it as a string
  - < 101 = 1st
    < 201 = 2nd
    < 301 = 3rd
  -  901 > < 1001 = 10th
      1000 = 10th
    < 1001 = 11th
    < 1101 = 12th
    < 1201 = 13th
      2000 = 20th
    < 2001 = 21th
    < 2101 = 22th
    < 2201 = 23th
    DATA STRUCTURE:
  - 
ALGORITHM (break into problems + guard clauses):
  - 


// CODE:


// **TEST CASES:**
// HAPPY PATHS:

// EDGE CASES:

// FAILURES/BAD INPUTS:

*/

function century(year) {
  let currentCent = 1;
  if (year < 100) return `1st`;
  for (let range = 100; range < year; range += 100) {
    currentCent += 1;
  }

  return appendEnding(currentCent);
}

function appendEnding(century) {
  century = String(century);
  let last = century[century.length - 1];
  if (last === '1' || last === '2' || last === '3') {
    if (century?.[century.length - 2] === '1') {
      return `${century}th`
    } else if (last === '1') {
      return `${century}st`
    } else if (last === '2') {
      return `${century}nd`
    } else if (last === '3') {
      return `${century}rd`
    }
  } else {
    return `${century}th`
  }
}

/* 
1st
2nd
3rd
4th.....

11th
12th
13th
14th.....

21st
22nd
23rd
24th.....




*/

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"