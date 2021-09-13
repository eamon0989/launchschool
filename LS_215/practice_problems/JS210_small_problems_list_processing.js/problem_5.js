/* 
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . . 
*/

/* 
(0,0), (1,1), (2,2), (1,3), 
(0,4), (1,5), (2,6), (1,7)

"WE ARE DISCOVERED FLEE AT ONCE"
WECRLTEERDSOEEFEAOCAIVDEN

The first row has seven spots that can be filled with "WECRLTE".
0, 4, 8, 12, 16, etc (0 + 4)
separated by ' . . . '
Now the 2nd row takes "ERDSOEEFEAOC".
1, 3, 5, 7, 9 etc (1 + 2)
starts with '. ', separated by ' . ', end ' .'
Leaving "AIVDEN" for the last row.
2, 6, 10, 14, 18, 22 etc (2 + 4)
start '. . ', middle ' . . . ', end ' . .'

30 chars

split string into 3 arrays
first every 4 chars starting at 0
second every 2 chars starting at 1
third every 4 chars starting at 2
*/
console.log("WE ARE DISCOVERED FLEE AT ONCE".length);
console.log(". E . R . D . S . O . E . E . F . E . A . O . C . E .".length);
console.log("ERDSOEEFEAOC".length);
console.log(`
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .`.length);

function encode(string) {
  let row1 = [];
  let row2 = [];
  let row3 = [];

  string.replace(/[^a-z]/gi, '').split('').forEach((char, index) => {
    if (index % 4 === 0) {
      row1.push(char);
    } else if (index % 2 === 1) {
      row2.push(char);
    } else {
      row3.push(char);
    }
  })

  console.log(row1.join(' . . . '));
  console.log(`. ${row2.join(' . ')} .`);
  console.log(`. . ${row3.join(' . . . ')} . .`);
}

console.log(encode('WE ARE DISCOVERED FLEE AT ONCE'));