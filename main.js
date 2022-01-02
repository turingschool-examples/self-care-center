/* ~~~~~~~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~~~~~*/
var choiceAffirmation = document.getElementById("choice-affirmation");
var choiceMantra = document.getElementById("choice-mantra");
var buddhaIcon = document.getElementById("buddha-icon");
var messageResult = document.querySelector(".message-result");
var messageButton = document.getElementById("receive-message");
var clearButton = document.querySelector(".clear");

/* ~~~~~~~~~~~~~~~~ Event Listeners ~~~~~~~~~~~~~~~~~*/
messageButton.addEventListener("click", getMessage);
clearButton.addEventListener("click", clearMessage);
choiceAffirmation.addEventListener("change", activateButton);
choiceMantra.addEventListener("change", activateButton);
messageButton.disabled = true;

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
  selectChoice();
  hide(buddhaIcon);
  show(messageResult);
  show(clearButton);
};

function clearMessage() {
  hide(messageResult);
  hide(clearButton);
  show(buddhaIcon);
};

function activateButton() {
  messageButton.classList.remove("inactive")
  messageButton.disabled = false;
}
