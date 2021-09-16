// function User(first, last) {
//   let obj = {
//     first: first,
//     last: last,
//     name: `${first} ${last}`,
//   };

//   return obj;
// }

function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  return {
    first: first,
    last: last,
    name: `${first} ${last}`,
  };
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe