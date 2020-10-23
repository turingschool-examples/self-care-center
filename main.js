var selectMantra = document.querySelector("#mantra-button");
var selectAffirmation = document.querySelector("#affirmation-button");
var submitButton = document.querySelector("#get-message");
var messageDisplay = document.querySelector('p');
var image = document.querySelector("#lil-human");

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
  messageDisplay.classList.remove("hidden");
  image.classList.add("hidden");
  if(selectMantra.checked === true){
    return chooseMantra();
  } else {
    return chooseAffirmation();
  }
};
