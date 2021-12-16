/// Query Selectors ///
var msgButton = document.querySelector('.msg-button')
var affirmation = document.getElementById('affirmation-select')
var icon = document.querySelector('.icon')
var mantra = document.getElementById('mantra-select')
var display = document.querySelector('.display')

/// Event Listeners ///
msgButton.addEventListener('click', showMessage)

/// Functionality ///

function showMessage() {
  display.innerText = ''
  if(affirmation.checked) {
    display.innerHTML = `<div class ="message"> ${affirmations[getRandomIndex(affirmations)]} </div>`
  }
  if(mantra.checked) {
    display.innerText = mantras[getRandomIndex(mantras)]
  }
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
