import Student from "./class.js";
import { calculateClassAverage, createStudent, resetForm } from "./helper.js";

const PF_402 = [];
const grades = [];
//add student feat
const studentForm = document.querySelector("#add-student");
studentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //create new Student
  const newStudent = createStudent(grades);
  PF_402.push(newStudent);
  renderStudents(PF_402);
  resetForm();
});

//add single grade
const grade = document.querySelector("#grade");
const addGradeBtn = document.querySelector("#add-grade");
const gradeList = document.querySelector(".grade-list");

addGradeBtn.addEventListener("click", function (e) {
  if (grade.value === "") {
    window.alert("grade is empty!");
  } else {
    const gradeNum = Number(grade.value);
    grades.push(gradeNum);
    grade.value = "";
    gradeList.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center w-25 mx-auto">
<span>${gradeNum}</span>
</li>
    `;
  }
});

//render student data
const studentDataRow = document.querySelector(".student-columns");
function renderStudents(classArr) {
  studentDataRow.innerHTML = "";
  classArr.forEach((student) => {
    studentDataRow.innerHTML += `
         <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card">
                    <img src="${student.imageURL}" class="card-img-top" alt="${
      student.fullName
    }" title="${student.fullName}">
                    <div class="card-body">
                        <h5 class="card-title">${student.fullName}</h5>
                        <h6 class="card-title">${student.calculateAverageGrade()}</h6>
                        <p class="card-text">${student.age}</p>
                    </div>
                </div>
            </div>
        `;
  });
}

const searchInp = document.querySelector("#search");

searchInp.addEventListener("keyup", (e) => {
  const searchedStudents = [
    ...PF_402.filter((student) => {
      return student.fullName
        .toLowerCase()
        .trim()
        .includes(e.target.value.trim().toLowerCase());
    }),
  ];

  console.log("searched students: ", searchedStudents);

  renderStudents(searchedStudents);
});
