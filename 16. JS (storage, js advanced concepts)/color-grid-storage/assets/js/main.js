const btn = document.querySelector("#btn");
const wrapper = document.querySelector(".wrapper");

//initialize empty colors array for local storage
document.addEventListener("DOMContentLoaded", function () {
  if (!JSON.parse(localStorage.getItem("colors"))) {
    localStorage.setItem("colors", JSON.stringify([]));
  } else {
    const localColors = JSON.parse(localStorage.getItem("colors"));
    localColors.forEach((randomColor) => {
      wrapper.innerHTML += `<div style="background-color: ${randomColor}" class="box"></div>`;
    });
  }
});

btn.addEventListener("click", function () {
  const randomRed = Math.round(Math.random() * 256);
  const randomGreen = Math.round(Math.random() * 256);
  const randomBlue = Math.round(Math.random() * 256);
  const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  wrapper.innerHTML += `<div style="background-color: ${randomColor}" class="box"></div>`;

  //local Storage
  const prevColorFromLocal = JSON.parse(localStorage.getItem("colors"));
  localStorage.setItem(
    "colors",
    JSON.stringify([...prevColorFromLocal, randomColor])
  );
});

const clearAllBtn = document.querySelector('#clear-all');

clearAllBtn.addEventListener('click',function(){
    if(window.confirm('are you to delete all boxes?')){
        wrapper.innerHTML = '';
        localStorage.setItem('colors',JSON.stringify([]));
    }
})
