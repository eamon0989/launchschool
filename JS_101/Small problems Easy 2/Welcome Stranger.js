// input is an array and an object
// output takes array items, joins them with a space in between,
// and adds it to a string with their title and occupation

function greetings(array, object) {
  let name = array.join(' ');
  return `Hello ${name}! Nice to have a ${object.title} ${object.occupation} here.`;
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.