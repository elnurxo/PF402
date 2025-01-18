class Human {
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }
}

class Student extends Human {
  constructor(fullName, age, major, imageURL, grades = []) {
    super(fullName, age);
    this.grades = grades;
    this.major = major;
    this.imageURL = imageURL;
  }

  //methods
  calculateBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  calculateAverageGrade() {
    const sum = this.grades.reduce((acc, grade) => {
      return (acc += grade);
    }, 0);

    return (sum / this.grades.length).toFixed(2);
  }
}

export default Student;
