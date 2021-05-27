/*---------Query Selectors and global variables ---------------*/
var currentMessage;
var favoriteMessages = [];

var form = document.querySelector('form');
var radio = form.elements['message-type'];
var submit = document.getElementById("submit")
var displayMessageSection = document.querySelector(".display-message");
var homePageSection = document.querySelector(".main-page")
var favoritesPage = document.querySelector(".favorites-page")
var viewFavoriteMessagesButton = document.querySelector(".view-saved");
var homeButton = document.querySelector(".home-button");
var messagesGrid = document.querySelector(".saved-messages-grid");



/*---------Event Listeners ---------------*/
submit.addEventListener("click", displayMessage);
viewFavoriteMessagesButton.addEventListener("click", showFavorites);
homeButton.addEventListener("click", showHomePage);
favoritesPage.addEventListener("dblclick", function(event) {
  deleteFavoriteMessage(event);
});



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
  var newMessage = new Message(currentMessage);
  favoriteMessages.push(newMessage);
}

//   if(favoriteMessages.length === 0 ) {
//     var newMessage = new Message(currentMessage);
//     favoriteMessages.push(newMessage);
//     console.log(newMessage, favoriteMessages);
//     // favoriteMessages.push(new Message(currentMessage))};
//   } else if(favoriteMessages.length > 0) {
//
//         for (var i = 0; i < favoriteMessages.length; i ++) {
//             if (`favoriteMessages[i].messageText` !== currentMessage) {
//               var newMessage = new Message(currentMessage);
//               favoriteMessages.push(newMessage);
//               // favoriteMessages.push(new Message(currentMessage))
//             }
//         }
//
//   }
// }
// if (!favoriteMessages.length) {
//   favoriteMessages.push(new Message(currentMessage))
// } else {
// for (var i = 0; i < favoriteMessages.length; i ++) {
//     if (`favoriteMessages[i].messageText` !== currentMessage) {
//       favoriteMessages.push(new Message(currentMessage))
//   }
//   }
// }

function renderFavorites() {

  messagesGrid.innerHTML = '';

  for (var i = 0; i < favoriteMessages.length; i++) {

    messagesGrid.innerHTML +=

    `
    <section class="message-box" id="${favoriteMessages[i].id}">
      <p class="favorite-message-paragraph">${favoriteMessages[i].messageText}<p>
    </section>
      `
    }
}


function showFavorites() {
  homePageSection.classList.add('hidden');
  favoritesPage.classList.remove('hidden');
  renderFavorites();
}

function showHomePage(){
  homePageSection.classList.remove('hidden');
  favoritesPage.classList.add('hidden');
}


// Users should be able to remove a message from their list of favorites, by clicking a button.




function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
