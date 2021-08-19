function newStack() {
  let stack = [];

  return {
    push: (ele) => stack.push(ele),
    pop: () => stack.pop(),
    printStack: () => stack.forEach(ele => console.log(ele)),
  }
}

let stack = newStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.printStack();
stack.pop();
stack.printStack();
console.log(stack);