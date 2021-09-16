/*
non-empty set is not a subset of empty set?
empty set is a subset of non-empty set?

Build a custom set
Must be chainable
must have methods:
isEmpty: returns true if the set contains no elements
contains: sets can report if they contain an element

isSubset:
a set is a subset if all of its elements are contained in the other set
set is a subset of larger set with same elements
set is not a subset of set that does not contain its elements

isDisjoint: sets are disjoint if they share no elements
sets are not disjoint if they share an element
the empty set is disjoint with itself
empty set is disjoint with non-empty set
non-empty set is disjoint with empty set
sets are not disjoint if they share an element

isSame: sets with the same elements are equal
empty sets are equal
sets with different elements are not equal

add: add to non-empty set
adding an existing element does NOT change the set

intersection: takes 2 sets as arguments
returns a set of all shared elements
intersection of an empty set and non-empty set is an empty set
intersection of a non-empty set and an empty set is an empty set
intersection of two sets with shared elements is a set of the shared elements

difference: difference of a set is a set of all elements that are only in the first set

union: returns a set of all elements in either set
union of an empty set and non-empty set is the non-empty set
union of non-empty sets contains all unique elements
*/

class CustomSet {
  constructor(array) {
    if (array) this.add(array);
  }

  isEmpty() {
    for (let prop in this) {
      if (prop) return false;
    }

    return true;
  }

  add(array) {
    if (!Array.isArray(array)) array = [ ...arguments ];

    array.forEach(num => {
      if (!this[num]) {
        this[num] = num;
      }
    });

    return this;
  }

  contains(num) {
    for (let prop in this) {
      if (this[prop] === num) return true;
    }

    return false;
  }

  isSubset(set) {
    for (let prop in this) {
      if (this[prop] !== set[prop]) return false;
    }

    return true;
  }

  isDisjoint(set) {
    for (let prop in this) {
      if (this[prop] === set[prop]) return false;
    }

    return true;
  }

  isSame(set) {
    for (let prop in this) {
      if (this[prop] !== set[prop]) return false;
    }

    if ((this.isEmpty()) && (!set.isEmpty())) return false;

    return true;
  }

  intersection(set) {
    let array = [];
    for (let prop in this) {
      if (this[prop] === set[prop]) {
        array.push(this[prop]);
      }
    }

    return new CustomSet(array);
  }

  difference(set) {
    let array = [];
    for (let prop in this) {
      if (this[prop] !== set[prop]) {
        array.push(this[prop]);
      }
    }

    return new CustomSet(array);
  }

  union(set) {
    let array = [];
    for (let prop in this) {
      array.push(this[prop]);
    }

    for (let prop in set) {
      if (set[prop] !== this[prop]) {
        array.push(set[prop]);
      }
    }

    return new CustomSet(array);

  }
}

module.exports = CustomSet;