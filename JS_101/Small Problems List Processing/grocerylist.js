function buyFruit(fruit) {
  return fruit.reduce((array, ele) => {
    while (ele[1] > 0) {
      array.push(ele[0]);
      ele[1] -= 1;
    }

    return array;
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]