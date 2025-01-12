//Array search methods - indexOf, lastIndexOf, includes, find, findIndex, findLast, findLastIndex

const numbers = [3, 1, 7, 5, 67, 31, 3, 53, 12, 245, 6, 53, 7, 82];
const cars = [
  "bmw",
  "mercedes",
  "kia",
  "hyundai",
  "honda",
  "opel",
  "toyota",
  "nissan",
];

//array-deki 2-ci 53 elementinin indexini tap (yoxdursa -1 qaytar)
function findSecondElementIndex(arr, searchElement) {
  return arr.indexOf(searchElement, arr.indexOf(searchElement) + 1);
}

// console.log(cars.indexOf("bmw", cars.indexOf("bmw") + 1));
// console.log(numbers.lastIndexOf(53));

// console.log(cars.includes("bmw"));

// if (!cars.includes("bmw")) {
//   cars.push("bmw");
// }

//predicate - true/false return eden callback
// console.log(
//   numbers.find((val) => {
//     return val > 9 && val < 100;
//   })
// );

// console.log(
//   numbers.find((num) => {
//     return num % 2 == 0;
//   })
// );

// console.log(cars.find((car)=>{
//     return car.split('')[0] === 'h';
// }));

// 'hyundai' => ['h','y','u']

// console.log(
//   numbers.findIndex((num) => {
//     return num > 0;
//   })
// );
