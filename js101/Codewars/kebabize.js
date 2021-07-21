/*
Input: string
Output: string

Rules:
insert a dash before capital letters
convert capital letters to lowercase

*/

function kebabize(string) {
  return string.replace(/\d/g, '')
    .replace(/^[A-Z]/, char => char.toLowerCase())
    .replace(/[A-Z]/g, (char => `-${char.toLowerCase()}`));
}

console.log(kebabize('camelsHaveThreeHumps')); // camels-have-three-humps
console.log(kebabize('camelsHave3Humps')); // camels-have-humps
console.log(kebabize('CamelsHave3Humps')); // camels-have-humps