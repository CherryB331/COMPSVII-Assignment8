console.log("script.js connected!");
const answerButtons = document.querySelectorAll(".answer-btn");
answerButtons.addEventListener("click", function(e) {
    const answer = this.dataset.answer;
    console.log("You clicked answer: " + answer);
}
const blueScore = (0);
const brownScore = (0);
const greenScore = (0);
const redScore = (0);