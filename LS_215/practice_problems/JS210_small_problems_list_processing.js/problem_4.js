/* 
"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
, means numbers
- and : and .. are range separators

"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611 

Input: string of numbers separated
Output: array of numbers separated by ,'s

Breakdown

numbers separated by ,'s
each number is bigger than the previous
the number could be the right hand part of a bigger num e.g. 7, 2 = 12
(can't be 2 because smaller than 7, the next number with 2 as the
rightmost digit is 12)

numbers separated by - and : and ..
start counting from the number on the left until the number on the right
is reached
Can be partial number (from the right hand side)

Mental Model

  - split the array into numbers
  - iterate through the array
    - if a number is greater than the previous number, skip
    - if it is smaller, iterate up from the previous number
      - check if the current iteration contains the current num as it's
        rightmost digits
      - if so, replace it with the current iteration
      - if not, continue
    

Test cases / edge cases

different separators?
multiple separators in the same sting?

Algorithm:

  - replace the partial numbers with the full numbers
  - split the numbers and separators into an array
  - iterate through the array
    - replace any range separators -, :, .. with the range of numbers
  - join the resulting array back to a string and return it
*/

function numbers(stringOfNums) {
  let nums = stringOfNums.match(/\d+/g);
  let fullNums = getFullNums(nums);
  let separators = stringOfNums.match(/\D+/g);

  let result = [];
  for (let i = 0; i < fullNums.length; i += 1) {
    result.push(fullNums[i], separators?.[i] || '');
  }

  return replaceWithRanges(result);
}

function getFullNums(array) {
  let resultArray = [];
  array.forEach((num, index) => {
    if (Number(num) < resultArray[index - 1]) {
      let endNum = String(num);
      let currentNum = resultArray[index - 1];
      while (!String(currentNum).endsWith(endNum)) {
        currentNum += 1;
      }

      resultArray.push(currentNum);
    } else {
      resultArray.push(Number(num));
    }
  })

  return resultArray.map(String);
}

function replaceWithRanges(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (/:|\.\.|\-/.test(array[i])) {
      array[i] = rangeReplace(array[i - 1], array[i + 1]);
    }
  }

  return array.join('');
}

function rangeReplace(start, end) {
  let string = '';
  for (let i = Number(start) + 1; i < Number(end); i += 1) {
    string += `, ${i}`;
  }

  string += ', ';
  return string;
}

console.log(numbers("1, 3, 7, 2, 4, 1")); // --> 1, 3, 7, 12, 14, 21
console.log(numbers("1-3, 1-2")); // --> 1, 2, 3, 11, 12
console.log(numbers("1:5:2")); // --> 1, 2, 3, 4, 5, 6, ... 12
console.log(numbers("104-2")); // --> 104, 105, ... 112
console.log(numbers("104-02")); // --> 104, 105, ... 202
console.log(numbers("545, 64:11")); // --> 545, 564, 565, .. 611