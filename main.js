var affirmationRadioButton = document.querySelector("#affirmation-button")
var mantraRadioButton = document.querySelector("#mantra-button")
var getMessageButton = document.querySelector("#get-message")
var clearMessageButton = document.querySelector("#clear-message")
var openFormButton = document.querySelector("#open-form")
var closeFormButton = document.querySelector("#close-form")
var userAffirmationRadioButton = document.querySelector("#user-affirmation-button")
var userMantraRadioButton = document.querySelector("#user-mantra-button")
var submitUserMessageButton = document.querySelector("#submit-form")
var cancelFormButton = document.querySelector("#cancel-form")

var meditateIcon = document.querySelector("#medIcon")
var bottomBoxContent = document.querySelector("#bottom-box")

getMessageButton.addEventListener("click", getMessageType)
clearMessageButton.addEventListener("click", resetForm)
openFormButton.addEventListener("click", openUserMessageForm)
// closeFormButton.addEventListener("click", closeUserMessageForm)
submitUserMessageButton.addEventListener("click", submitUserMessage)
cancelFormButton.addEventListener("click", closeUserMessageForm)

function openUserMessageForm() {
  document.querySelector("#user-message-form").classList.remove("hidden")
  document.querySelector("#top-half").classList.add("hidden")
  document.querySelector("#bottom-half").classList.add("hidden")
}

function submitUserMessage() {
  var userMessage = document.querySelector("#user-message-input").value
  var isUserMantraChecked = document.querySelector("#user-mantra-button").checked;
  var isUserAffirmChecked = document.querySelector("#user-affirmation-button").checked;
  if (isUserAffirmChecked) {
    userAffText.push(userMessage)
  } else if (isUserMantraChecked) {
    userManText.push(userMessage)
  } else {
    alert("Please choose a message type.")
  }
  if (!userMessage) {
    alert("Please enter message text.")
  } // make it not close the form after these alerts
  document.querySelector("#user-message-form").classList.add("hidden")
  document.querySelector("#top-half").classList.remove("hidden")
  document.querySelector("#bottom-half").classList.remove("hidden")
}

function closeUserMessageForm() {
  document.querySelector("#user-message-form").classList.add("hidden")
  document.querySelector("#top-half").classList.remove("hidden")
  document.querySelector("#bottom-half").classList.remove("hidden")
}

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