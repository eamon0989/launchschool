// function bookFactory(title, author) {
//   return {
//     Title: title,
//     Author: author,

//     getDescription: function() {
//       console.log(`${this.Title} was written by ${this.Author}`);
//     },
//   };
// }

function bookFactory(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      console.log(`${this.title} was written by ${this.author}. I ${this.read ? "have" : "haven't"} read it.`);
    },

    markRead() {
      this.read = true;
    },
  };
}

let book1 = bookFactory('Me Talk Pretty One Day', 'David Sedaris');
book1.getDescription();

let book2 = bookFactory(`Aunts aren't Gentlemen`, 'PG Wodehouse');
book2.getDescription();

let book3 = bookFactory('Mythos', 'Stephen Fry');

book3.markRead();
console.log(book3);
console.log(book2);
book3.getDescription();