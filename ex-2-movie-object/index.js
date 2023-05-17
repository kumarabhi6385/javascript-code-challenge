var Movie = require("./movies");

var movie = new Movie(
  "The Matrix",
  "Lana Wachowski",
  "Action, Sci-fi",
  1999,
  8.7
);

console.log(movie.getOverview());
