// import { TPerson, ID } from "./types";

// type assortation
let numbers: number[] = [1, 2, 3]; //union
let names: Array<string> = ["Alice", "Bob", "Charlie"]; // generic

let person: [string, number] = ["hello", 25]; // name, age (TUPLE)

enum OrderStatus {
  Pending = "pending", //0
  Accepted = "accepted", //1
  Rejected = "rejected", //2
  Refunded = "refunded", //3
}

let orderStatus: OrderStatus = OrderStatus.Pending;

let id: number | string = 123; //union type

//literal type -> specific value
let direction: "top" | "left" | "bottom" | "right" = "top"; //top, left, bottom, right

console.log(orderStatus);

function display(x: string): number {
  console.log("hello world");
  console.log(x.charAt(0));
  return 6;
}

function greet(name: string, age: number = 18): string {
  return `Hello, ${name}${age ? `, you are ${age} years old` : ""}!`;
}

// console.log(greet("Alice", 45));
// console.log(greet("Bob", 30));

interface IHuman {
  name: string;
  surname: string;
  age: number | string;
  isMarried: boolean;
  address: {
    city: string;
    country: string;
    street: string;
  };
  hobbies: string[];
}

class Human implements IHuman {
  name: string;
  surname: string;
  age: number;
  isMarried: boolean;
  address: { city: string; country: string; street: string };
  hobbies: string[];
  constructor(
    name: string,
    surname: string,
    age: number,
    isMarried: boolean,
    address: { city: string; country: string; street: string },
    hobbies: string[]
  ) {
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
function toArray<T>(val: T): T[] {
  return [val];
}

toArray<string>("hello"); //['hello']
toArray<number>(5); //[5]
toArray(true); //[true]

// Type Aliases - custom type
type ID = string | number;
type TPerson = {
  name: string;
  surname: string;
  age?: number | null;
};

let finCode: ID = 12;
let jane: TPerson = {
  name: "Jane",
  surname: "Doe",
  age: 23,
};

let someValue: any = "Hello, TypeScript!";

//type narrowing
if (typeof someValue == "string") {
  let strLength: number = (someValue as string).length;
  console.log(strLength);
}

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// TYPE ALIAS VS INTERFACE

type Animal = {
  name: string;
  age: Number;
};
type Cat = {
  noise: string;
};

type Lion = Animal & Cat;

interface ICat {
  name: string;
  age: number;
  makeNoise: (noise: string) => void;
}

type Person = {
  name: string;
  age: number;
};

type Address = {
  city: string;
  country: string;
};

type PersonWithAddress = Omit<Person & Address, "country">;

// function greet(person: string): string;
// function greet(person: string, age: number): string;
// function greet(person: string, age?: number): string {
//   if (age) {
//     return `Hello, ${person}. You are ${age} years old.`;
//   } else {
//     return `Hello, ${person}.`;
//   }
// }

