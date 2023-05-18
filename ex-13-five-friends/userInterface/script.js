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

/*
async function getUserSuggession(baseurl) {
  const url = baseurl + "/suggestionlist";
  const response = await fetch(url, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain",
    },
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

document.querySelector("#btnsuggesstion").addEventListener(
  "click",
  async (e) => {
    getUserSuggession("http://localhost:3000").then((data) => {
      let userList = ``;
      for (const item in data) {
        userList += `<li>${item}</li>`;
      }
      document.querySelector("#userlist").innerHTML = userList;
    });
  },
  false
);
*/
