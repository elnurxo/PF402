export class Quiz {
  constructor(question, answer, difficulty, category) {
    this.id = new Date().getTime() + Math.round(Math.random() * 100);
    this.question = question;
    this.answer = answer;
    this.difficulty = difficulty;
    this.category = category;
    this.isLearned = false; //
    this.createdAt = new Date(); //moment.js
  }

  static checkAnswer(userAnswer) {
    return this.answer.toLowerCase() === userAnswer.toLowerCase();
  }
}
