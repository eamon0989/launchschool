// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }, this);
//   },
// };

// console.log(franchise.allMovies())

// let anon = function(number) {
//   return this.name + ' ' + number;
// };

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(anon.bind(this));
//   },
// };

// console.log(franchise.allMovies());

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};

console.log(franchise.allMovies());