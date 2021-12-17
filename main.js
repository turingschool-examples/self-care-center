/// Query Selectors ///
var msgButton = document.querySelector('.msg-button')
var affirmation = document.getElementById('affirmation-select')
var icon = document.querySelector('.icon')
var mantra = document.getElementById('mantra-select')
var display = document.querySelector('.display')
var clearButton = document.querySelector('.clear-button')
var messageSection = document.querySelector('.message-section')

/// Event Listeners ///

msgButton.addEventListener('click', showMessage)
clearButton.addEventListener('click', clearMessage)

/// Functionality ///

function clearMessage() {
  messageSection.innerHTML = `<div class="message-section"><img src="./assets/meditate.svg" class="icon"/></div>`
  hide(clearButton)
}

// The user can click a clear button, which clears the page of any message.
// User should only be able to click the clear button if a message is visible.
// When the clear button is clicked and the message is removed, the image of the meditation icon should re-appear.
// If you’ve added other buttons or inputs, be sure to add some error handling for them as well.
// Note: You can disable these buttons, hide them, or display a message to the user for error handling. The choice is yours!

function showMessage() {
  messageSection.innerText = ''
  if(affirmation.checked) {
    messageSection.innerHTML = `<div class ="message"> ${affirmations[getRandomIndex(affirmations)]} </div>`
  }
  if(mantra.checked) {
    messageSection.innerHTML =`<div class ="message">${mantras[getRandomIndex(mantras)]}</div>`
  }
  show(clearButton)
  hide(icon)
};

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
};


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
