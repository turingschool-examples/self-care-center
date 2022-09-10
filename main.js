var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
]
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
]

var affirmationRadioButton = document.querySelector("#affirmations")
var mantrasnRadioButton = document.querySelector("#mantras")
var receiveMessageButton = document.querySelector(".receive-message")
var bellImage = document.querySelector(".bell-picture")
var textDisplay = document.querySelector("h3")
var errorMessage = document.querySelector(".error-message")
var clearButton = document.querySelector(".clear-message")
var mantraOrAffirmation;

affirmationRadioButton.addEventListener('click', selectAffirmation);
mantrasnRadioButton.addEventListener('click', selectMantra)
receiveMessageButton.addEventListener('click', displayMessage);
clearButton.addEventListener('click', clearAll)

function getRandomIndex(array) {
  var i = Math.floor(Math.random() * array.length);
  return array[i];
}

function selectAffirmation() {
  mantrasnRadioButton.checked = false
  mantraOrAffirmation = getRandomIndex(affirmations)
  return mantraOrAffirmation
}

function selectMantra() {
  affirmationRadioButton.checked = false
  mantraOrAffirmation = getRandomIndex(mantras)
  return mantraOrAffirmation
}

function displayHomePage() {
  textDisplay.classList.add('hidden')
  clearButton.classList.add('hidden')
  bellImage.classList.remove('hidden')
}

function clearRadioButtons() {
  affirmationRadioButton.checked = false
  mantrasnRadioButton.checked = false
}

function clearAll() {
  clearRadioButtons()
  displayHomePage()
}

function displayMessage() {
  if (!affirmationRadioButton.checked && !mantrasnRadioButton.checked) {
    errorMessage.innerText = "Please make a selection"
    displayHomePage()
  } else {
    bellImage.classList.add('hidden')
    textDisplay.classList.remove('hidden')
    textDisplay.innerText = mantraOrAffirmation
    clearButton.classList.remove('hidden')
    errorMessage.innerText = ''
    clearRadioButtons()
  }
}
