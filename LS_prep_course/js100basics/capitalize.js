function capitalize(string) {
  let arr = string.split(' ');
  for (let i = 0; i < arr.length; i += 1) {
    let chars = arr[i].split('')
    chars[0] = chars[0].toUpperCase();
    arr[i] = chars.join('')
  }
  return arr.join(' ')
}

console.log(capitalize('launch school tech & talk'));
