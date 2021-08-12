/* Given a string of integers, return the number of odd-numbered substrings
that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341,
a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Good luck!

Input: string
Output: number

Rules:
get all possible substrings
check if the number is odd
return the count of odd number substrings

341

341

 */
function solve(string) {
  let subs = [];
  [...string].map((_, index) => subs.push(getSubstrings(string.slice(index))));
  let result = [];
  subs.forEach(sub => {
    sub.forEach(str => result.push(str));
  });
  return result.filter(str => Number(str) % 2 === 1).length;
}

function getSubstrings(string) {
  return [...string].map((_, index) => string.slice(0, index + 1));
}

console.log(solve("1341"))//7);
console.log(solve("1357"))//,10);
console.log(solve("13471"))//,12);
console.log(solve("134721"))//,13);
console.log(solve("1347231"))//,20);
console.log(solve("13472315"))//,28);