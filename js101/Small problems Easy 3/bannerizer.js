/*
Give us your feedback
Bannerizer
Write a function that will take a short line of text, and write it to the console log within a box.
You may assume that the output will always fit in your browser window.


Examples:

Copy Code


*/
/* 
Problem: in my own words, write a short description of what the problem is about

input: string

output: string surrounded by the banner

rules: list anything specific that the problem is asking for 
or any edge cases to look out for

empty sting returns a smaller banner


Examples: list some provided examples


rules:


Data structures

input types: string
expected output types: string
intermediary:


Algorithm: write down your pseudo code
Try listing different possible solution options to the problem first 
in plain English

use a string literal to make the template
check string length
use repeat with string length to make the banner length

*/

function logInBox(string) {
  let length = string.length;
  let dash = '-';
  let space = ' ';

  let banner = `
                +-${dash.repeat(length)}-+
                | ${space.repeat(length)} |
                | ${string} |
                | ${space.repeat(length)} |
                +-${dash.repeat(length)}-+
                `;

  console.log(banner);
}


logInBox('To boldly go where no one has gone before.');
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
  */
logInBox('');
/*
+--+
|  |
|  |
|  |
+--+
*/
logInBox('Does it work? Who knows');