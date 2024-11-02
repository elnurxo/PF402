//js data types
//primitive data type
// console.log("hello string");
// console.log(23);
// console.log(23n);
// console.log(true);
// console.log(undefined);
// console.log(null);
// console.log(Symbol("123"));
//non-primitive
// console.log({});

//js operator

//arithmetic -> - + * / % ++ --
//comparison -> > < >= <= == === != !==
//logical -> || && !
//assignment -> = += -= *=

//condition statement -> if, else, else if, switch case
// const weekDay = 6;

// switch (weekDay) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log("invalid week day");
//     break;
// }

//array - list (python, c#, c++, js)
//reference type -> [], {}
// const numbers = [21, 54, 68, 77, 95];

// console.log(numbers.length);
// console.log(numbers[numbers.length - 1]);
// console.log(numbers[10]);

// numbers[1] = 101;
// numbers = [3, 4, 65];
// console.log(numbers);

let students = [
  "emil",
  "fidane",
  "yashar",
  "elnure",
  "dunya",
  "aysu",
  "merdimazar",
];

// console.log(students[0][1]);

// students[5] = "nermine";
// students[6] = "nesib";
// students[7] = "leman";
// students[15] = "elnur";
// let eCounter = 0;
// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i].length; j++) {
//     if(students[i][j] === 'e'){
//         eCounter++;
//     }
//   }
// }
// console.log(eCounter);

// console.log(students.length);

//loop statements - for, while, do while (forEach, for..of, for..in)

//infinite loop
// for (let i = 0; i < 10; i--) {
//   console.log(i + 1);
// }

// let numbers = [-23, 11, 24, 56, -78, 77, 45, 99, 101];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if(element % 2 === 0 && element > 0 ){
//         console.log(element);
//     }
// }

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element);
// }

// let major = "programming";

// let counter = 0;
// for (let i = 0; i < major.length; i++) {
//   if (major[i] === "m") {
//     counter++;
//   }
// }
// console.log(counter);

// let fruits = "banana apple pear kiwi melon";
// let fruitCounter = 0;
// for (let i = 0; i < fruits.length; i++) {
//     if(fruits[i] === " "){
//         fruitCounter++;
//     }
// }
// console.log(fruitCounter+1);

let n = 11;
let m = 35;

// while (n <= m) {
//     console.log(n);
//     n++;
// }

// while (n % 10 === 0) {
//     console.log('inside while scope');
//     n++;
// }
// do {
//   console.log("inside do while scope");
//   n++;
// } while (n % 10 === 0);

// for (const student of students) {
//     console.log(student);
// }


