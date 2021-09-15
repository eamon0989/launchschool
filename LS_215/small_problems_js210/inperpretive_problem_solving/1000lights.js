/*
LINK: 
START TIME: 
END TIME: 
INPUT(S): number (amount of switches)
  - 
CLARIFICATIONS:
  INPUT Data type(s) integer
  - 
  VALUES
  - Normal (string, boolean...)
  - Special (NaN, +/- Infinity, .567, -3, [1,,3], [1, 2, a: 'A'])
  EDGE CASES:
  - Invalid Input or Values (data types or values)
  - Emptiness (null/nil, '', [], {})
  - Boundary conditions (max 20 chars & add in 21 chars)
  - Repetition/duplication
  - Uppercase/Lowercase strings/chars
  - Too few/many args
  RETURN VALUE(s): an array of lights that are 'on'
  - 
  FAILURES/BAD INPUT:
  - Return a special value - an empty array
  - Raise exceptions or report errors
REQUIREMENTS:
  - 1 to n switches - every light starts off
  - pass 1 - toggle all lights on
  - pass 2 - toggle 2, 4, 6 on etc
  - pass 3 - toggle 3, 6, 9 on etc
  - n number of passes
TEST CASES:
  console.log(lightsOn(5) === [1, 4]); // 
  console.log(lightsOn(100) === [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]); // 
  console.log(**name**() === ); // 
DESCRIBE THE PROBLEM:
  - given a number of switches, pass over them n number of time
  - each time, flip the switches that are a multiple of n
  - return an array of the switches that are on
DATA STRUCTURE:
  - Array
ALGORITHM (break into problems + guard clauses):
  - if n === 0 return []
  - populate an array with n + 1 number of false
    - loop over the array n number of times, starting from 1
      - on each iteration, change the value of multiples of the iteration number
        to it's opposite value (true -> false etc) using a nested loop
  - map the array to change each light that is turned on to it's index
  - filter the array to remove false values
  - return the array

lightsOn(5)
[f, f, f, f, f, f]
[f, t, t, t, t, t]
[f, t, f, t, f, t]
[f, t, f, f, f, t]
[f, t, f, f, t, t]
[f, t, f, f, t, f]


*/

// CODE:


// **TEST CASES:**
// HAPPY PATHS:

// EDGE CASES:

// FAILURES/BAD INPUTS:

/* 
1000 Lights
You have a bank of switches before you, numbered from 1 to n. Every switch is
connected to exactly one light that is initially off. You walk down the row
of switches and toggle every one of them. You walk back to the beginning of the
row and start another pass. On this second pass, you toggle switches 2, 4, 6,
and so on. On the third pass, you go back to the beginning again, this time
toggling switches 3, 6, 9, and so on. You continue to repeat this process until
you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and
returns an array of the lights that are on after n repetitions.

Examples:

Copy Code
*/

function lightsOn(switches) {
  let lights = Array(switches + 1).fill(false);
  for (let i = 1; i < lights.length; i += 1) {
    for (let j = 1; j < lights.length; j += 1) {
      if (j % i === 0) {
        lights[j] = !lights[j];
      }
    }
  }

  lights = lights.map((light, index) => {
    return light === true ? index : light;
  })

  return lights.filter(light => light);
}

// function lightsOn(switches) {
//   let lights = Array(switches).fill().map((ele, index) => index += 1).
//     map(light => Math.sqrt(light) === Math.floor(Math.sqrt(light)));

//   lights = lights.map((light, index) => {
//     return light === true ? index + 1 : light;
//   })
  
//   return lights.filter(light => light);
// }


function lightsOn(switches) {
  let result = [];
  for (let i = 1; i <= switches; i += 1) {
    if (Math.sqrt(i) % 1 === 0) {
      result.push(i);
    }
  }

  return result;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]