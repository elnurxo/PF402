// const list = document.querySelector("ul");

// const listItemsArr = [...list.children];

// // console.log(listItemsArr)

// const list = document.querySelector('ul'); //first match

// const currentLI = Array.from(list.nextElementSibling.children)[2];

// console.log(currentLI)

// const contactUsSection = document.createElement("section");

// document.body.append(contactUsSection);

// const menuList = document.querySelector("#menu");

// const newLI = document.createElement("li");
// newLI.textContent = "new list item";

// const lastLi = document.createElement("li");

// const link = document.createElement("a");
// link.textContent = "google";
// lastLi.append(link);
// link.setAttribute("href", "https://www.google.com");
// link.setAttribute("target", "_blank");

// menuList.append(newLI, lastLi); //appendChild

// menuList.prepend(newLI);

// const title = document.querySelector("#galaxy");

// const img = document.createElement("img");
// img.setAttribute("title", "galaxy image");
// img.style.width = '200px';
// img.style.height = '200px';
// img.src =
//   "https://media.istockphoto.com/id/481229372/photo/spiral-galaxy-illustration-of-milky-way.jpg?s=612x612&w=0&k=20&c=O-OKRJWM_XhGv48z6OhOj_tKBwEaDsvhYKguEN1yuJM=";

// title.after(img);

// const google = document.querySelector("#google");

// console.log(google.getAttribute('href'));

// google.setAttribute("target", "_blank");

// google.removeAttribute('href');

// console.log(google.hasAttribute('target'));

const btn = document.querySelector("button");
btn.textContent = "clicked!";
btn.style.backgroundColor = "red";
btn.style.color = "#fff";
btn.style.border = "none";
btn.style.padding = "12px 22px";

// btn.setAttribute('class', 'new-class');
// btn.className = "new-class";

// btn.classList //add, remove, contains, toggle
btn.classList.add("new-class");
// btn.classList.remove('btn');
// console.log(btn.classList.contains('btn'));

// btn.classList.toggle("active");
// if (btn.classList.contains("active")) {
//   btn.classList.remove("active");
// } else {
//   btn.classList.add("active");
// }
