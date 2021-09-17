/* 
Input: an int
Output: the next 'featured' num above that num

Requirements:
A featured num is:
an odd num
a multiple of 7
no repeated digits (e.g. 66 is invalid)
largest featured num is 9876543201

EdgeCases:
No num, special num etc

Algorithm:
  - iterate up from n in jumps of 7
    - if num is odd, check if it's digits are repeated
  - if not, return that number

*/

function featured(num) {
  let max = 9876543201;
  num = multipleOf7(num);


  for (let currentNum = num; currentNum <= max; currentNum += 7) {
    if (isFeatured(currentNum)) return currentNum;
  }

  return "There is no possible number that fulfills those requirements.";
}

function multipleOf7(num) {
  if (num % 7 !== 0) {
    num += (7 - num % 7);
  } else {
    num += 7;
  }

  return num;
}

function isFeatured(num) {
  if (num % 2 === 0) return false;
  return [...String(num)].every((digit, index, array) =>
    index === array.lastIndexOf(digit));
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."