var TechnicalBook = require("./technicalBook");

var book = new TechnicalBook(
  "Advanced Node.js Development",
  "Andrew Mead",
  "978-1788393935",
  12,
  "2nd edition"
);

console.log(book.getAvailability);
book.sell(5);
console.log(book.getAvailability);
book.sell(7);
console.log(book.getAvailability);
book.restock(6);
console.log(book.getAvailability);
console.log(book.getEdition());
