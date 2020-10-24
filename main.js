var messageTypeForm = document.querySelector("#message-type")

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
  messageTypeForm[0].checked = false // clears the radio buttons
  messageTypeForm[1].checked = false
  bottomBoxContent.innerHTML = `<img src="./assets/meditate.svg" id="medIcon" alt="meditation icon"></img>`
  clearMessageButton.classList.toggle("hidden")
}

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
  meditateIcon.classList.toggle("hidden")
  bottomBoxContent.classList.add("message-text")
  bottomBoxContent.innerHTML = showThisMessage
  clearMessageButton.classList.add("clear-message-text")
  clearMessageButton.innerText = "reset"
}

// clear message button (maybe text under the message?)
//  when message is showing, button should show
//  and the radio buttons should be dimmed
//  so that it's obvious what you're supposed to do
// write function for displaying the clear button
// and one for dimming the top box (or maybe just hide it? replace it?)
// call them in the getMessageType function

// "please select a message type" popup
// git ignore the .ds file
// any other error handling?