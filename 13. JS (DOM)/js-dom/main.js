// console.log("document: ", document);
//NODE JS RUN -> DOM, BOM

//DOM - phase 1
const title = document.getElementById("title"); //first match
// console.log(title);

let searchInput = document.getElementsByName("search"); //all match, name='search'

// console.log(searchInput); //nodeList, iterable

// searchInput = Array.from(searchInput);

// searchInput.filter((inp) => {
//   console.log(inp);
// });

//by tag name
let listItems = document.getElementsByTagName("li"); //HTML Collection

//error
// listItems.forEach((li) => {
//   console.log(li);
// });

//Array, NodeList, HTML Collection

const contents = document.getElementsByClassName("content");
// console.log(contents instanceof HTMLCollection);

const article = Array.from(document.querySelectorAll("article li")); //first match

console.log(article);
