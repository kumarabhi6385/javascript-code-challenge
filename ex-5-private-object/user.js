module.exports = class User {
  // Fields can be set to private by '#' prefix or enclosing in bracket.
  #username;
  [password];
  age;
  constructor(username, password, age) {
    this.#username = username;
    this.#password = password;
    this.age = age;
  }
};
