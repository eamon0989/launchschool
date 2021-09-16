let randomNumber = Math.round(Math.random() * 2);
let weather;

if (randomNumber === 0) {
  weather = 'sunny';
} else if (randomNumber === 1) {
  weather = 'rainy';
} else {
  weather = 'snow storm';
}

if (weather === 'sunny') {
  console.log("It's a beautiful day");
} else if (weather === 'rainy') {
  console.log("Grab your umbrella");
} else {
  console.log("Let's stay inside!");
}
