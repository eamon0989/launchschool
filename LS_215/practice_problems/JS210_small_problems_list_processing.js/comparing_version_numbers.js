/* 
Input: 2 version numbers
Ouput: 1, 0 or -1, null

Requirements:
If version1 > version2, we should return 1.
If version1 < version2, we should return -1.
If version1 === version2, we should return 0.
If either version number contains characters
other than digits and the . character, we should return null.
version numbers consist of up to 4 numbers separated by .'s
0.1 < 1
1.0 < 1.1
1.2 = 1.2.0.0
1.18.2 < 13.37
Compare the numbers of the shorter version number with the first n
digits of the longer (n being the amount of digits in the shorter)

- The rules to compare two version numbers
  - start from the left most parts of the two version numbers
  - if the number part of the first version number is larger, then the first version number is larger
  - if the number part of the second version number is larger, then the first version number is smaller
  - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
    - do the same comparison and decide which version number is larger
    - keep moving to the right until the result of the comparison is determined
    - if we get to the last number part of the two version numbers and they're equal,
      then the two version numbers are equal

Definitions and Rules:
Version numbers need to be integers
must be separated by .'s
any other input is invalid
there must be maximum 3 .s?
The numbers to the left are the major numbers
Numbers to the right are more minor numbers

Examples / Test Cases
Edge cases:
Input is 0?
Input contains digits that are not . or numbers



Data Struture:
Array



Algorithm:
Split the numbers on the dots
Check the length of the nested arrays to determine the shortest
loop through the v1 comparing the numbers with
the v2, stopping at the length of the shorter array
if they are equal, compare next num
if one is a lower num than the other, that is the lesser


*/


// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

function compareVersions(version1, version2) {
  if (/[^\d\.]/.test(version1) || /[^\d\.]/.test(version2)) return null;
  let v1 = version1.split('.');
  let v2 = version2.split('.');
  let shortest = v1.length > v2.length ? v2.length : v1.length;

  for (let i = 0; i < shortest; i += 1) {
    if (v1[i] > v2[i]) {
      return 1;
    } else if (v2[i] > v1[i]) {
      return -1;
    }
  }

  return 0;
}

// console.log(compareVersions('0.1', '1'));
// console.log(compareVersions('1.1', '1.2'));
// console.log(compareVersions('1.2', '1.2.0.0'));
// console.log(compareVersions('1.2.0.0', '1.18.2'));
// console.log(compareVersions('1.18.2', '13.37'));
// console.log(compareVersions('1.18.2', '13,37'));
console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1