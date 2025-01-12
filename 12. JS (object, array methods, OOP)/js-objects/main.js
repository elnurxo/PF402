// const obj = {}; //empty object (true)
// const obj2 = {}; //reference type (non-primitive)

// const car = {
//   //Properties, fields (key:value => entries)
//   id: 1, //number
//   modelName: "Benz", //string
//   ["brand-name"]: "Mercedes",
//   color: "black",
//   isNew: false, //boolean
//   year: 2011,
//   availableIn: ["turkey", "russia", "usa"],
// };

// car.milage = 10_000;
// delete car.isNew;

// //__proto__
// car.__proto__ = {
//   getInfo: function () {
//     return `${this["brand-name"]} ${this.modelName}, ${this.year}`;
//   },
// };

// console.log(car.getInfo());
// console.log(car.height === undefined);
// console.log("nationality" in car);
// for (const key in car) {
//     if (key in car) {
//         const element = car[key];
//         console.log(element);
//     }
// }

// {}
// new Object()
//function constructor
// function createPerson(name, age, nationality, gender) {
//   return {
//     id: Math.round(Math.random() * (1000 - 1) + 1),
//     name,
//     age,
//     nationality: nationality,
//     gender: gender,
//     createdAt: new Date(),
//   };
// }
// const john = createPerson("John", 45, "american", "male");

//function constructor
// function Car(brandName, modelName, year, milage = 0) {
//   this.id = Math.round(Math.random() * (1000 - 1) + 1);
//   this.brandName = brandName;
//   this.modelName = modelName;
//   this.year = year;
//   this.milage = milage;
//   this.createdAt = new Date();
// }

// const bmw = new Car("bmw", "x6", 2012, 10_000);
// console.log(bmw);
// console.log(john);

//mutable
const animal = {
  id: 1,
  name: "Garfield",
  age: 4,
};

// const { name } = animal; //const name = animal.name;
// console.log(name);

// const { log: x } = console; //destruct

// x("hello");

//object freeze - immutable
// Object.freeze(animal);
// animal.color = 'orange';

// console.log(animal);

const obj = { id: 1, name: "test" }; //JSON - Js object notation
const { id, name } = obj;
const obj2 = { id: 1 };
const { id: id2 } = obj2;
// console.log(JSON.stringify(obj) === JSON.stringify(obj2));

// console.log({ ...obj } === { ...obj2 });
