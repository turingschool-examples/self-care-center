/*---------Query Selectors and global variables ---------------*/
var currentMessage;
var favoriteMessages = [];

var form = document.querySelector('form');
var radio = form.elements['message-type'];
var submit = document.getElementById("submit")
var displayMessageSection = document.querySelector(".display-message");
var homePageSection = document.querySelector(".main-page")
var favoritesSection = document.querySelector(".favorites-page")
var viewFavoriteMessagesButton = document.querySelector(".view-saved");
var homeButton = document.querySelector(".home-button");



/*---------Event Listeners ---------------*/
submit.addEventListener("click", displayMessage);
viewFavoriteMessagesButton.addEventListener("click", showFavorites);
homeButton.addEventListener("click", showHomePage);



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

// When the “View Favorites” button is clicked, users should be taken to a new page that displays all of their favorite messages.

function showFavorites() {
  homePageSection.classList.add('hidden');
  favoritesSection.classList.remove('hidden');

  renderFavorites();
}

function showHomePage(){
  homePageSection.classList.remove('hidden');
  favoritesSection.classList.add('hidden');
}

renderFavorites(){
  for (var i = 0; i < favoriteMessages.length; i++) {
  //using +=
  //add this html with this class each time.
  //first think how do you want to set it up?

  savedCoversSection.innerHTML +=
  `
  <section class="mini-cover" id="${savedCovers.length}">
    <img class="cover-image" src=${currentCovers[i].cover}>
    <h2 class="cover-title">${currentCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${currentCovers[i].tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
  </section>
  `
}

}


// Users should be able to remove a message from their list of favorites, by clicking a button.
// As you add these new elements to the page, be sure to match the style of existing elements.




function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
