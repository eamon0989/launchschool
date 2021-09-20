/* 

Break into smaller problems:

remove dups from arrays - filter
count letters storing location of current highest key - obj
remove occurences that don't have the highest key


Input: object of arrays
Output: object of arrays with no duplicates

Requirements:
  - each cahr should only appear once in the object
  - if 2 keys share a char, the largest key keeps the char
  - if an array has a duplicate char, the first should be kept

Edge cases:
  - if more than 10 keys, keys should be numbers?
  - keys with non ascending order?
  - non letter chars?

Data structure:


Mental model:

Algorithm:
  - loop through the object
    - filter out dups in array, leaving the first occurence
  - loop over the object again, storing char count and highest key in an obj
  - loop over obj again, removing chars that don't have the highest key


nested loops, change first occurence to false?
Then filter out the false values later

loop through, count occurences of each char in an object
loop through again, removing extra occurences

loop through, removing multiple occurences in the same array
 - count occurences of each char in an object 
store the location of each char
if a char appears a second time, remove the first instance
  - (change to false and filter)

let obj = {
  'C': { key: '1', index: 0 }
}

input[obj.'C'.key][obj.'C'.index] = false

input = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}

output = {
  "1": ["F", "G"],
  "2": ["C"],
  "3": ["A", "B", "D"],
}

input = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
}

output = {
  "1": [],
  "2": [],
  "3": ["A"],
}

input = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}

output = {
  "11": ["P", "R", "S"],
  "53": ["C"],
  "236": ["L", "X", "G", "H"],
  "432": ["A", "B", "D"],
} */


function removeDuplicateIds(object) {
  let count = {};

  for (let prop in object) {
    object[prop] = object[prop].filter((char, index, array) => index === array.indexOf(char));
  }

  for (let prop in object) {
    object[prop].forEach((char, index) => {
      if (!count[char]) {
        count[char] = { count: 1, key: prop, index: index }
      } else {
        count[char].count += 1;
        if (Number(prop) > Number(count[char].key)) {
          object[count[char].key][count[char].index] = false;
          count[char].key = prop;
          count[char].index = index;
        }
      }
    })
  }

  for (let prop in object) {
    object[prop] = object[prop].filter(char => char !== false);
  }
  
  return object;
}

console.log(removeDuplicateIds({
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}));

console.log(removeDuplicateIds({
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
}));

console.log(removeDuplicateIds({
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}));