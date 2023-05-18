const http = require("http");

const port = process.env.PORT || 3000;

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
  while (data.length < 5) {
    let item = getRandomItem(users);
    if (data.includes(item) === false) {
      data.push(item);
    }
  }
  return data;
}

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
  } else {
    const headers = {
      "Access-Control-Allow-Origin": "*" /* @dev First, read about security */,
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
      /** add other headers as per requirement */
    };
    console.log(req.url);
    if (req.url == "/suggestionlist") {
      let data = getSuggestionList();
      res.writeHead(200, headers);
      res.write(JSON.stringify(data));
      res.end();
    } else {
      res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
    }
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
