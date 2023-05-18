function urlify(input) {
  let output = input
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  return output;
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Provide any input string containing space, special character and combination of small and capital letter?`,
  (name) => {
    let output = urlify(name);
    console.log(`Processed output ${output}!`);
    readline.close();
  }
);
