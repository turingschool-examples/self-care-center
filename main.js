/* ~~~~~~~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~~~~~*/
var choiceAffirmation = document.getElementById("choice-affirmation");
var choiceMantra = document.getElementById("choice-mantra");
var buddhaIcon = document.getElementById("buddha-icon");
var messageResult = document.querySelector(".message-result");
var messageButton = document.getElementById("receive-message");

/* ~~~~~~~~~~~~~~~~ Event Listeners ~~~~~~~~~~~~~~~~~*/
messageButton.addEventListener("click", getMessage);

/* ~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~*/
function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};

function getRandom(array) {
  return Math.floor(Math.random() * array.length);
};


function selectChoice() {
  if (choiceAffirmation.checked) {
    messageResult.innerText = `${affirmations[getRandom(affirmations)]}`;
  } else if (choiceMantra.checked) {
    messageResult.innerText = `${mantras[getRandom(mantras)]}`;
  }
};

function getMessage() {
  console.log("I pressed it")
  hide(buddhaIcon);
  selectChoice();
  show(messageResult);
};
