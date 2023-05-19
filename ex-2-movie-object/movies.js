module.exports = class Movie {
  title;
  director;
  genre;
  releaseYear;
  rating;
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was \
released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
  }
};
