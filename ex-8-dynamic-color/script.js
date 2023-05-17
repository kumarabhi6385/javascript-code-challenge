function changeBackGround(color) {
  return function () {
    document.body.style.backgroundColor = color;
  };
}

const redbgcolor = changeBackGround("red");
const bluebgcolor = changeBackGround("blue");
const greenbgcolor = changeBackGround("green");
const yellowbgcolor = changeBackGround("yellow");

document
  .querySelector("#redbutton")
  .addEventListener("click", () => redbgcolor());

document
  .querySelector("#bluebutton")
  .addEventListener("click", () => bluebgcolor());

document
  .querySelector("#greenbutton")
  .addEventListener("click", () => greenbgcolor());
