class Person {
  greeting(text) {
    console.log(text);
  }
}

class Shouter extends Person {
  greeting = function(text) {
    // super.greeting((text.toUpperCase()));
    console.log((text).toUpperCase());
  }
}

let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

console.log(person, shouter); //Person { greeting: [Function: greeting] } Shouter { greeting: [Function: greeting] }
// console.log(object);
console.log(shouter.hasOwnProperty('greeting'));
console.log(person.hasOwnProperty('greeting'));