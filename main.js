var affirmationButton = document.querySelector("#radio1");
var mantraButton = document.querySelector("#radio2");
var mainButton = document.querySelector("#mainButton");
var meditationImage = document.querySelector("#image");
var mainText = document.querySelector("#messageText");
var clearButton = document.querySelector("#clearButton");

var randomAffirmation = "";
var randomMantra = "";

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
  showClearButton();

  if (affirmationButton.checked === true) {
      showAffirmationMessage();
  }

  if (mantraButton.checked === true) {
      showMantraMessage();
  }
});

// This is an idea for the end goal of the site. None of these are written yet!

affirmationButton.addEventListener("click", function(event) {
  mantraButton.checked = false;
  mainButton.removeAttribute("disabled");
});

mantraButton.addEventListener("click", function(event) {
  affirmationButton.checked = false;
  mainButton.removeAttribute("disabled");
});

clearButton.addEventListener("click", function(event) {
  clearAffirmation();
  clearMantra();
  showImage();
  hideClearButton();
  mainText.innerText = "";
  
});

function hideImage() {
  meditationImage.hidden = true;
}

function showImage() {
  meditationImage.hidden = false;
  
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
}

function showMantraMessage() {
  mainText.innerText = randomMantra;
}

function showClearButton() {
  clearButton.hidden = false;
} 

function hideClearButton() {
  clearButton.hidden = true;
}

function clearAffirmation() {
  randomAffirmation = "";
}

function clearMantra() {
  randomMantra = "";
}