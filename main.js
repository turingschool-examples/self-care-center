var radioButtonForm = document.querySelector("#radio-buttons")
var affButton = document.querySelector("#affirmation-button")
var mantraButton = document.querySelector("#mantra-button")
var getMessageButton = document.querySelector("#get-message")

var meditateIcon = document.querySelector("#medIcon")
var bottomBox = document.querySelector("#bottom-text")

getMessageButton.addEventListener("click", getMessageType)

function getMessageType() {
  var isMantraChecked = document.querySelector("#mantra-button").checked;
  var isAffirmChecked = document.querySelector("#affirmation-button").checked;
  if (isAffirmChecked) {
    var messageText = getRandom(affText)
  } else if (isMantraChecked) {
    var messageText = getRandom(mantraText)
  }
}

function getRandom(array) {
  var position = Math.floor(Math.random() * array.length);
  var showThisMessage = array[position]
  displayMessage(showThisMessage)
}

function displayMessage(showThisMessage) {
  meditateIcon.classList.add("hidden")
  bottomBox.classList.add("message-text")
  bottomBox.innerHTML = showThisMessage
  // also put the white box back in?
}