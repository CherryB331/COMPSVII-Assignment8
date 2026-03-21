console.log("script.js connected!");
let scores = {
  brown : 0, 
  blue : 0,
  green : 0, 
  red : 0, 
  rainbow : 0, 
};
const queOne = document.querySelectorAll("#qOne");
queOne.forEach(button => {
  button.addEventListener("click", () => {
    queOne.forEach(btn => {
      btn.disabled = true;
    });
  });
});
const queTwo = document.querySelectorAll("#qTwo");
queTwo.forEach(button => {
  button.addEventListener("click", () => {
    queTwo.forEach(btn => {
      btn.disabled = true;
    });
  });
});
const queThr = document.querySelectorAll("#qThr");
queThr.forEach(button => {
  button.addEventListener("click", () => {
   queThr.forEach(btn => {
      btn.disabled = true;
    });
  });
});
const queFor = document.querySelectorAll("#qFor");
queFor.forEach(button => {
  button.addEventListener("click", () => {
   queFor.forEach(btn => {
      btn.disabled = true;
    });
  });
});

queOne.forEach(onescoring => {
onescoring.addEventListener("click", () => {
  const type = onescoring.dataset.answer;
  scores[type]++;
  console.log(scores);
})})
queTwo.forEach(twoscoring => {
twoscoring.addEventListener("click", () => {
  const type = twoscoring.dataset.answer;
  scores[type]++;
  console.log(scores);
})})
queThr.forEach(thrscoring => {
thrscoring.addEventListener("click", () => {
  const type = thrscoring.dataset.answer;
  scores[type]++;
  console.log(scores);
})})
queFor.forEach(forscoring => {
forscoring.addEventListener("click", () => {
  const type = forscoring.dataset.answer;
  scores[type]++;
  console.log(scores);
})})

function getResult() {
  let highest = 2;
  let result = "";

  for (let type in scores) {
    if (scores[type] > highest) {
      highest = scores[type];
      result = type;
    }
  }
  if (result === "") {
    result = "rainbow";
  }
  return result;
}


const descriptions = {
  blue: "You are in tune to your emotions. Sometimes they are overwhelming, but it's one of your strengths.",
  brown: "You crave stability. If type A was a color; it would be brown.You are a Thinker! You analyze everything.",
  green: "You are Chill! You go with the flow. You move where ever the wind takes you. Most o fthe time, it takes you to the couch.",
  red: "You are an Adventurer! You love excitement. You're full of a firey passion that can't be tamed.",
  rainbow: "You are a unique individual! You don't fit into any one category, and that's what makes you special."
};
  const shwResultBtn = document.querySelector("#show-result");

function showColorResult( ){
  const result = getResult();
  const description = descriptions[result];
let quizContainer = document.getElementById("quiz-container");
console.log(quizContainer);
  descriptions.textContent = "Your color is " + result + ": " + description;
console.log("Your color is " + result + ": " + descriptions[result])};
let questionContainer = document.getElementById("question-container");
console.log(questionContainer);
shwResultBtn.addEventListener("click", showColorResult);
