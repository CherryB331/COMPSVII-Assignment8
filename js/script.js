console.log("script.js connected!");
let scores = {
  brown : 0,
  blue : 0,
  green : 0,
  red : 0
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
  let highest = 0;
  let result = "";

  for (let type in scores) {
    if (scores[type] > highest) {
      highest = scores[type];
      result = type;
    }
  }
  return result; 
}
const colorType = document.getElementById("#result-container")

const descriptions = {
  blue: "You are in tune to your emotions. Sometimes they are overwhelming, but it's one of your strengths.",
  brown: "You crave stability. If type A was a color; it would be brown.You are a Thinker! You analyze everything.",
  green: "You are Chill! You go with the flow. You move where ever the wind takes you. Most o fthe time, it takes you to the couch.",
  red: "You are an Adventurer! You love excitement. You're full of a firey passion that can't be tamed."};
const shwResultBtn = document.querySelector("#show-result");

function showColorResult( ){
  const result = getResult();
  const description = descriptions[result];
  colorType.textContent = "Your color is " + result + ": " + description;
console.log("Your color is " + result + ": " + descriptions[result])};
const questionContainer = document.getElementById("question-container");
shwResultBtn.addEventListener("click", showColorResult);