"use strict";
// import { TPerson, ID } from "./types";
// type assortation
let numbers = [1, 2, 3]; //union
let names = ["Alice", "Bob", "Charlie"]; // generic
let person = ["hello", 25]; // name, age (TUPLE)
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "pending";
    OrderStatus["Accepted"] = "accepted";
    OrderStatus["Rejected"] = "rejected";
    OrderStatus["Refunded"] = "refunded";
})(OrderStatus || (OrderStatus = {}));
let orderStatus = OrderStatus.Pending;
let id = 123; //union type
//literal type -> specific value
let direction = "top"; //top, left, bottom, right
console.log(orderStatus);
function display(x) {
    console.log("hello world");
    console.log(x.charAt(0));
    return 6;
}
function greet(name, age = 18) {
    return `Hello, ${name}${age ? `, you are ${age} years old` : ""}!`;
}
class Human {
    constructor(name, surname, age, isMarried, address, hobbies) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isMarried = isMarried;
        this.address = address;
        this.hobbies = hobbies;
    }
}
// let john: IHuman = {
//   name: "John",
//   surname: "Doe",
//   age: 21,
//   isMarried: true,
//   address: {
//     city: "Baku",
//     country: "Azerbaijan",
//     street: "Nizami 16.",
//   },
//   hobbies: ["football", "basketball", "racing"],
// };
//GENERICS // GENERIC TYPE FUNCTION
function toArray(val) {
    return [val];
}
toArray("hello"); //['hello']
toArray(5); //[5]
toArray(true); //[true]
let finCode = 12;
let jane = {
    name: "Jane",
    surname: "Doe",
    age: 23,
};
let someValue = "Hello, TypeScript!";
//type narrowing
if (typeof someValue == "string") {
    let strLength = someValue.length;
    console.log(strLength);
}
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
// function greet(person: string): string;
// function greet(person: string, age: number): string;
// function greet(person: string, age?: number): string {
//   if (age) {
//     return `Hello, ${person}. You are ${age} years old.`;
//   } else {
//     return `Hello, ${person}.`;
//   }
// }
