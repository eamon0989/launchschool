/* Introduction
The wave (known as the Mexican wave in the English-speaking world outside North
  America) is an example of metachronal rhythm achieved in a packed stadium
  when successive groups of spectators briefly stand, yell, and raise their
  arms. Immediately upon stretching to full height, the spectator returns to
  the usual seated position.

The result is a wave of standing spectators that travels through the crowd,
even though individual spectators never move away from their seats. In many
large arenas the crowd is seated in a contiguous circuit all the way around
the sport field, and so the wave is able to travel continuously around the
arena; in discontiguous seating arrangements, the wave can instead reflect
back and forth through the crowd. When the gap in seating is narrow, the wave
can sometimes pass through it. Usually only one wave crest will be present at
any given time in an arena, although simultaneous, counter-rotating waves have
been produced. (Source Wikipedia)
Task
In this simple Kata your task is to create a function that turns a string into
a Mexican Wave. You will be passed a string and you must return that string in
an array where an uppercase letter is a person standing up.
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if
 it was an empty seat
Example

wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

Input: string
Output: array of strings

Rules:
Explicit:
input string may be empty
will always be lowercase
whitespace is ignored for capitalization by included in string

Implicit:
Each letter must be made uppercase, first the first, then the second etc
If a word has n (non whitespace) chars, n words will be returned

Algorithm:
  - Initialize an array to the length of the string - whitespaces
  - fill each element of the array with the string
    - if a string has whitespaces, loop over the array and split the strings
        on the whitespaces (would make subArrays)
  - iterate over the array or arrays, changing the letter at index to uppercase
  - if there was a string split by whitespaces, join them back together using
      whitespace
  - return the array of strings
*/

// function wave(string) {
//   let array = [...Array(string.length)].fill(string);

//   array = array.map((word, index) => word.split('').map((char, charIndex) =>
// {
//     if (string[index] === char && charIndex === index) {
//       return char.toUpperCase();
//     }
//     return char;
//   }).join(''));

//   array = array.map((word, index) => (string[index] === ' ' ? false : word))
//     .filter(word => word);
//   return array;
// }

function wave(string) {
  let result = [];

  for (let i = 0; i < string.length; i += 1) {
    if (/[a-z]/.test(string[i])) {
      let char = string[i];
      result.push(string.slice(0, i) + char.toUpperCase() +
        string.slice(i + 1));
    }
  }

  return result;
}

console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("two words")); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
console.log(wave(" gap ")); // [" Gap ", " gAp ", " gaP "]
