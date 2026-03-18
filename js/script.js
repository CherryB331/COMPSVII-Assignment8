console.log("script.js connected!");
const answerButtons = document.querySelectorAll(".answer-btn");
answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.getAttribute("data-answer");
    console.log(`You selected answer ${answer}`);
    // Here you can add code to update the scores based on the selected answer
  }
const blueScore = (0);
const brownScore = (0);
const greenScore = (0);
const redScore = (0);