let str = "hello world"; //string - immutable
str = "srghrw";
let char = "@"; //string -> char
let num = 21; //number
let bigNum = 21n; //bigInt (bigger range)
let isMale = true; //value -> true, false
let x = undefined; //value -> undefined
let z = null; //value -> null
let id = Symbol("123!@#"); //Symbol unique identifier
//non-primitive
export let person = {
  fullName: "John Doe",
  age: 24,
  isMarried: false,
  address: {
    city: "New Orleans",
    country: "USA",
  },
  hobbies: ["football", "music", "coding", "fishing"],
};

const date = new Date(); //current date (object)

function sayHello() {
  console.log("hello");
}

const DB_NAME = "";
const DB_PASSWORD = "";
const API_KEY = "";
const API_BASE_URL = "";
