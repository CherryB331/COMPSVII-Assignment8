console.log("script.js connected!");
let scores = {
  blue: 0,
  brown: 0,
  green: 0,
  red: 0
};
document.getElementById("result-red").style.display = "none";
document.getElementById("result-blue").style.display = "none";
document.getElementById("result-green").style.display = "none";
document.getElementById("result-brown").style.display = "none";
document.getElementById("result-rainbow").style.display = "none";
const queOne = document.querySelectorAll("#qOne");
queOne.forEach(button => {
  button.addEventListener("click", () => {
     const type = button.dataset.answer;    
  scores[type]++;
  console.log(scores);
    queOne.forEach(btn => {
      btn.disabled = true;
    });
  });       
});
const queTwo = document.querySelectorAll("#qTwo");
queTwo.forEach(twobutton => {
  twobutton.addEventListener("click", () => { 
    const type = twobutton.dataset.answer;
  scores[type]++;
  console.log(scores);
    queTwo.forEach(btn => {
      btn.disabled = true;
    });
  });
});
const queThr = document.querySelectorAll("#qThr");
queThr.forEach(thrbutton => {
  thrbutton.addEventListener("click", () => {  
     const type = thrbutton.dataset.answer;
  scores[type]++;
  console.log(scores);
   queThr.forEach(btn => { 
 
      btn.disabled = true;
    });
  });
});
const queFor = document.querySelectorAll("#qFor");

queFor.forEach(forbutton => {
  forbutton.addEventListener("click", () => {  
    const type = forbutton.dataset.answer;
  scores[type]++;
  console.log(scores);  
   queFor.forEach(btn => {
      btn.disabled = true;
    });
  });
});

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
  return { result, highest };
}
let colorEnd = document.getElementById("result-container");
function showColorResult() {
    const {result, highest} = getResult();
    console.log("Your color is " + result + ": " + descriptions[result]);
    console.log("Scores:", scores);
    console.log("highest score:", result + " with a score of " + highest);
    console.log(result)
document.getElementById("question-container").style.display = "none";
document.getElementById("show-result").style.display = "none";
document.getElementById("announce").style.display = "block";
document.getElementById("result-" + result).style.display = "block";}
const descriptions = {
  blue: "You are in tune to your emotions. Sometimes they are overwhelming, but it's one of your strengths.",
  brown: "You crave stability. If type A was a color; it would be brown.You are a Thinker! You analyze everything.",
  green: "You are Chill! You go with the flow. You move where ever the wind takes you. Most o fthe time, it takes you to the couch.",
  red: "You are an Adventurer! You love excitement. You're full of a firey passion that can't be tamed.",
  rainbow: "You are a unique individual! You don't fit into any one category, and that's what makes you special."
};
  const shwResultBtn = document.querySelector("#show-result");
let questionContainer = document.getElementById("question-container");
let announcement = document.getElementById("announce");
console.log(questionContainer);
shwResultBtn.addEventListener("click", showColorResult);
let redResult = document.getElementById("result-red");
let blueResult = document.getElementById("result-blue");
let greenResult = document.getElementById("result-green");
let brownResult = document.getElementById("result-brown");
let rainbowResult = document.getElementById("result-rainbow");
