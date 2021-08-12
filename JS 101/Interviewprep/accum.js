/*
Problem Description
Given the string of chars alphabetic characters limited to a-z, do as in the sample cases.
Each character in the string argument should appear in the returned string.
The original character should be repeated as many times as its original position in the string argument.  (index 0 being position 1, index 1 being position 2...)
The repeated sequences of a character should be separated by a hyphen in the returned string.
In the repeated sequences of a character included in the returned string, the first instance of the character should be upper-case.  Subsequent instances of the character should be lowercase.

Test Cases
Input: string of letters
Output: string

Rules:
alphabetic chars only
repeat each char by it's index + 1
separated by hyphens
First char in each substring should be uppercase, the rest lowercase

Algorithm
 - make string lowercase
 - spread chars into an array
 - use reduce to add all chars to a string
    repeated index + 1 amount of times
    - make first char uppercase
      - separate them by -

*/

function accum(string) {
  let array = [...string.toLowerCase()].reduce((acc, char, index) => {
    acc += `-${char.repeat(index + 1)}`;
    return acc;
  },);

  [...array].forEach((char, index) => {
    if (char === '-') {
      array[index + 1] = array[index + 1].toUpperCase();
    }
  });
  console.log(array);
}

accum("abcd")    // "A-Bb-Ccc-Dddd"
accum("RqaEzty") // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt")    // "C-Ww-Aaa-Tttt"