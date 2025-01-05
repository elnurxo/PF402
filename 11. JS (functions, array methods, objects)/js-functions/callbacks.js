//outer variable

function processUserInput(cb) {
  //local variable
  const userName = "Bob";
  cb(userName);
}

//cb func
function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

// //argument is function
processUserInput(sayHi); // Output: Hi, Alice!

//HOF - Higher Order Function
// function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback();
// }

// greet("Alice", () => {
//   console.log("This is the callback function.");
// });

// function calculate(a, b, callback) {
//   const result = a + b;
//   callback(result);
// }

// calculate(3, 7, (sum) => {
//   console.log(`The sum is: ${sum}`);
// });

//HOF
function compare(a, b, callback) {
  callback(a, b);
}

//callback function
compare(10, 20, (x, y) => {
  if (x > y) {
    console.log(`${x} is greater than ${y}`);
  } else {
    console.log(`${x} is less than or equal to ${y}`);
  }
});
