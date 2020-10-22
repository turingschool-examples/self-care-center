var selectMantra = document.querySelector("#mantra");
var selectAffirmation = document.querySelector("#affirmation");
var submitButton = document.querySelector("#get-message");
var messageDisplay = document.querySelector('#message-display');

submitButton.addEventListener('click', displayMessage);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function chooseMantra() {
  var currentMantra = mantras[getRandomIndex(mantras)];
  messageDisplay.innerText = currentMantra;
};

function chooseAffirmation() {
  var currentAffirmation = affirmations[getRandomIndex(affirmations)];
  messageDisplay.innerText = currentAffirmation;
};

function displayMessage() {
  if(selectMantra.value = "mantra"){
    chooseMantra();
  }
  if(selectAffirmation.value = "affirmation") {
    chooseAffirmation();
  } //Messages are displaying, but not staying toggle/hidden image. And research  
};
