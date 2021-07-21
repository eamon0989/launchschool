/* There is a queue for the self-checkout tills at the supermarket.
Your task is write a function to calculate the total time required
for all the customers to check out!

input
customers: an array of positive integers representing the queue.
Each integer represents a customer, and its value is the amount of
time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you
understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list)
proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified
above.

P.S. The situation in this kata can be likened to the
more-computer-science-related idea of a thread pool, with relation to
running multiple processes at the same time:
https://en.wikipedia.org/wiki/Thread_pool

Input: array, number
Output: Number

Rules:
each number in the array is equal to the amount of time a person needs
the number given is the amount of tills
a person cannot use a till if another person is still there
if number === 1, return the sum of the array

Edgecases:
0 tills?
Negative numbers, infinity?

Human solution:
for each till available, assign one number (person)
count down the minutes
when a till becomes available, assign the next person
when the queue is empty, return the amount of 'minutes' passed

till1 = 10
till2 = 2
when till1 === 0
till1 = next num

until array is empty and till1 === 0 and till2 === 0
till1--
till2--


Algorithm:

  - initialize an array with each element being a till
  - initialize an array with each element representing the till total time
  - assign each till a num (customer) removing it from the queue
  - count down each till until one reaches 0
    - assign a new customer t the till and add the number to the total till time
      continue counting down
    - set a loop to run until all tills are 0 AND array is empty
    - add the elements value to till1 total or till2 total
    - repeat until the array is empty
  return the value of till1total or till2total, whichever is great

  check if each till === 0
  if so assign it a customer
  subtract lower num from the rest
  next loop
  repeat

*/
// function queueTime(customers, tills) {

//   tills = Array(tills).fill(0);
//   let tillsTotal = 0;
//   let sum = tills.reduce((acc, num) => acc + num);
//   let queue = customers.length;
//   let areCustomers = true;

//   while (areCustomers) {

//     tills = tills.map((till, index) => {
//       if (till === 0) {
//         if (customers.length > 0) {
//           let customer = customers.shift();
//           tillsTotal[index] += customer;
//           return customer;
//         } else {
//           return 0;
//         }
//       }

//       return till;
//       });
//       let lowest = Math.max(...tills);
//       tills.forEach(num => {
//         if (num < lowest && num !== 0){
//           lowest = num;
//         }
//       });

//       queue = customers.length;
//       tillsTotal += lowest;
//       tills = tills.map(num => {
//         if (num !== 0) {
//           return num - lowest;
//         }

//         return 0;

//       });
//       sum = tills.reduce((acc, num) => acc + num);

//       if (Math.max(...tills) === 0 && queue === 0) {
//         areCustomers = false;
//       }
//   }
//   return tillsTotal;
// }

function queueTime(customers, tills) {
  tills = Array(tills).fill(0);
  customers = customers.reduce((array, _, index) => {
    let min = Math.min(...array);
    let idx = array.indexOf(min);
    array[idx] += customers[index];
    return array;
  }, tills);
  return Math.max(...customers);
}


// console.log(queueTime([5,3,4], 1)); //12
console.log(queueTime([10,2,3,3], 2)); //10
console.log(queueTime([10,2,3,13], 2)); //18
console.log(queueTime([2,3,10], 2)); //12
console.log(queueTime([23,5,26,30,12,5,5,22,19,19,13,24,39,29,29,30,15,32], 2)); //203
console.log(queueTime([27,41,23,15,42,33,21,50,46,40,30,49,37,33,9,50,26,5,37,
  16,10,41,44,3,18,38,30,43], 6)); //162