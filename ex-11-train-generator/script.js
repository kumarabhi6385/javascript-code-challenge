function* nextStation() {
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Grand Central";
}

const trainLine = nextStation();

document.querySelector("#btnNextStation").addEventListener("click", () => {
  let currentStop = trainLine.next();
  if (currentStop.done) {
    document.querySelector("#btnNextStation").setAttribute("disabled", true);
    console.log("Done");
  } else {
    document.querySelector(
      "#nextStattion"
    ).innerHTML = `Next station is ${currentStop.value}`;
    console.log(currentStop.value);
  }
});
