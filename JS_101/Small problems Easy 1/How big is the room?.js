let rlSync = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639

function howBig() {
  let length = rlSync.question("What's the length of the room? ");
  let width = rlSync.question("What's the width of the room? ");
  let type = rlSync.question("Are you using meters or feet? ")
  
  let area = length * width;
  
  if (type.toLowerCase() !== 'feet' && type.toLowerCase() !== 'meters') {
    type = rlSync.question("Are you using meters or feet? Please type either meters or feet. ")
  }
  
  if (type.toLowerCase() === 'meters') {
    let areaInFeet = area * SQMETERS_TO_SQFEET
    console.log(`The area of the room is ${area.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`)
  } else if (type.toLowerCase() === 'feet') {
    let areaInMeters = area / SQMETERS_TO_SQFEET
    console.log(`The area of the room is ${area.toFixed(2)} square feet (${areaInMeters.toFixed(2)} square meters).`)
  }
}

howBig();