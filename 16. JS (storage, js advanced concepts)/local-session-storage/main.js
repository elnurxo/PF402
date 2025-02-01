console.log("hello NODE JS!");

//BOM - DOM (localStorage, localStorage - BOM)
// window.localStorage
//setItem(key, value), getItem(key),
// removeItem(key), clear(), key(index), length

// window.addEventListener('load', function(){
//     this.localStorage.setItem('test','hey there!');
// })

// to string -> JSON.stringify
// to JSON -> JSON.parse

const btn = document.querySelector("#btn");
const num = document.querySelector("#num");

btn.addEventListener("click", () => {
  const randomNumber = Math.round(Math.random() * 100);
  localStorage.setItem("number", JSON.stringify(randomNumber));
  num.textContent = randomNumber;
});

document.addEventListener("DOMContentLoaded", function () {
  if (JSON.parse(localStorage.getItem("number"))) {
    num.textContent = JSON.parse(localStorage.getItem("number"));
  } else {
    num.textContent = "no such local storage!";
    num.style.color = "red";
  }
});

const removeBtn = document.querySelector("#remove");
removeBtn.addEventListener("click", function () {
  localStorage.removeItem("number");
  num.textContent = "";
});
