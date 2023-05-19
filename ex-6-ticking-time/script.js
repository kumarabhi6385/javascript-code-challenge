const displayTime = () => {
  let currentTime = new Date();
  const divTime = document.querySelector("#clock");
  let time = `Current Time is : ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  divTime.innerHTML = time;
};

setInterval(displayTime, 1000);
