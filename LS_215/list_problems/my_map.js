function myMap(array, func) {
  let result = [];
  // for (let i = 0; i < array.length; i += 1) {
  //   result.push(func(array[i]));
  // }

  array.forEach(num => result.push(func(num)));

  return result;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]

// function getBooksTitle(books) {
//   return myMap(books, getTitle);
// }


// function getBooksTitle(books) {
//   return myMap(books, function (book) {
//     return book['title'];
//   });
// }

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

function getTitle(book) {
  return book['title'];
}

console.log(getBooksTitle(books));
// console output
// [
//   "JavaScript and JQuery: Interactive Front-End Web Development",
//   "Eloquent JavaScript: A Modern Introduction to Programming",
//   "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
// ]