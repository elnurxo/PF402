const hourSpan = document.querySelector("#hour");
const minuteSpan = document.querySelector("#minute");
const secondSpan = document.querySelector("#second");

setInterval(() => {
  const currentDate = new Date();
  const currentHour =
    currentDate.getHours() > 9
      ? currentDate.getHours()
      : "0" + currentDate.getHours();
  const currentMinutes =
    currentDate.getMinutes() > 9
      ? currentDate.getMinutes()
      : "0" + currentDate.getMinutes();
  const currentSeconds =
    currentDate.getSeconds() > 9
      ? currentDate.getSeconds()
      : "0" + currentDate.getSeconds();

  hourSpan.textContent = currentHour;
  minuteSpan.textContent = currentMinutes;
  secondSpan.textContent = currentSeconds;
}, 1000);
