/*

var generateBtn = document.querySelector("#btnsuggestion");
generateBtn.addEventListener("click", fetchData);

function fetchData() {
  fetch("http://localhost:3000/suggestionlist")
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      response.json().then(function (data) {
        let userList = ``;
        data.forEach((item) => {
          userList += `<li>${item}</li>`;
          console.log(item);
        });
        document.querySelector("#userlist").innerHTML = userList;
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}

*/

async function fetchData() {
  let response = await fetch("http://localhost:3000/suggestionlist");

  if (response.status !== 200) {
    console.log(
      "Looks like there was a problem. Status Code: " + response.status
    );
    return;
  } else {
    let data = await response.json();
    return data;
  }
}

document.querySelector("#btnsuggestion").addEventListener(
  "click",
  async () => {
    let data = await fetchData();
    let userList = ``;
    data.forEach((item) => {
      userList += `<li>${item}</li>`;
      console.log(item);
    });
    document.querySelector("#userlist").innerHTML = userList;
  },
  false
);
