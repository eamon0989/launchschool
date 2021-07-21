/* Write a method that takes a string as an argument and groups the number
of time each character appears in the string as a hash sorted by the highest
number of occurrences.

The characters should be sorted alphabetically e.g:

get_char_count("cba") => {1=>["a", "b", "c"]}
You should ignore spaces, special characters and count uppercase letters as
lowercase ones.

For example:

get_char_count("Mississippi") => {4=>["i", "s"], 2=>["p"], 1=>["m"]}
get_char_count("Hello. Hello? HELLO!!") => {6=>["l"], 3=>["e", "h", "o"]}
get_char_count("aaa...bb...c!") => {3=>["a"], 2=>["b"], 1=>["c"]}
get_char_count("aaabbbccc") => {3=>["a", "b", "c"]}
get_char_count("abc123") => {1=>["1", "2", "3", "a", "b", "c"]} 

input: string
output: object

rules:
ignore spaces and non alphabetic chars
count all as lowercase

algorithm:
 - filter all non alphabetic chars from the string
 - make all chars lowercase
 - count each instance of a char and store it in an array
 - make an object with the values of the numeric counts
 - check the count of each letter in the original array, if
     it matches, push the letter into an array as the value of the count key
 - return the object
*/
function get_char_count(string) {
  string = string.toLowerCase().replace(/\W/g, '');
  let count = [...string].reduce((object, char) => {
    object[char] = object[char] ? object[char] + 1 : object[char] = 1;
    return object;
  }, {});

  let returnObj = {};
  for (let prop in count) {
    let num = count[prop];
    if (!returnObj.hasOwnProperty(count[prop])) {
      returnObj[num] = [prop];
    } else {
      returnObj[num].push(prop);
    }
  }
  return returnObj;
}

console.log(get_char_count("Mississippi")); // => {4=>["i", "s"], 2=>["p"], 1=>["m"]}
console.log(get_char_count("Hello. Hello? HELLO!!")); // => {6=>["l"], 3=>["e", "h", "o"]}
console.log(get_char_count("aaa...bb...c!")); // => {3=>["a"], 2=>["b"], 1=>["c"]}
console.log(get_char_count("aaabbbccc")); // => {3=>["a", "b", "c"]}
console.log(get_char_count("abc123")); // => {1=>["1", "2", "3", "a", "b", "c"]} 
