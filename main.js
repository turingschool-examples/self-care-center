// query selectors
var receiveMsgBtn = document.querySelector(".receive-msg")
var selectAffirmation = document.getElementById("affirmation")
var selectMantra = document.getElementById("mantra")
var displayBox = document.querySelector(".display-box")

// event listeners
receiveMsgBtn.addEventListener("click", showQuote)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function showQuote () {
  if (selectAffirmation.checked) {
    displayBox.innerHTML = affirmations[getRandomIndex(affirmations)]
  } else {
    selectMantra.checked
    displayBox.innerHTML = mantras[getRandomIndex(mantras)]
  }
}

// look at reset() built in method to reset page
