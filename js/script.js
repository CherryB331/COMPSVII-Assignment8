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
    // Add logic to check if answer is correct here
  

const questionContainer = document.getElementById("question-container");
