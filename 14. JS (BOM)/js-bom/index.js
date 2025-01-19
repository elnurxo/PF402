console.log(window);

//window -> alert, prompt, confirm

// window.alert("hey Javascript BOM!");
// const age = Number(window.prompt("enter your age: ")); //prompt STRING
// window.alert(`your age will be : ${age + 1} next year`);
// const checkAge = window.confirm("are you older than 18?");
// console.log(checkAge);

//window -> setInterval, setTimeout, clear ...
function generateRandomNum() {
  return Math.round(Math.random() * 256);
}
const intervalID = setInterval(() => {
  const red = generateRandomNum();
  const green = generateRandomNum();
  const blue = generateRandomNum();

  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}, 1000);

const timeOutID = setTimeout(() => {
  console.log('timeout after 4 seconds!');
}, 4000); //4 seconds

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  clearInterval(intervalID);
  clearTimeout(timeOutID);
});

//window -> close, reload, open, fetch

//window - location, navigator, history

// window.onclick
