console.log("script.js connected!");

const scores = { brown: 0, blue: 0, green: 0, red: 0 };

function bindQuestion(questionId) {
  const buttons = document.querySelectorAll(`#${questionId}`);
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const type = button.dataset.answer;
      if (!type || !(type in scores)) {
        console.warn("Unknown type", type);
        return;
      }
      scores[type]++;
      console.log("scores:", scores);
      buttons.forEach(btn => btn.disabled = true);
    });
  });
}

["qOne", "qTwo", "qThr", "qFor"].forEach(bindQuestion);

function getResult() {
  let highest = -Infinity;
  let result = "";

  for (const type in scores) {
    if (scores[type] > highest) {
      highest = scores[type];
      result = type;
    }
  }

  if (highest <= 2) {
    return "rainbow";
  }

  return result || "rainbow";
}

const descriptions = {
  blue: "You are in tune to your emotions. Sometimes they are overwhelming, but it's one of your strengths.",
  brown: "You crave stability. If type A was a color; it would be brown. You are a Thinker! You analyze everything.",
  green: "You are Chill! You go with the flow. You move where ever the wind takes you. Most of the time, it takes you to the couch.",
  red: "You are an Adventurer! You love excitement. You're full of a fiery passion that can't be tamed.",
  rainbow: "You are a unique individual! You don't fit into any one category, and that's what makes you special."
};

function showColorResult() {
  const colorResult = getResult();

  const questionContainer = document.getElementById("question-container");
  const showResultBtn = document.getElementById("show-result");
  const resultContainer = document.getElementById("result-container");
  const announce = document.getElementById("announce");
  const resultText = document.getElementById("result-text");

  if (questionContainer) questionContainer.style.display = "none";
  if (showResultBtn) showResultBtn.style.display = "none";
  if (resultContainer) resultContainer.style.display = "block";

  if (announce) announce.textContent = `Your color is: ${colorResult.toUpperCase()}`;
  if (resultText) resultText.textContent = descriptions[colorResult] || "No description available.";

  ["blue","brown","green","red","rainbow"].forEach(color => {
    const el = document.getElementById(`result-${color}`);
    if (el) el.style.display = (color === colorResult ? "block" : "none");
  });

  console.log("Final result:", colorResult, descriptions[colorResult]);
}

const shwResultBtn = document.getElementById("show-result");
if (shwResultBtn) {
  shwResultBtn.addEventListener("click", showColorResult);
} else {
  console.error("Missing #show-result button.");
}
