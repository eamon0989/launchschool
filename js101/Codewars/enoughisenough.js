/*
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the
places they've been, and now they want to show Charlie their entire
collection. However, Charlie doesn't like these sessions, since the motive
usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells
them that he will only sit during the session if they show the same motive
at most N times. Luckily, Alice and Bob are able to encode the motive as a
number. Can you help them to remove numbers such that their list contains
each number only up to N times, without changing the order?

Task
Given a list lst and a number N, create a new list that contains each number
of lst at most N times without reordering. For example if N = 2, and the
input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since
this would lead to 1 and 2 being in the result 3 times, and then take 3,
which leads to [1,2,3,1,2,3].

Input: array, number
Output: array

Rules:
if a number appear more than n times in the array, remove the extras
if a number appears n or less times, leave it

Human solution:
Loop through the array, checking if a number apears more than n times
If it does, remove the extra appearances so it only appears n times max

Algorithm:

  - iterate through the array, starting with the first number
  - initialize a count variable at 1
  - iterate through the rest of the array using a nested loop,
      counting the amount of times the number appears
    - if it appears more than n times, remove the last instance of the number
        and subtract 1 from the count until the count equals n
    - reassign count to 1
    - continue until the iteration reaches the end of the array
  return the array


Example */
function deleteNth(array, num) {
  for (let index = 0; index < array.length; index += 1) {
    let currentNum = array[index];
    let count = 1;
    for (let endIndex = index + 1; endIndex < array.length; endIndex += 1) {
      if (array[endIndex] === currentNum) {
        count += 1;
      }
    }
    while (count > num) {
      array.splice(array.lastIndexOf(currentNum), 1);
      count -= 1;
    }
    count = 1;
  }

  return array;
}

console.log(deleteNth([1,1,1,1],2)); // return [1,1]
console.log(deleteNth([20,37,20,21],1)); // return [20,37,21]