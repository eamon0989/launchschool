/*
Problem Description
You are given an array of strings and an integer k. Your task is to
return the first longest string consisting of k consecutive strings
taken in the array.

Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
Test Cases

input: an array of strings
output: a string consisting of the n longest consecutive strings
concatinated together

rules

find the length of each string
find the length of each possible combination of consequtive strings
return the strings joined together

algorithem

 - loop through the array, slicing k number of elements
 - count the length of both elements concatinated together
 - if the length is longer than the previous longest, store the
     string in a variable
- when finished looping over the array, return the string in the
    variable

*/

function longestConsec(inputArray, kNumber) {
  if (kNumber < 1 || kNumber > inputArray.length) {
    return '';
  }

  let longestString = '';

  inputArray.forEach((_, index) => {
    let string = inputArray.slice(index, (index + kNumber))
      .reduce((string, element) => string + element);
    if (string.length > longestString.length) {
      longestString = string;
    }
  });

  return longestString;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true