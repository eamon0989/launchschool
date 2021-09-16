const INVALID_PASSWORD = 'Invalid password.';

const Account = (function Account() {
  const data = {};

  const isInvalidPassword = (password, displayName) => (
    password !== data[displayName].password
  );

  const randomString = () => {
    const RESULT_LENGTH = 16;
    const DIGITS        = '0123456789';
    const LOWERCASE     = 'abcdefghijklmnopqrstuvwxyz';
    const UPPERCASE     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const ELIGIBLE      = DIGITS + LOWERCASE + UPPERCASE;

    let result = '';
    for (let i = 0; i < RESULT_LENGTH; i += 1) {
      const randomIndex = Math.floor(Math.random() * ELIGIBLE.length);
      result += ELIGIBLE.charAt(randomIndex);
    }

    return result;
  };

  const anonymize = () => {
    const displayName = randomString();
    data[displayName] = {};
    return displayName;
  };

  return {
    email(password) {
      if (isInvalidPassword(password, this.displayName)) {
        return INVALID_PASSWORD;
      }

      return data[this.displayName].email;
    },

    firstName(password) {
      if (isInvalidPassword(password, this.displayName)) {
        return INVALID_PASSWORD;
      }

      return data[this.displayName].firstName;
    },

    init(email, password, firstName, lastName) {
      this.displayName = anonymize();
      data[this.displayName] = {
        email,
        password,
        firstName,
        lastName,
      };

      return this;
    },

    lastName(password) {
      if (isInvalidPassword(password, this.displayName)) {
        return INVALID_PASSWORD;
      }

      return data[this.displayName].lastName;
    },

    reanonymize(password) {
      if (isInvalidPassword(password, this.displayName)) {
        return INVALID_PASSWORD;
      }

      const oldDisplayName = this.displayName;
      this.displayName = anonymize();
      data[this.displayName] = data[oldDisplayName];
      delete data[oldDisplayName];

      return true;
    },

    resetPassword(password, newPassword) {
      if (isInvalidPassword(password, this.displayName)) {
        return INVALID_PASSWORD;
      }

      data[this.displayName].password = newPassword;
      return true;
    },
  };
}());


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
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'