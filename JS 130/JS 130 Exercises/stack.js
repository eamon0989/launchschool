function newStack() {
  let stack = [];

  return {
    push(value) {
      stack.push(value);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(ele => console.log(ele));
    },
  };
}

let methods = newStack();
console.log(methods);
methods.push('hi');
methods.push('2');
methods.push('3');
methods.printStack();
methods.pop();
methods.printStack();