var selectMantra = document.querySelector("#mantra-button");
var selectAffirmation = document.querySelector("#affirmation-button");
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
  event.preventDefault();
  if(selectMantra.checked === true){
    return chooseMantra();
  } else {
    return chooseAffirmation();
  }
};
