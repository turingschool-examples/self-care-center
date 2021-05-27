/*---------Query Selectors and global variables ---------------*/
var message;
var favoriteMessages = [];

var form = document.querySelector('form');
var radio = form.elements['message-type'];

  // when the button is pressed
  // get the value of the radio button.

function displayMessage() {
  var message;
  if (radio.value === 'affirmation') {
    message = affirmations[getRandomIndex(affirmations)];
  } else if(radio.value === 'mantra'){
    message = mantras[getRandomIndex(mantras)];
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


  // if id.value === mantra, then pull from the affirmation  array and store that in a variable
  // if id.value === affirmation, then pull from the mantra array
  // store that in a currentMessage variable
