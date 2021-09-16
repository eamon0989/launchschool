/*
Input: number
Output: array of 'lights'

rules:
array of n number of lights, initially off '0'
first pass turn all lights on
2nd pass toggle every second light
3rd pass toggle every third light
coninute n number of times
return array of lights that are on

algorithm
 - fill an array with n 0's
 - set count to 1 and startIndex to 0
 - declare a while loop that continues while count <= n
 - declare a for loop that changes every count num o lights
     starting index is count - 1
   - 0 is off, 1 is on
    - on each pass change count num of lights, count + 1
 - loop through the resulting array, pushing the index + 1
     of each 1 to a new array, return that array
*/
function lightsOn(switches) {
  let lights = [...Array(switches)].fill(0);
  let count = 1;

  while (count <= switches) {
    for (let index = count - 1; index <= lights.length - 1; index += count) {
      lights[index] === 0 ? lights[index] = 1 : lights[index] = 0;
    }

    count += 1;
  }

  let returnArray = [];
  lights.forEach((num, index) => {
    if (num === 1) {
      returnArray.push(index + 1);
    }
  });

  return returnArray;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]