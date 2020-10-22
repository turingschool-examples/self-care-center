var radioButtonForm = document.querySelector("#radio-buttons")
var affButton = document.querySelector("#affirmation-button")
var mantraButton = document.querySelector("#mantra-button")
var getMessageButton = document.querySelector("#get-message")

var meditateIcon = document.querySelector("#medIcon")
var bottomBox = document.querySelector("#bottom-box")

// var messageText = document.querySelector(".message-text")

getMessageButton.addEventListener("click", getMessageType)

// which radio button was checked?
// run getRandomAff or getRandomMan to get a string
// run displayMessage with that messageText
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
}

// when Receive Message button is clicked, run getMessageType function
// getMessageType looks at which radio button was checked,
// and then runs either getRandomAff or getRandomMan function
// which takes in the quote arrays and returns one of them as showThisMessage, a string,
// then it runs displayMessage function with that Messages object
// which hides the icon, adds message-text class to the bottom box, and
// uses innerHTML to display




// aldfj