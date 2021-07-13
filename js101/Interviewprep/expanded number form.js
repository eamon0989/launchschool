/* Write Number in Expanded Form
You will be given a number and you will need to return it
as a string in Expanded Form. For example:

NOTE: All numbers will be whole numbers greater than 0.

input: num
output: string

rules: all nums are positive ints
for each number, expand to full form
e.g. 112 returns
100 + 10 + 2
if a string only has zeros, don't include it in the string

algorithm:

 - split the number into a string and store digits in an array
 - reverse the array
 - for each digit, concat an extra 0
     e.g. [1, 1'0', 2'00']
 - reverse the array again
 - return a string containing each string, checking each string
     to see if there are only 0s

*/

function expandedForm(num) {
  return [...String(num)].reverse().map((numStr, index) =>
    numStr + '0'.repeat(index)).reverse().reduce((acc, str) => {
    if (Number(str) !== 0) {
      acc = `${acc} + ${str}`;
    }

    return acc;
  });
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'