const outerBox = document.querySelector(".outer-box");
const innerBox = document.querySelector(".inner-box");
const childBox = document.querySelector(".child-box");

//default event flow - bubbling -> target -> html
//capturing -> html -> target

outerBox.addEventListener(
  "click",
  function (ev) {
    //event delegation
    ev.stopPropagation();
    console.log("OUTER BOX CLICKED!");
  },
  { once: true }
);

innerBox.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("INNER BOX CLICKED!");
});

childBox.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("CHILD BOX CLICKED!");
});
