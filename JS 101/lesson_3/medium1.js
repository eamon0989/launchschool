// let string = 'The Flintstones Rock!';

// for (let i = 0; i < 10; i += 1) {
//   console.log(string.padStart(i + string.length, ' '));
// }

// let munstersDescription = "The Munsters are creepy and spooky.";

// let array = munstersDescription.split('').map((char) => {
//   if (/[A-Z]/.test(char)) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join('');
// console.log(array);

// munstersDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join("");

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;
// }

// console.log(factors(0));
// console.log(factors(-10));
// console.log(factors(1));
// console.log(factors(9));
// console.log(factors(15));
// console.log(factors(81));
// console.log(factors(99));
// console.log(factors(100));
// console.log(factors(101));

// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// let buffer1 = [1, 2, 3, 4];
// let buffer2 = [1, 2, 3, 4];
// addToRollingBuffer1(buffer1, 3, 5);
// addToRollingBuffer2(buffer2, 3, 5);
// console.log(buffer1);
// console.log(buffer2);

// function modify(array1) {
//   array1.concat(1);
//   return array1;
// }
// let array = [5, 4, 3, 2];

// let array2 = modify(array);
// console.log(array);
// console.log(array2);

// console.log(0.3 + 0.6);
// console.log(0.3 + 0.6 === 0.9);

// let nanArray = [NaN];

// console.log(Number.isNaN(nanArray[0]));

// let answer = 42;

// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }

// let newAnswer = messWithIt(answer);

// console.log(answer - 8);
// console.log(newAnswer);

// let answer = 42;

// function messWithIt(someNumber) {
//   someNumber += answer;
//   return answer += 2;
// }

// // function messWithIt1(answer) {
// //   answer = 30;
// //   return (answer += 8);
// // }

// console.log(messWithIt(answer));

// console.log(answer);
// // console.log(newAnswer);

// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" }
// };

// // let array = Object.entries(munsters);
// console.log(array);
// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }

// messWithDemographics(munsters);
// // console.log(munsters);

// function first() {
//   return {
//     prop1: "hi there"
//   };
// }

// function second() {
//   return
//   {
//     prop1: "hi there"
//   };
// }

// console.log(first());
// console.log(second());

// let object = { first: [1] };
// let numArray = object["first"].concat();
// numArray.push(2);


// console.log(numArray); //  => "[1, 2]"
// console.log(object);

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  // console.log(dotSeparatedWords);
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

function isAnIpNumber(string) {
  // console.log(typeof string, string);
  if (Number.isNaN(Number(string))) {
    return false;
  }

  if (Number(string) >= 0 && Number(string) < 255) {
    return true;
  }
  return false;
}

// function isAnIpNumber(str) {
//   if (/^\d+$/.test(str)) {
//     let number = Number(str);
//     return number >= 0 && number <= 255;
//   }

//   return false;
// }
// console.log(Number.isNaN('51f'));

console.log(isDotSeparatedIpAddress('4.5.5'));
console.log(isDotSeparatedIpAddress('1.2.3.4.5'));
console.log(isDotSeparatedIpAddress('128.1.55.99'));
console.log(isDotSeparatedIpAddress('81.35.33.51'));
console.log(isDotSeparatedIpAddress('81.35.33.51f'));
console.log(isDotSeparatedIpAddress('81.35.33.256'));

// // console.log(isDotSeparatedIpAddress());