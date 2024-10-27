// variables
// let, var, const

// string

//naming conventions - Pascal, camelCase, snake_case, kabab-case

// let FullName = 'john doe';

// let isMarried = true;

// let is_married = true;

// let is-married = true;

let num1 = 5;
let num2 = 6;

let sum = num1 + num2;
let minus = num1 - num2;
let multiplication = num1 * num2;

// console.log("sum of two numbers is: ", sum);
// console.log("minus of two numbers is: ", minus);
// console.log(multiplication);
// console.log(num1 / num2);
// console.log(num1 ** 2);
// console.log(10 % 7);
// console.log(--num1);

// let age = 45;
let x = 5;
let y = 15;

// x **= y; //x = x ** y

// let isMarried = true;

// console.log(7 > 4 || (5 !== 4 && (true || false) && 7 > 13));

// console.log('hello' + 4 + 5 + ' ' + 9 + 'test');

//conditions
let fullName = "Nesrin Agayeva";
let isMale = false;
let age = 18;
let balance = 40;
let ticket_price = 8;

if (age > 18) {
  balance -= ticket_price; //balance = balance - ticket_price
  console.log("current balace: ", balance);
  console.log("welcome to the cinema!");
} else if (age == 18) {
  balance -= ticket_price / 2;
  console.log("current balace: ", balance);
  console.log("welcome to the cinema!");
} else {
  console.log("get boyu gelersen!");
  console.log("current balace: ", balance);
}

// let number1 = 15;
// let number2 = 15;

// if(number1 > number2){
//     console.log('number 1: ',number1);
// }
// else if(number1===number2){
//     console.log('number 1 and 2 is equal')
// }
// else{
//     console.log('number 2: ',number2)
// }
