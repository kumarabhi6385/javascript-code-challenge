const User = require("./user");

let user = new User("Jhon", "passAdmin123!", 35);

//Below line should give undefined
console.log(user.username);
console.log(user.password);
