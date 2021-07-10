function countOccurrences(array) {
  let obj = array.reduce((object, ele) => {
    if (object.hasOwnProperty(ele.toLowerCase())) {
      object[ele.toLowerCase()] += 1;
    } else {
      object[ele.toLowerCase()] = 1;
    }
    return object;
  }, {});

  for (let prop in obj) {
    console.log(`${prop} => ${obj[prop]}`);
  }
}


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'suv', 'Car', 'truck'];

countOccurrences(vehicles);
/* 
Algo:

 - initialize an empty object
 - iterate over the array, check if obj contains word
   - if it exists, iterate value
   - if not, key is word, value 1
 - iterate over obj, logging each key and value */