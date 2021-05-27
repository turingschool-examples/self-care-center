/*---------Query Selectors and global variables ---------------*/
var currentMessage;
var favoriteMessages = [];

var form = document.querySelector('form');
var radio = form.elements['message-type'];
var submit = document.getElementById("submit")
var displayMessageSection = document.querySelector(".display-message");

/*---------Event Listeners ---------------*/
submit.addEventListener("click", displayMessage);


/*---------Functions ---------------*/
function displayMessage() {
  event.preventDefault();
  if (radio.value === 'affirmation') {
    currentMessage = affirmations[getRandomIndex(affirmations)];
  } else if(radio.value === 'mantra'){
    currentMessage = mantras[getRandomIndex(mantras)];
  }
  renderCurrentMessage();
}

function renderCurrentMessage(){
  displayMessageSection.innerHTML =
  `
  <p>${currentMessage}</p>
  <button class="submit"><3</button>
  `
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


  // if id.value === mantra, then pull from the affirmation  array and store that in a variable
  // if id.value === affirmation, then pull from the mantra array
  // store that in a currentMessage variable
