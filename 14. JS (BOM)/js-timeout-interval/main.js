const inp = document.querySelector("input");
const timer = document.querySelector("#timer");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const alarm = document.querySelector("#alarm");

let intervalID;
let seconds;
startBtn.addEventListener("click", function () {
//   window.history.back();
  return;
  if (inp.value.trim() === "") {
    window.alert("input is empty!");
  } else {
    this.setAttribute("disabled", true);
    seconds = Number(inp.value);
    inp.value = "";
    intervalID = setInterval(() => {
      timer.textContent = seconds;
      seconds -= 1;
      if (seconds === -1) {
        alarm.play();
        clearInterval(intervalID);
        startBtn.removeAttribute("disabled", true);
      }
    }, 1000);
  }
});

pauseBtn.addEventListener("click", function () {
  this.classList.toggle("paused");
  if (this.classList.contains("paused")) {
    this.textContent = "resume";
    const currentLeftSeconds = Number(timer.textContent);
    timer.textContent = currentLeftSeconds;
    clearInterval(intervalID);
  } else {
    this.textContent = "pause";
    intervalID = setInterval(() => {
      timer.textContent = seconds;
      seconds -= 1;
      if (seconds === -1) {
        alarm.play();
        clearInterval(intervalID);
      }
    }, 1000);
  }
});

resetBtn.addEventListener("click", function () {
  timer.textContent = 0;
  clearInterval(intervalID);
  startBtn.removeAttribute("disabled", true);
});
