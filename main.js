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
var favoriteButton = document.querySelector("#favorite-button")
var hideButton = document.querySelector("#hide-button")

var meditateIcon = document.querySelector("#medIcon")
var bottomBoxContent = document.querySelector("#bottom-box")

// getMessageButton.addEventListener("click", getMessageType)
getMessageButton.addEventListener("click", createMessageClass)
favoriteButton.addEventListener("click", addToFavorites)
hideButton.addEventListener("click", hideMessage)
clearMessageButton.addEventListener("click", resetForm)
openFormButton.addEventListener("click", openUserMessageForm)
submitUserMessageButton.addEventListener("click", submitUserMessage)
cancelFormButton.addEventListener("click", closeUserMessageForm)

function addToFavorites(message) {
  message.favorite = true
  resetForm()
  hideButton.classList.add("hidden")
  favoriteButton.classList.add("hidden")
}

function hideMessage(newMessage) {
  newMessage.hide = true
  // this is not affecting this.hide
  // but if i un-comment-out this.hide in the constructor
  // that will reset it to false every time the constructor runs
  // which is every time the createMessageClass function runs
  // which is
  // oh, it's not being run
  resetForm()
  hideButton.classList.add("hidden")
  favoriteButton.classList.add("hidden")
}

function createMessageClass(newMessage) { // do i have to pass anything here
  if (document.querySelector("#affirmation-button").checked) {
    combineTexts("affirmation")
    var newMessage = new Messages("affirmation")
    // newMessage.type = "affirmation"
    displayMessage(newMessage)
  } else if (document.querySelector("#mantra-button").checked) {
    var newMessage = new Messages("mantra")
    // newMessage.type = "mantra"
    displayMessage(newMessage)
  }
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
    return
  }
  if (!userMessage) {
    alert("Please enter message text.")
    return
  }
  document.querySelector("#user-message-form").classList.add("hidden")
  document.querySelector("#top-half").classList.remove("hidden")
  document.querySelector("#bottom-half").classList.remove("hidden")
  displayMessage(userMessage)
}

function openUserMessageForm() {
  document.querySelector("#user-message-form").classList.remove("hidden")
  document.querySelector("#top-half").classList.add("hidden")
  document.querySelector("#bottom-half").classList.add("hidden")
  openFormButton.classList.add("hidden")
  document.querySelector("#user-message-input").value = ""
  document.querySelector("#user-mantra-button").checked = false
  document.querySelector("#user-affirmation-button").checked = false
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

// function getMessageType() {
//   var isMantraChecked = document.querySelector("#mantra-button").checked;
//   var isAffirmChecked = document.querySelector("#affirmation-button").checked;
//   if (isAffirmChecked) {
//     var messageText = getRandomMessage(affText.concat(userAffText))
//   } else if (isMantraChecked) {
//     var messageText = getRandomMessage(mantraText.concat(userManText))
//   }
//   if (!isMantraChecked && !isAffirmChecked) {
//     alert("Please choose a message type.")
//   }
// }

function getRandomMessage(array) {
  var position = Math.floor(Math.random() * array.length);
  var showThisMessage = array[position]
  displayMessage(showThisMessage)
}

function displayMessage(showThisMessage) {
  meditateIcon.classList.toggle("hidden")
  bottomBoxContent.classList.add("message-text")
  bottomBoxContent.innerHTML = showThisMessage
  clearMessageButton.classList.add("clear-message-text")
  // how to make clickable area only on the button
  // even though the button doesn't exist until i put it in here
  clearMessageButton.innerHTML = `<button type="button" id="reset-button">Reset</button>`
  clearMessageButton.classList.remove("hidden")
  favoriteButton.classList.remove("hidden")
  hideButton.classList.remove("hidden")
  getMessageButton.classList.add("disabled")
  getMessageButton.disabled = true
  mantraRadioButton.disabled = true
  affirmationRadioButton.disabled = true
}