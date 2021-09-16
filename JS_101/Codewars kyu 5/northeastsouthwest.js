/* Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The
directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and
"SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away
is a needless effort. Since this is the wild west, with dreadfull weather
and not much water, it's important to save yourself some energy, otherwise
you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending
  on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediatly see that going "NORTH" and immediately "SOUTH" is not
reasonable, better stay to the same place! So the task is to give to the
man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or
{ "WEST" }
or
[West]
Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going
north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other,
therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are
not directly opposite but they become directly opposite after the reduction of
"EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an
array of strings with the needless directions removed (W<->E or S<->N side by
side).

The Haskell version takes a list of directions with data Direction = North
| East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
See more examples in "Sample Tests:"
Notes
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"]
is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are
not directly opposite of each other and can't become such. Hence the result path
is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
if you want to translate, please ask before translating.

Input: array
Output: array

Rules:
North cancels out South
East cancels out West
Remove all 'pairs' from the array and return the array
Input can be upper or lowercase
Arrays only contain strings with those 3 words

Algorithm:
For each north check if there is a corrosponding south
if so, remove the pair
for each east check if there is a west
if so, remove the pair

count how many norths/souths/easts/wests there are and how many souths
delete the overlaps
e.g. if there are 4 norths and 3 souths, delete 3 norths and 3 souths

  - count how many times north appears and store the count in a variable
  - count how many times south appears and store the count in a variable
    - take the lower number, and change north to false num times and south
        to false num times
  - count how many times east appears and store the count in a variable
  - count how many times west appears and store the count in a variable
    - take the lower number, and change east to false num times and west
        to false num times
  - filter the array to remove false
  - return the array
*/

function dirReduc(array) {
  let match = array.join('').match(/(NORTHSOUTH)|(SOUTHNORTH)|(EASTWEST)|(WESTEAST)/gi, '') || [];

  while (match.length > 0) {
    array = array.join('').replace(/(NORTHSOUTH)|(SOUTHNORTH)|(EASTWEST)|(WESTEAST)/gi, '').split(' ');
    match = array.join('').match(/(NORTHSOUTH)|(SOUTHNORTH)|(EASTWEST)|(WESTEAST)/gi, '') || [];
  }

  return array.filter(word => word);
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));//, ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));//, ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));//, [])