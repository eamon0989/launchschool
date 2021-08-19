function myBind(callback, context) {
  return function() {
    return callback.call(context);
  }
}

function printName() {
  console.log(this.name);
}

let obj = {
  name: 'Eamon',
}

let otherObj = {
  name: 'Jack',
}

let boundName = myBind(printName, obj);
let boundName2 = myBind(printName, otherObj);
boundName();
boundName2();

