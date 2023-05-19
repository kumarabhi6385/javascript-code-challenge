var Book = require("./Book");

var book = new Book(
  "Advanced Node.js Development",
  "Andrew Mead",
  "978-1788393935",
  12
);

console.log(book.getAvailability);
book.sell(5);
console.log(book.getAvailability);
book.sell(7);
console.log(book.getAvailability);
book.restock(6);
console.log(book.getAvailability);
