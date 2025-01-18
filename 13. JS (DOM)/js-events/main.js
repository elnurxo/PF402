const btn = document.querySelector("#clck");

btn.addEventListener("click", function () {
  btn.textContent = "clicked!";
  btn.setAttribute("disabled", true);

  //add welcome heading after button
  const welcome = document.createElement("h2");
  welcome.textContent = "welcome!";
  btn.after(welcome);
  //   document.body.innerHTML += "<h1>welcome</h1>";
});

//dark-light mode
const modeBtn = document.querySelector("#mode");
const box = document.querySelector(".box");

modeBtn.addEventListener("click", function (ev) {
  //   const isDark = this.textContent.includes("light");
  //   console.log("is dark: ", isDark);
  //   if (isDark) {
  //     box.style.backgroundColor = "white";
  //     ev.target.textContent = "witch to dark mode";
  //   } else {
  //     box.style.backgroundColor = "black";
  //     ev.target.textContent = "witch to light mode";
  //   }

  box.classList.toggle("dark");

  if (box.classList.contains("dark")) {
    //to light mode
    ev.target.textContent = "switch to light mode";
  } else {
    ev.target.textContent = "switch to dark mode";
  }
});

const accordionBtn = document.querySelector("#accordion");
const text = document.querySelector(".text");

accordionBtn.addEventListener("click", function (ev) {
  text.classList.toggle("hide");

  if (text.classList.contains("hide")) {
    ev.target.textContent = "show text";
  } else {
    ev.target.textContent = "hide text";
  }
});

const passInp = document.querySelector("input");
const eyeBtn = document.querySelector(".eye");

eyeBtn.addEventListener("mousedown", function (e) {
  passInp.setAttribute("type", "text");
});
eyeBtn.addEventListener("mouseup", function (e) {
  passInp.setAttribute("type", "password");
});

document.querySelector("#date").addEventListener("click", (e) => {
  const dateContent = document.createElement("h4");
  dateContent.textContent = new Date().toISOString();
  e.target.after(dateContent);
});

const inp = document.querySelector("#full-name");
const inpVal = document.querySelector(".inp-val");

// inp.addEventListener("keyup", function (e) {
//   console.log(e.key);
//   console.log(e.keyCode);
//   if (e.key === "Enter") {
//     document.body.style.background = "red";
//   }
//   if (e.target.value.length === 0) {
//     inpVal.textContent = "...";
//   } else {
//     inpVal.textContent = e.target.value;
//   }
// });

const form = document.querySelector("form");

form.addEventListener("submit", function (ev) {
  //browser default behaviour - preventDefault
  ev.preventDefault();
  console.log("hey form submitted!");
});

const countrySelectOption = document.querySelector("select");

countrySelectOption.addEventListener("change", function (e) {
  console.log(e.target.value);
});

window.addEventListener("scroll", function () {
  console.log("window scrolled!");
});

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("dom content loaded!");
});
