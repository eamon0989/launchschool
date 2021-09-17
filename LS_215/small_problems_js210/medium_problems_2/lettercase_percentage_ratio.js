/* 
Input: string
Output: object showing the percentage of lowercase, uppercase and neither

Requirements:
return an object
object must show the percentage of letters that are lower, upper or neither
percentage should be a string with 2 decimal places

Edge cases:
empty string (always at least one letter)
non string input

Algorithm:
  - initialize an object with the lowercase, uppercase and neither properties set to 0
  - iterate over the string
    - for each lower, obj.lowercase += 1
    - for each upper, obj.neither += 1
    - for each neither, obj.neither += 1
  - change each value to the percentage using num / string length * 100
  - iterate over the object
    - coerce each num to a string keeping 2 decimal places
*/

// function letterPercentages(string) {
//   let count = [...string].reduce((obj, char) => {
//     if (/[a-z]/.test(char)) {
//       obj.lowercase += 1;
//     } else if (/[A-Z]/.test(char)) {
//       obj.uppercase += 1;
//     } else {
//       obj.neither += 1;
//     }

//     return obj;
//   } ,{ lowercase: 0, uppercase: 0, neither: 0 });

//   for (let prop in count) {
//     count[prop] = (count[prop] / string.length * 100).toFixed(2);
//   }

//   return count;
// }

function letterPercentages(string) {
  const count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }