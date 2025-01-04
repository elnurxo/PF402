// import x, { y } from "./helper.js";
// import { person } from "./datatypes.js";

// let, var, const (function expression)

// var userName = "john_doe123";

// function greet() {
//   var x = 5;
//   var x = 21;
//   //string literal template
//   console.log(`function scope: ${x}`);
//   console.log(userName);
//   console.log("hello");
// }

// console.log("global:", x);
// console.log("global username: ", userName);
// greet();

//output -> global x?, global username?, function scope x?, username?, hello

//scope -> function scope, global scope, block scope

//block scope -> condition, loop

let num = 21;

num *= 2; //num = num * 2

//implicit type conversion
console.log(!!0);

console.log(typeof +"abc"); //number

//explicit
console.log(Boolean(0));

let r = 4;
console.log(++r); //5

// console.log(r); //5

// let age = 18;
// let message = age >= 18 ? "Adult" : "Minor";
// console.log(message); // "Adult"

// let profileImage = null;
// console.log(profileImage ?? "Avatar Image"); // "Default Name"

let user = { name: "Alice" };
console.log(user?.address?.city); // undefined

let message = "test";

message.repeat(10);

const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number); // Prints 1, 2, 3, 4, 5
}

//for, while, do...while, for of (object key), for in (element)

let userName = new String("john");

// let fruits = ["apple", "banana"];
// let moreFruits = ["cherry", "date"];
// let allFruits = fruits.concat(moreFruits, [1, 2]);

let fruits = ["apple", "banana", "cherry"];
//shallow copy
let copyFruits = [...fruits];

fruits[0] = "test";
