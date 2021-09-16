/* Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

JavaScript: returns an Array;

height = num
length = num + (num - 1)
e.g.
height 3
length 5
2, 1, 2
1, 3, 1
0, 5, 0

3 floor
[
  '  *  ',
  ' *** ',
  '*****'
]
height = num
length = num + (num - 1)
e.g.
height 6
length 11
5, 1, 5
4, 3, 4
3, 5, 3
2, 7, 2
1, 9, 1
0, 11, 0

algorithm:

 - get height(n) and calculate length (n + (n - 1))
 - calculate padding on either side (length - currentNum) and
     store in p variable
 - initialize space variable
 - initialize star variable
 - initialize starWidth variable at 1
 - initialize an empty array called returnArray
 - iterate from 1 to num
   - push a string containing space repeated p times, '*' currentNum times,
       space p times to the returnArray
    - for each iteration, decrement p by 1 and increment starWidth by 2
   - repeat until currentNum is equal to height (n)
*/

function towerBuilder(height) {
  let length = height + (height - 1);
  let padding = (length - 1) / 2;
  let starWidth = 1;
  let space = ' ';
  let star = '*';
  let returnArray = [];

  for (let currentLine = 1; currentLine <= height; currentLine += 1) {
    returnArray.push(`${space.repeat(padding)}${star.repeat(starWidth)}${space.repeat(padding)}`);
    padding -= 1;
    starWidth += 2;
  }

  return returnArray;
}


console.log(towerBuilder(3));
console.log(towerBuilder(6));
console.log(towerBuilder(10));

/*
6 floor
[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
*/