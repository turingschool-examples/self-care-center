var affirmationButton = document.querySelector("#radio1");
var mantraButton = document.querySelector("#radio2");
var mainButton = document.querySelector("#mainButton");
var meditationImage = document.querySelector("#image");
var mainText = document.querySelector("#messageText");

var randomAffirmation = "";
var randomMantra = "";
var errorText = "**ERROR: Please select Affirmation or Mantra.**"

affirmationButton.addEventListener("click", function(event) {
    mantraButton.checked = false;
  });
  
  mantraButton.addEventListener("click", function(event) {
    affirmationButton.checked = false;
  });
// Could we do this as one conditional?

mainButton.addEventListener("click", function(event) {
    hideImage();
    getRandomMessage();

  
    if (affirmationButton.checked === false && mantraButton.checked === false) {
      showErrorMessage();
    }
  
    if (affirmationButton.checked === true) {
      showAffirmationMessage();
    }
  
    if (mantraButton.checked === true) {
      showMantraMessage();
    }
  });
// This is an idea for the end goal of the site. None of these are written yet!


function hideImage() {
  meditationImage.hidden = true;
}

function getRandomIndex(messages) {
  return Math.floor(Math.random() * messages.length);
}

function getRandomAffirmation() {
  var randomIndex = getRandomIndex(affirmations);
  randomAffirmation = affirmations[randomIndex];
}

function getRandomMantra() {
  var randomIndex = getRandomIndex(mantras);
  randomMantra =  mantras[randomIndex];
}

function getRandomMessage() { 
  if (affirmationButton.checked === true) {
    getRandomAffirmation();
  }
  if (mantraButton.checked === true) {
    getRandomMantra();
  }
}

function showAffirmationMessage() {
  mainText.innerText = randomAffirmation;
  mainText.classList.remove("error");
}

function showMantraMessage() {
  mainText.innerText = randomMantra;
  mainText.classList.remove("error");
}

function showErrorMessage() {
  mainText.innerText = errorText;
  mainText.classList.add("error");
}

function hideErrorMessage() {
  mainText.innerText = ""; 
  mainText.classList.remove("error");
}