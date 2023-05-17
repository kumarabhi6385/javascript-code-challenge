//Load HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

var users = [
  "Sherlock Homes",
  "John Watson",
  "Enola Holmes",
  "Inspector Lestrade",
  "Mrs Hudson",
  "Professor Moriarty",
  "Mycroft Holmes",
  "Mary Morstan",
  "Molly Hooper",
  "Colonel Moran",
];

function getRandomItem(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getSuggestionList() {
  let data = [];
  for (let i = 0; i < 5; i++) {
    let item = getRandomItem();
    data.push(item);
  }
  return data;
}

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  if (req === "./suggestionlist") {
    let data = getSuggestionList();
    res.end(data);
  }
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
