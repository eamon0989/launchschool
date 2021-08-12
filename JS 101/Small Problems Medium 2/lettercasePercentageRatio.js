/* Write a function that takes a string and returns an object containing
the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

input: string
output: an object

rules;
sum up lowercase
sum up uppercase
sum up other
get percentage
return percentages as an object

algorithm:

 - split string into an array of chars
   - initialize an object
   - loop over the array, incrementing object prop by 1 for each that matches
 - calculate percentage by adding total nums together, dividing by 100 and
    multiplying each num by the return value
    - store percentages in an object and return

  calculate percentage
  e.g. 5, 1, 4
  total = 10
  num / total * 100 = percentage
  5 / 10 * 100

 */
function letterPercentages(string) {
  let count = string.length;
  let countObj = [...string].reduce((object, char) => {
    if (/[A-Z]/.test(char)) {
      object['uppercase'] += 1;
    } else if (/[a-z]/.test(char)) {
      object['lowercase'] += 1;
    } else {
      object['neither'] += 1;
    }

    return object;
  }, { lowercase: 0, uppercase: 0, neither: 0 });

  return changeToPercentage(countObj, count);
}

function changeToPercentage(obj, count) {
  for (let prop in obj) {
    obj[prop] = `${(obj[prop] / count * 100).toFixed(2)}%`;
  }

  return obj;
}

/* function letterPercentages(string) {
  let count = string.length;
  return {
    lowercase: `${(((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2)}%`,
    uppercase: `${(((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2)}%`,
    neither: `${(((string.match(/[^a-zA-Z]/g) || []).length / count) * 100).toFixed(2)}%`,
  };
} */


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }