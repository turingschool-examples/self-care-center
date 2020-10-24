var affirmationRadioButton = document.querySelector("#affirmation-button")
var mantraRadioButton = document.querySelector("#mantra-button")
var getMessageButton = document.querySelector("#get-message")
var clearMessageButton = document.querySelector("#clear-message")

var meditateIcon = document.querySelector("#medIcon")
var bottomBoxContent = document.querySelector("#bottom-box")

getMessageButton.addEventListener("click", getMessageType)
clearMessageButton.addEventListener("click", resetForm)

function resetForm(messageTypeForm) {
  var messageTypeForm = document.querySelector("#message-type")
  messageTypeForm[0].checked = false
  messageTypeForm[1].checked = false
  bottomBoxContent.innerHTML = `<img src="./assets/meditate.svg" id="medIcon" alt="meditation icon"></img>`
  clearMessageButton.classList.add("hidden")
  getMessageButton.classList.remove("disabled")
  getMessageButton.disabled = false
  affirmationRadioButton.disabled = false
  mantraRadioButton.disabled = false
}

function getMessageType() {
  var isMantraChecked = document.querySelector("#mantra-button").checked;
  var isAffirmChecked = document.querySelector("#affirmation-button").checked;
  if (isAffirmChecked) {
    var messageText = getRandom(affText)
  } else if (isMantraChecked) {
    var messageText = getRandom(mantraText)
  }
  if (!isMantraChecked && !isAffirmChecked) {
    alert("Please choose a message type.")
  }
}

function getRandom(array) {
  var position = Math.floor(Math.random() * array.length);
  var showThisMessage = array[position]
  displayMessage(showThisMessage)
}

function displayMessage(showThisMessage) {
  meditateIcon.classList.toggle("hidden")
  bottomBoxContent.classList.add("message-text")
  bottomBoxContent.innerHTML = showThisMessage
  clearMessageButton.classList.add("clear-message-text")
  clearMessageButton.innerHTML = `<button type="button" id="reset-button">Reset</button>`
  clearMessageButton.classList.remove("hidden")
  getMessageButton.classList.add("disabled")
  getMessageButton.disabled = true
  mantraRadioButton.disabled = true
  affirmationRadioButton.disabled = true
}