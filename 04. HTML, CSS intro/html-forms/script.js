const passInp = document.querySelector("#pass");
const btn = document.querySelector("#btn");

btn.addEventListener("mousedown", function () {
  passInp.setAttribute("type", "text");
});
btn.addEventListener("mouseup", function () {
  passInp.setAttribute("type", "password");
});
