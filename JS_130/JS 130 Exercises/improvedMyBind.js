function myBind(callback) {
  return function(context) {
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

let boundName = myBind(printName);
boundName(obj);
boundName(otherObj);

