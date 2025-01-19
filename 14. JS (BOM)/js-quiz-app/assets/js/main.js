import { createQuiz, renderQuizQuestions, resetForm } from "./helper.js";

//open-close quiz form (modal)
const quizAddBtn = document.querySelector(".add-quiz-btn");
const quizForm = document.querySelector("#quiz-form");
const quiz = [];

quizAddBtn.addEventListener("click", function () {
  const isFormOpen = this.getAttribute("data-form-open");

  if (isFormOpen == "false") {
    quizForm.classList.replace("d-none", "d-flex");
    this.setAttribute("data-form-open", "true");
    quizAddBtn.textContent = "cancel quiz";
  } else {
    quizForm.classList.replace("d-flex", "d-none");
    quizAddBtn.setAttribute("data-form-open", "false");
    quizAddBtn.textContent = "add quiz";
    resetForm();
  }
});

//add quiz
quizForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //get input values
  const question = createQuiz();

  if (question) {
    resetForm();
    quizForm.classList.replace("d-flex", "d-none");
    quizAddBtn.setAttribute("data-form-open", "false");
    quizAddBtn.textContent = "add quiz";

    //sweet alert
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Quiz created successfully!",
      showConfirmButton: false,
      timer: 1500,
    });

    //create question card
    quiz.push(question);
    renderQuizQuestions(quiz);
  }
});