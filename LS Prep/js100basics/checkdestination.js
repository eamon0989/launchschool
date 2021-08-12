let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];


function contains(city, array) {
  //console.log((array.filter(place => place === city)) ? true : false);
  // array.forEach(element => {
  //   if (element === city) {
  //     return true;
  //   }
  // });

  for(let i = 0; i < array.length; i++) {
    if (array[i] === city) {
      return true;
    }
  }

  return false;
}

// function contains(element, list) {
//   return list.indexOf(element) >= 0;
// }

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false