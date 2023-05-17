var Book = require("./book");

module.exports = class TechnicalBook extends Book {
  edition;
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }
  getEdition() {
    return `The current version of this book is ${this.edition}`;
  }
};
