function validate() {
  const password = document.querySelector("#password").value;
  const message = document.querySelector("#message");
  let error = `<ul>
  <li>1. The password must have at least one lowercase letter.</li>
  <li>2. The password must have at least one uppercase letter. </li>
  <li>3. It must contain one digit and one special character. </li>
  <li>4. And it must be at least eight characters long.</li>
</ul>`;

  const regex = new RegExp(
    "(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*[0-9].*)(?=.*[@#$%^&+=])(?=.{8,})"
  );
  let result = regex.test(password);
  if (result == true) {
    message.innerHTML = "<ul><li>Password is valid</li></ul>";
    message.style.color = "green";
  } else {
    message.innerHTML = error;
    message.style.color = "red";
  }
  console.log(password);
}

document.querySelector("#submit").addEventListener("click", validate);
