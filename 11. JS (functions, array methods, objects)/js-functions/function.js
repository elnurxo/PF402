//simple function examples

// function declaration - void, pure function
function calculateSum(num1 = 0, num2 = 0) {
  const sum = num1 + num2;
  return sum;
}

//function arguments
// const funcResult = calculateSum(7, 6);
// console.log("result: ", funcResult);

//singleton - one responsilibty
function getPersonDetails(firstName, lastName, age, birthPlace) {
  const message = `${capitalizeStr(firstName)} ${capitalizeStr(
    lastName
  )} is ${age} years old & was born in ${birthPlace}`;

  return message;
}

function capitalizeStr(inp) {
  const res = inp[0].toUpperCase() + inp.slice(1).toLowerCase();
  return res;
}

// const result = getPersonDetails("john", "doe", 24, "Flo Rida"); //John Doe is 24 years old & was born in Flo Rida
// console.log(result);

//func expression - anonym function
const calcCircleArea = function (radius) {
  const PI = Math.PI;
  const area = 2 * PI * radius ** 2;
  return area.toFixed(2);
};

// console.log(calcCircleArea(5));

//function declaration
// function divide(a, b) {
//   if (b !== 0) {
//     return a / b;
//   } else {
//     return "number cannot be divided by zero!";
//   }
// }

// function expression
// const divide = function(a,b){
//     return a / b;
// }

//arrow function
const divide = (a, b) =>
  b !== 0 ? parseInt(a / b) : "cannot be divided by zero";

// console.log(divide(25, 2));

//rest operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
// console.log(sum(1, 2, 3, 4)); // Output: 10

//regular function
let students = [
  {
    fullName: "John Doe",
    grade: 85,
  },
  {
    fullName: "Jane Doe",
    grade: 56,
  },
  {
    fullName: "Jack Jones",
    grade: 92,
  },
  {
    fullName: "Rick Adams",
    grade: 67,
  },
  {
    fullName: "John Wick",
    grade: 45,
  },
];

//func declaration - regular
function calculateAverageGrade(classArr) {
  let sum = 0;
  for (const student of classArr) {
    sum += student.grade;
  }

  return sum / classArr.length;
}

//arrow function
const calculateAverageGradeArr = (classArr) => {
  let sum = 0;
  for (const student of classArr) {
    sum += student.grade;
  }

  return sum / classArr.length;
};

//function expression - anonym function
const calculateAverageGradeAnonym = function (classArr) {
  let sum = 0;
  for (const student of classArr) {
    sum += student.grade;
  }

  return sum / classArr.length;
};

console.log(calculateAverageGrade(students));


//function declaration (regular func), pure function, void function,
//func return type, return keyword, function signature, default parameters, 
//arrow func (ES6), anonym function (func expression), ...rest operator
//singleton principal