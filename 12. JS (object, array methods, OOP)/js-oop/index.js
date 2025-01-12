//OOP - Object Oriented Programming
//OOP principles - encapsulation, inheritance, abstraction, polymorphism

//Classes
class Human {
  //fields - properties
  id;
  firstName;
  lastName;
  age = 0;
  isMale;
  createdAt;

  //constructor
  constructor(firstName, lastName, age, isMale) {
    this.id = new Date().getTime(); //unique
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age > 0 ? age : 0;
    this.isMale = isMale;
    this.createdAt = new Date();
  }

  //methods
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  getInfo() {
    console.log(`${this.firstName} ${this.lastName}, ${this.age}`);
  }
}

//instance
const adam = new Human("Adam", "Sandler", 45, true);

//Class - inheritance
class User extends Human {
  username;
  email;
  #password;
  constructor(firstName, lastName, age, isMale, username, email, password) {
    super(firstName, lastName, age, isMale);
    this.username = username;
    this.email = email;
    this.#password = password.length >= 5 ? password : "pass123";
    this.isLogged = false;
  }

  //getters, setters
  get password() {
    return this.#password;
  }
  set password(newPass) {
    if (newPass.length >= 5) {
      this.#password = newPass;
    }
  }

  //method
  login() {
    this.isLogged = true;
  }
  logout() {
    this.isLogged = false;
  }

  getInfo() {
    console.log(`${this.username}, ${this.password}`);
  }
}

class Student extends Human {
  constructor(firstName, lastName, age, isMale, grades, major) {
    super(firstName, lastName, age, isMale);
    this.grades = grades;
    this.major = major;
  }

  //method
  calculateGradeAverage() {
    const totalGrade = this.grades.reduce((acc, grade) => {
      return (acc += grade);
    }, 0);
    return totalGrade / this.grades.length;
  }

  hasPassed() {
    const check = this.grades.every((grade) => {
      return grade >= 51;
    });
    return check ? "Passed" : "Failed";
  }

  getInfo() {
    console.log(`${this.firstName} ${this.lastName}, ${this.major}`);
  }
}

const user1 = new User(
  "John",
  "Doe",
  45,
  true,
  "john_doe",
  "john@gmail.com",
  "john123"
);

const student1 = new Student(
  "Emil",
  "Abbasov",
  21,
  true,
  [55, 67, 89, 91, 98],
  "IT"
);

console.log(user1);
// console.log(user1.password);
// user1.password = 'updated_pass';
// console.log(user1.password);
// user1._password = 'updated_pass';
// console.log(user1);

// user1.getInfo(); //user
// student1.getInfo(); //student

// console.log(student1.calculateGradeAverage());
// console.log(student1.hasPassed());
// console.log(student1.getFullName());
// console.log(student1.login()); - error
