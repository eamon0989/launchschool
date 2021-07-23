/* Your task is to sort a given string. Each word in the string will contain a
single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input
String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

Input: string
Output: ordered string

Rules:
Empty string input = empty string output
each word in the string contains a number
each number is where the words should be positioned
positions start from 1
max words = 9


Algorithm:
  - initialize an array with num empty elements (num being the number of words)
  - split the string into an array of words
    - iterate through the chars of each string
    - if char is a number, replace the empty element in the return array with
        string
  - when finished, join the string and return it
*/


function order(string) {
  let words = string.split(' ');
  let returnArray = [...Array(words.length)];
  words.forEach(word => {
    let chars = word.split('');
    for (let i = 0; i < chars.length; i += 1) {
      if (/\d/.test(chars[i])) {
        returnArray[Number(chars[i])] = word;
        break;
      }
    }
  });

  returnArray.unshift();
  let returnString = returnArray.join(' ');

  return returnString.trim();
}



console.log(order("is2 Thi1s T4est 3a"));//, "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));//, "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""));//, "", "empty input should return empty string" )