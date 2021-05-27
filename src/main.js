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




function favoriteAMessage(e) {
  favoriteButton = document.querySelector(".favorite");
  var messageDisplayed = e.target.closest('p');
  favoriteMessages.push(new Message(messageDisplayed));
  console.log("messageDisplayed", messageDisplayed);
  console.log("favoriteMessages", favoriteMessages);

}



//When the “Favorite” button is clicked, that message should be added to a new list of favorite messages.
  //when the favorite button is clicked, add this current message to the array.
    //put a query selector on the button within this method.

      //querySelector(".favorite")
    //have an event listner on that button


    //when press favorite, create a new message object and push that in if id and message doesn't match.
    //put id in each html random id with id = Math.random()
    //


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
