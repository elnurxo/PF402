import { Quiz } from "./class.js";

export function resetForm() {
  const quizQuestionInp = document.querySelector("#quiz-question");
  const quizAnswerInp = document.querySelector("#quiz-answer");
  const quizDifficultyInp = document.querySelector("#quiz-difficulty");
  const quizCategoryInp = document.querySelector("#quiz-category");

  quizQuestionInp.value = "";
  quizAnswerInp.value = "";
  quizCategoryInp.value = "";
  quizDifficultyInp.value = "";
}

export function createQuiz() {
  const quizQuestion = document.querySelector("#quiz-question").value;
  const quizAnswer = document.querySelector("#quiz-answer").value;
  const quizDifficulty = document.querySelector("#quiz-difficulty").value;
  const quizCategory = document.querySelector("#quiz-category").value;

  //validation
  if (!quizQuestion || !quizAnswer || !quizDifficulty || !quizCategory) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Quiz validation failed!",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  } else {
    const newQuestion = new Quiz(
      quizQuestion,
      quizAnswer,
      quizDifficulty,
      quizCategory
    );
    return newQuestion;
  }
}

export function renderQuizQuestions(arr) {
  const questionWrapper = document.querySelector(".question-wrapper");
  questionWrapper.innerHTML = "";
  arr.forEach((question) => {
    questionWrapper.innerHTML += `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button
                class="${
                  question.difficulty === "easy"
                    ? "text-success"
                    : question.difficulty === "medium"
                    ? "text-warning"
                    : question.difficulty === "hard"
                    ? "text-danger"
                    : ""
                }  accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${
      question.id
    }"
                    aria-expanded="true" aria-controls="${question.id}">
                    ${question.question}
                </button>
            </h2>
            <div id="${
              question.id
            }" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>${question.answer}</strong>
                    <br/>
                    category: <span>${question.category}</span>
                </div>
            </div>
        </div>
        `;
  });
}
