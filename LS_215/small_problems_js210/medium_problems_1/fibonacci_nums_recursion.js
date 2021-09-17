/*
LINK: 
START TIME: 
END TIME: 
INPUT(S):
  - 
CLARIFICATIONS:
  INPUT Data type(s) (string, boolean, number, null, undefined, collection)
  - Do I have to worry about any other input types?
  VALUES
  - Normal (string, boolean...)
  - Special (NaN, +/- Infinity, .567, -3, [1,,3], [1, 2, a: 'A'])
  EDGE CASES:
  - Invalid Input or Values (data types or values) are numbers floats?
  - Emptiness (null/nil, '', [], {})
  - Boundary conditions (max 20 chars & add in 21 chars)
  - Repetition/duplication
  - Uppercase/Lowercase strings/chars
  - Too few/many args
  RETURN VALUE(s): (same or new object, same or different data types, duplicates, order)
  - 
  FAILURES/BAD INPUT:
  - Return a special value (null/nil, '', [], {})
  - Raise exceptions or report errors
REQUIREMENTS:
  - 
  - 
  - 
TEST CASES:
  console.log(**name**() === ); // 
  console.log(**name**() === ); // 
  console.log(**name**() === ); // 
DESCRIBE THE PROBLEM:
  - 
DATA STRUCTURE:
  - 
ALGORITHM (break into problems + guard clauses):
  - 
*/

// CODE:

let fibNums = [0, 1, 1];

function fibonacci(nth) {
  if (fibNums[nth]) return fibNums[nth];
  
  fibNums[fibNums.length] = fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2];
  return fibonacci(nth);
}

// **TEST CASES:**
// HAPPY PATHS:

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

// EDGE CASES:



// FAILURES/BAD INPUTS: