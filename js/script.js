console.log("script.js connected!");
const scores = {
  brown : 0, 
  blue : 0,
  green : 0, 
  red : 0,  
};
const queOne = document.querySelectorAll("#qOne");
funtion questionContainer() {
queOne.forEach(button => {
  button.addEventListener("click", () => {
     const type = button.dataset.answer;    
  scores[type]++;
  console.log(scores);
    queOne.forEach(btn => {
      btn.disabled = true;
    });
  });       
});;};
const queTwo = document.querySelectorAll("#qTwo");
function questionTwo(){
queTwo.forEach(twobutton => {
     const type = twobutton.dataset.answer;
  scores[type]++;
  console.log(scores);
  twobutton.addEventListener("click", () => {
    queTwo.forEach(btn => {
      btn.disabled = true;
    });
  });
});};
const queThr = document.querySelectorAll("#qThr");
function questionThree() {
queThr.forEach(thrbutton => {
      const type = thrbutton.dataset.answer;
  scores[type]++;
  console.log(scores);
  thrbutton.addEventListener("click", () => {
   queThr.forEach(btn => {
      btn.disabled = true;
    });
  });
});};
const queFor = document.querySelectorAll("#qFor");
function questionFour() {
queFor.forEach(forbutton => {
      const type = forbutton.dataset.answer;
  scores[type]++;
  console.log(scores);
  forbutton.addEventListener("click", () => {
   queFor.forEach(btn => {
      btn.disabled = true;
    });
  });
});};

function getResult() {
  let highest = 0;
  let result = "";

  for (let type in scores) {
    if (scores[type] > highest) {
      highest = scores[type];
      result = type;
    }
  }
  if (highest <= 2) {
    result = "rainbow";
  }
  return result;
}
let highest = 0;
let result = getResult();
let colorEnd = document.getElementById("#result-container");
function showColorResult() {
    const colorResult = getResult();
    console.log("Your color is " + colorResult + ": " + descriptions[colorResult]);
    console.log("Scores:", scores);
    console.log("highest score:", result + " with a score of " + highest);
    console.log(result)
document.getElementById("question-container").style.display = "none";
document.getElementById("show-result").style.display = "none";
document.getElementById("announce").style.display = "block";
document.getElementById("result-" + colorResult).style.display = "block";}
const descriptions = {
  blue: "You are in tune to your emotions. Sometimes they are overwhelming, but it's one of your strengths.",
  brown: "You crave stability. If type A was a color; it would be brown.You are a Thinker! You analyze everything.",
  green: "You are Chill! You go with the flow. You move where ever the wind takes you. Most o fthe time, it takes you to the couch.",
  red: "You are an Adventurer! You love excitement. You're full of a firey passion that can't be tamed.",
  rainbow: "You are a unique individual! You don't fit into any one category, and that's what makes you special."
};
  const shwResultBtn = document.querySelector("#show-result");
let questionContainer = document.getElementById("question-container");
let announcement = document.getElementById("#announce");
console.log(questionContainer);
shwResultBtn.addEventListener("click", showColorResult);
