let randomNumber = Math.round(Math.random() * 2);
let weather;

if (randomNumber === 0) {
  weather = 'sunny';
} else if (randomNumber === 1) {
  weather = 'rainy';
} else {
  weather = 'snow storm';
}

switch (weather) {
  case 'sunny':
  console.log("It's a beautiful day");
  break;
  case 'rainy':
  console.log("Grab your umbrella");
  break;
  default: 
  console.log("Let's stay inside!");
}
