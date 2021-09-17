/* 
Input: int (a year) greater than 1752
Output: an int, detailing how many friday 13th's are in a year

Requirements:
check and return how many times the 13th of a month falls on a friday

Edgecases:
None in this case

Algorithm:
  - initiate a sum variable to 0
  - iterate through the months from 0 to 11
    - create a date object for that month falling on the 13th
    - if the day is a friday (5) add to the sum
  - once finished, return the sum of friday 13ths
*/

function fridayThe13ths(year) {
  let friday13ths = 0;
  
  for (let month = 0; month <= 11; month += 1) {
    let date = new Date(year, month, 13);
    if (date.getDay() === 5) friday13ths += 1;
  }

  return friday13ths;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2