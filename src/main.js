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
  <button class="favorite"><3</button>
  `
  var favoriteButton = document.querySelector("button");
  favoriteButton.addEventListener("click", favoriteAMessage);
}



function favoriteAMessage() {
    if (!favoriteMessages.length) {
      favoriteMessages.push(new Message(currentMessage))
    } else {
    for (var i = 0; i < favoriteMessages.length; i ++) {
        if (`favoriteMessages[i].messageText` !== currentMessage) {
          favoriteMessages.push(new Message(currentMessage))
      }
      }
    }
}

    //when press favorite, create a new message object and push that in if id and message doesn't match.



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
