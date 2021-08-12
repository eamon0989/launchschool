let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

// function selectFruit(obj) {
//   let newArr = Object.entries(obj).filter(sub => sub[1] === 'Fruit');
//   let returnObj = Object.fromEntries(newArr);
//   console.log(returnObj);
//   return returnObj;
// }

function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};
  console.log(produceKeys);
  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
}
