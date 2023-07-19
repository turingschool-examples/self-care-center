// goal: when a user selects a message option and then clicks the “Receive Message” button, the user sees a random message from the list of possible messages for that category
// goal: When the message appears, the mediation icon disappears from the message area
//select the button.
// When that button is clicked, get the value of the radio button was clicked.
// if mantra or affirmation was clicked, remove the image
// if mantra was clicked, loop through the mantra array and display the message at random index into the message area
// if affirmation was clicked, loop through the affirmation array and display the random index into the message area.

//QUESTION: Why can't I access the arrays globally?

//QUERYING THE DOM
//form
var messageBtn = document.querySelector(".recieve-message-btn");
var affirmationRadio = document.getElementById("affirmation");
var mantraRadio = document.getElementById("mantra");
//meditation icon
var medIcon = document.querySelector(".meditation-icon");
//message
var messageDisplay = document.querySelector(".message-text");

//EVENT LISTENERS
messageBtn.addEventListener("click", getMessage);
//FUNCTIONS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getMessage() {
  var randNumMantras = getRandomIndex(mantrasArr);
  var randNumAffirmations = getRandomIndex(affirmationsArr);
  if (messageDisplay.classList.contains("hidden")) {
    messageDisplay.classList.remove("hidden");
    medIcon.classList.add("hidden");
  }
  if (mantraRadio.checked == true) {
    for (var i = 0; i < mantrasArr.length; i++) {
      messageDisplay.innerText = mantrasArr[randNumMantras];
    }
  } else if (affirmationRadio.checked == true) {
    for (var i = 0; i < affirmationsArr.length; i++) {
      messageDisplay.innerText = affirmationsArr[randNumAffirmations];
    }
  }
}
