//array iteration methods
// forEach, map, flatMap, filter, reduce, reduceRight,
//every, some, from, keys, entries, with, spread ...

let numbers = [3, 1, 7, 5, 67, 31, 3, 53, 12, 245, 6, 53, 7, 82];
const cars = [
  "bmw",
  "mercedes",
  "kia",
  "hyundai",
  "Honda",
  "opel",
  "toyota",
  "nissan",
];

//butun elementleri 2 misline cevir
// numbers.forEach((num, idx, arr) => {
//   return num * 2;
// });

// numbers = numbers.map((num, idx, arr) => {
//   return num * 2;
// });

// console.log("numbers: ", numbers);

// numbers = numbers.map((num) => Math.pow(num, 2));

// console.log(numbers);

let matrix = [[1, 2], 3, [4, 5], [[6, 7], 8]]; //3

//flat

// console.log(matrix.flat(2));

// matrix = matrix.flatMap((num, idx, arr) => {
//   return num;
// });

// console.log(matrix);

// const filteredNumbers = numbers.filter((num, idx) => {
//     return num % 2 == 0;
// });

// console.log(filteredNumbers);

// const filteredCars = cars.filter((car)=>{
//     return car.split('')[0].toLowerCase() === 'h'
// });

// console.log(filteredCars);

let products = [
  {
    id: "1",
    name: "macBook",
    price: 2000,
    isDiscounted: false,
  },
  {
    id: "2",
    name: "lenovo legion",
    price: 1800,
    isDiscounted: true,
  },
  {
    id: "3",
    name: "hp pavilion",
    price: 2500,
    isDiscounted: true,
  },
  {
    id: "4",
    name: "dell",
    price: 1800,
    isDiscounted: true,
  },
  {
    id: "5",
    name: "hp omen",
    price: 1600,
    isDiscounted: true,
  },
];

const greaterThan2000 = products.find((product) => {
  return product.price > 2000;
});

const filteredProducts = products.filter((product) => {
  return product.price > 1500 && product.price < 2500;
});

products = products.map((product) => {
  return { ...product, price: Number(product.price * 0.8) };
});

const totalPrice = products.reduce((acc, product) => {
  return (acc += product.price);
}, 0);

// console.log("total price: ", totalPrice);
// console.log("average: ", totalPrice / products.length);

//numbers array-indeki butun elementler musbetdirmi?

// const checkAllPositive = numbers.every((num) => {
//   return num > 0;
// });

// console.log(checkAllPositive);

// const checkAtLeastOneDiscounted = products.some((prod) => prod.isDiscounted);

// console.log(checkAtLeastOneDiscounted);

// const test = products.with(2,'test');

// console.log(test);
