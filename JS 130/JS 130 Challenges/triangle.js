class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.isValid();
  }

  kind() {
    if (this.isEquilateral()) return 'equilateral';
    if (this.isScalene()) return 'scalene';
    if (this.isIsosceles()) return 'isosceles';
  }

  isValid() {
    if (this.side1 > 0 && this.side2 > 0 && this.side3 > 0) {
      if (this.isEquilateral()) {
        return true;
      } else if ((this.side1 + this.side2 > this.side3) &&
        (this.side2 + this.side3 > this.side1) &&
        (this.side1 + this.side3 > this.side2)) {
        return true;
      } else {
        throw new 'Invalid triangle error'();
      }
    } else {
      throw new 'Invalid triangle error'();
    }
  }

  isEquilateral() {
    if (this.side1) {
      if ((this.side1 === this.side2) &&
      (this.side2 === this.side3)) return true;
    }
  }

  isIsosceles() {
    if (this.side1 === this.side2) return true;
    if (this.side2 === this.side3) return true;
    if (this.side1 === this.side3) return true;
  }

  isScalene() {
    if ((this.side1 !== this.side2) && (this.side2 !== this.side3)
      && (this.side1 !== this.side3)) return true;
  }
}

// class Triangle {
//   constructor(side1, side2, side3) {
//     this.sides = [side1, side2, side3];

//     if (this.isInvalid()) {
//       throw new Error("Invalid triangle lengths");
//     }
//   }

//   kind() {
//     let [side1, side2, side3] = this.sides;

//     if (side1 === side2 && side2 === side3) {
//       return "equilateral";
//     }

//     if (side1 === side2 || side1 === side3 || side2 === side3) {
//       return "isosceles";
//     }

//     return "scalene";
//   }

//   isInvalid() {
//     let [side1, side2, side3] = this.sides;

//     return (side1 <= 0 || side2 <= 0 || side3 <= 0) ||
//       ((side1 + side2) <= side3 ||
//        (side1 + side3) <= side2 ||
//        (side2 + side3) <= side1);
//   }
// }

module.exports = Triangle;

module.exports = Triangle;