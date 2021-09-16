// use an IIFE for namespacing (to avoid collisions) & closure (private variables)
(function() {
  // --------  1) Create any needed private variables (incl. functions) ----------
  const ERROR_MESSAGE = 'Invalid Password';
  const instances = [];

  function find(obj) {
    return instances.find(el => el.object === obj);
  }

  function anonymize(){
    const ALPHA_NUM = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let displayName = '';
    for(let idx = 0; idx < 16; idx += 1){
      displayName += ALPHA_NUM[Math.floor(Math.random() * ALPHA_NUM.length)];
    }
    return displayName;
  }

  // ---------------------  2) Create the needed object  ---------------------
  var Account = {
    init(email, password, firstName, lastName){
      let obj = find(this);
      if (!obj) {
        this.displayName = anonymize();
        instances.push({ object: this, email, password, firstName, lastName });
      }
      return this;
    },

    resetPassword(guessPWD, newPWD){
      let obj = find(this);
      if (obj && guessPWD === obj.password) {
        obj.password = newPWD;
        return true;
      }
      return ERROR_MESSAGE;
    },

    firstName(guessPWD){
      let obj = find(this);
      return (obj && obj.password === guessPWD ? obj.firstName : ERROR_MESSAGE);
    },

    lastName(guessPWD){
      let obj = find(this);
      return (obj && obj.password === guessPWD ? obj.lastName : ERROR_MESSAGE);
    },

    email(guessPWD){
      let obj = find(this);
      return (obj && obj.password === guessPWD ? obj.email : ERROR_MESSAGE);
    },

    reanonymize(guessPWD){
      let obj = find(this);
      if (obj && obj.password === guessPWD) {
        this.displayName = anonymize();
        return true;
      }
      return ERROR_MESSAGE;
    }
  };

  // ---------  3) Finally, add the created object to the global object ----------
  this.Account = Account;
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(bazQux, fooBar);
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'
console.log(bazQux.firstName('123456'));
console.log(fooBar.firstName('123456'));