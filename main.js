// query selectors
var receiveMsgBtn = document.querySelector(".receive-msg")
// var mantraAffirmationBox = document.querySelector(".mantra-affirmation-box")
var selectAffirmation = document.getElementById("affirmation")
var selectMantra = document.getElementById("mantra")
var displayMsgBox = document.querySelector(".display-message")

// event listeners
receiveMsgBtn.addEventListener("click", showQuote)


// add this for all random queries
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

// when user selects a message option and then clicks the "Receive Message"
// button, the user sees a random message from list of possilbe messages

function showQuote () {
  if (selectAffirmation.checked) {
    // displayMsgBox.innerHTML = ""
    displayMsgBox.innerHTML = affirmations[getRandomIndex(affirmations)];
  }
}

// when message appears, meditation icon disappears from message area

// look at reset() built in method to reset page
