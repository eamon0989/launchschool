function returnUUID() {
  let chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f'];
  let randomNum = () => Math.floor(Math.random() * 16);
  let array = 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.split('-');
  let UUID = array.map(section => {
    return section.split('').map(_ => chars[randomNum()]).join('');
  }).join('-');
  return UUID;
}

console.log(returnUUID());