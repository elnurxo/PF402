import Student from "./class.js";

//helper functions
export function calculateClassAverage(classArr) {
  const classGradeSum = classArr.reduce((acc, student) => {
    return (acc += student.calculateAverageGrade());
  }, 0);

  return classGradeSum / classArr.length;
}

export function createStudent(grades) {
  const fullNameInp = document.querySelector("#full-name");
  const ageInp = document.querySelector("#age");
  const major = document.querySelector("#major");
  const imageURL = document.querySelector("#image-url");

  const newStudent = new Student(
    fullNameInp.value,
    ageInp.value,
    major.value,
    imageURL.value,
    grades
  );

  return newStudent;
}

export function resetForm() {
  const fullNameInp = document.querySelector("#full-name");
  const ageInp = document.querySelector("#age");
  const major = document.querySelector("#major");
  const imageURL = document.querySelector("#image-url");
  const grade = document.querySelector("#grade");
  const gradeList = document.querySelector(".grade-list");

  fullNameInp.value = "";
  ageInp.value = "";
  major.value = "";
  imageURL.value = "";
  grade.value = "";
  gradeList.innerHTML = "";
}
