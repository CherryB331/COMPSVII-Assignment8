console.log("script.js connected!");
const answerButtons = document.querySelectorAll(".answer-btn");
const questionContainer = document.getElementById("question-container");
const blue = document.getElementById("blue");
const brown = document.getElementById("brown");
const green = document.getElementById("green");
const red = document.getElementById("red");
blue.addEventListener("click", blueScoring);
function blueScoring(userScore, blueScore) { return userScore + blueScore; }

brown.addEventListener("click", brownScoring);
function brownScoring(userScore, brownScore) { return userScore + brownScore; }

green.addEventListener("click", greenScoring);
function greenScoring(userScore, greenScore) { return userScore + greenScore; }

red.addEventListener("click", redScoring);
function redScoring(userScore, redScore) { return userScore + redScore; }
    function redScoring(userScore, redScore) {userScore + redScore};

const userScore = (0);
const blueScore = (1);
const brownScore = (2);
const greenScore = (3);
const redScore = (4);

