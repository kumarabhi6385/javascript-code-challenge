module.exports = class Book {
  title;
  author;
  isbn;
  noOfCopies;
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.noOfCopies = numCopies;
    this.isbn = ISBN;
  }

  get getAvailability() {
    if (this.noOfCopies === 0) {
      return "Out of Stock";
    } else if (this.noOfCopies > 10) {
      return "In stock";
    } else {
      return "Low stock";
    }
  }
  sell(numSold = 1) {
    if (this.noOfCopies >= numSold) {
      this.noOfCopies -= numSold;
    } else {
      console.log(this.noOfCopies);
      throw new Error(
        "Number of copies can not be sold greater than its availability!"
      );
    }
  }
  restock(numCopies = 5) {
    if (numCopies > 0) {
      this.noOfCopies += numCopies;
    } else {
      throw new Error("Number of copies can not be negative!");
    }
  }
};
