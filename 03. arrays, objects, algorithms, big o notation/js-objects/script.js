// const student = {
//   //object field - key: value
//   fullName: "John Doe",
//   age: 21,
//   GPA: 4.5,
//   hobbies: ["music", "dance", "coding"],
//   isMarried: false,
//   address: {
//     city: "Baku",
//     country: "Azerbaijan",
//     postCode: 1403,
//   },
//   major: "web programming",
//   course: "code academy",
// };

// student.age = 23;
// student.university = "BSU";

// console.log(student)

// console.log(student.address.country);

//------------------------------------------
// const user = {
//     username: "john123",
//     password: "Admin123@"
// };

// const user2 = user;

// user2.username = "jany123";

// console.log(user2);
// console.log(user);

//------------------------------------
const employee = {
  //object fields
  fullName: "John Wick",
  birthYear: 1988,
  salary: 5000,
  department: "IT",
  experienceYear: 7,
  //object methods
  getInfo: function () {
    return `${this.fullName} works in ${this.department}`;
  },
};

// employee.salary = 6000;
// employee.isMale = true;

// console.log(employee);
// console.log(employee.getInfo());

// const age = 19;
// const hasPermission = age >= 18 ? true : false;
// console.log(hasPermission);

// const user = {
//   username: "user123",
//   password: "User123@",
//   isLogged: true,
//   email: "user@gmail.com",
//   isAdmin: false,
//   checkLogged: function () {
//     return `${this.username} is ${this.isLogged === false ? "not" : ""} logged`;
//   },
//   login: function (username, pass) {
//     if (this.username === username && this.password === pass) {
//       this.isLogged = true;
//       return "welcome user";
//     } else {
//       return `invalid credentials`;
//     }
//   },
// };

// console.log(user.checkLogged());
// console.log(user.login("user123", "User123@"));

let bmw_x5 = {
  brandName: "bmw",
  modelName: "x5",
  milage: 10_000,
  currentFuel: 45,
  price: 45000,
  year: 2018,
  fuelCapacity: 80,
  fuelFor1KM: 5,
};
let bmw_x6 = {
  brandName: "bmw",
  modelName: "x6",
  milage: 35_000,
  price: 55000,
  currentFuel: 20,
  year: 2020,
  fuelCapacity: 75,
  fuelFor1KM: 7,
};
let mercedes_benz = {
  brandName: "mercedes",
  modelName: "benz",
  milage: 100_500,
  currentFuel: 5,
  price: 20000,
  year: 2008,
  fuelCapacity: 60,
  fuelFor1KM: 8,
};
let kia_optima = {
  brandName: "kia",
  modelName: "optima",
  milage: 35_000,
  currentFuel: 50,
  price: 24000,
  year: 2021,
  fuelCapacity: 60,
  fuelFor1KM: 5,
  drive: function (km) {
    if (this.currentFuel / this.fuelFor1KM >= km) {
        this.milage += km;
        this.currentFuel -= this.fuelFor1KM * km;
        return `car drived`;
    }
    else{
        return `not enough fuel`;
    }
  },
  getAge: function(){
    return 2024 - this.year
  }
};

const cars = [bmw_x5, bmw_x6, mercedes_benz, kia_optima];
//1 - modeli bmw olanlarin sayini tapin +
//2 - probegi 10 minden yuxari olanlari tapin +
//3 - ili 2010-2020 araliginda olanlarin qiymet ortalamasini tapin +
//4 - umumi butun mashinlarin benzin serfiyati ortalamasi (fuelFOR1km) +
//5 - benzini 50%-den yuxari olan mashinlarin adlarini console-a verin
//6 -

let bmwCounter = 0;
let milageGreaterThan10K = 0;
let priceSum = 0;
let totalFuel = 0;
let count = 0;

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];

  totalFuel += car.fuelFor1KM;

  if (car.brandName === "bmw") {
    bmwCounter++;
  }
  if (car.milage > 10000) {
    milageGreaterThan10K++;
  }
  if (car.year >= 2010 && car.year <= 2020) {
    priceSum += car.price;
    count++;
  }
  if (car.fuelCapacity / 2 > car.currentFuel) {
    console.log(`${car.brandName} ${car.modelName}`);
  }
}
// console.log(`you have ${bmwCounter} BMW`);
// console.log(
//   `you have ${milageGreaterThan10K} cars that has milage greater than 10k`
// );
// console.log(`average price is: ${priceSum / count}`);
// console.log(`average fuel consumption is ${totalFuel / cars.length}`);



// console.log(kia_optima.drive(6));
// console.log(kia_optima);
// console.log(kia_optima.getAge());