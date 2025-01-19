const heading = document.querySelector("h1"); //first match

// window.addEventListener('load', function(){
//     heading.textContent = 'Hello JS';
// })

// document.addEventListener('DOMContentLoaded',function(){
//     heading.innerText = 'Hello JS';
// });

// heading.style.color = 'red';
// heading.style.backgroundColor = 'blue';

// heading.className = 'active';
// heading.setAttribute('class','active');
// heading.classList.add('active');
// heading.id = 'title';
// heading.src = '';

const htmlLink = document.createElement("a");
htmlLink.textContent = "html docs";
htmlLink.setAttribute("href", "https://html.com");
// document.body.append(htmlLink);
// heading.after(htmlLink);

// const listItem = document.createElement('li');
// listItem.append(htmlLink);

// heading.nextElementSibling.prepend(listItem);

//querySelector, querySelectorAll, getElementById
//getElementsByTagName, getElementsByName, getElementsByClassName

//parent, parentNode, childNode, children, nextSibling, prevSibling

//getAttr, setAttr, hasAttr, removeAttr

//className -> add, remove, contains, toggle

// elm.id, elm.src, elm.className

// elm.style.color ...

//EVENTS

//mouse events - click, dblclick, mousedown, mouseup, mouseover, mouseout,
// contextmenu

//keyboard events - keyup, keydown, keypress (deprecated)

//window events - load, unload, scroll, resize

//form events - submit, reset ...

// inner event -> <h1 onclick='myFunc()'></h1>

// add event listener -> element.addEventListener('event_type', cb(ev))

// element.onclick = function(){}

const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener("click", function () {
  // math random
  // RGB (red, green, blue) (235,35,136) => white
  const red = generateRandomNum();
  const green = generateRandomNum();
  const blue = generateRandomNum();

  box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

function generateRandomNum() {
  return Math.round(Math.random() * 256);
}

//form validator - min 5 char
const passInput = document.querySelector(".password-input");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("form");
const errorMsg = document.querySelector(".error-msg");

// 2 event - input keyup (validate), form submit
passInput.addEventListener("keyup", function (e) {
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{6,}$/;
  console.log('test regex: ', PASSWORD_REGEX.test(e.target.value));
  if (!PASSWORD_REGEX.test(e.target.value)) {
    //error - validation failed
    errorMsg.classList.replace("d-none", "d-block");
    submitBtn.setAttribute("disabled", true);
  } else {
    errorMsg.classList.replace("d-block", "d-none");
    submitBtn.removeAttribute("disabled", true);
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault(); //default browser
  const successMsg = document.createElement("span");
  successMsg.classList.add("text-center", "text-success", "mx-auto", "d-block");
  successMsg.textContent = "Password Reset Successfully!";
  e.target.after(successMsg);
  passInput.value = "";
});

// const text = "JAVASCRIPT";
// const REGEX = /java/i;
// const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// console.log("EMAIL REGEX VALIDATION: ", EMAIL_REGEX.test("elnur@code.edu.az"));

// const CAR_SERIAL_NUMBER_REGEX = /^(77|99|90|10)-[A-Z]{2}-\d{3}$/; //77-AZ-675

// console.log("CAR REGEX: ",  );
