function factorial(number) {
  if (number <= 0) throw Error("string length must be greater than zero");
  if (number === 1) return 1;
  else return number * factorial(number - 1);
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Please enter any string: ", (name) => {
  let playCount = factorial(name.length);
  console.log(`You can play upto ${playCount}`);
  readline.close();
});
