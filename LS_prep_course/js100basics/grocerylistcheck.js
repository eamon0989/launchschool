let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []

// for (let i = groceryList.length; i > 0 ; i -= 1) {
//   console.log(groceryList.shift());
// }

while (groceryList.length > 0) {
  console.log(groceryList.shift());
}