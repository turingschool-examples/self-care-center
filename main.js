// page display
var pageWelcome = document.querySelector('.welcome-page');
var pageFavorites = document.querySelector('.favorites-page');

// buttons
var buttonAffirmation = document.getElementById('choice1');
var buttonMantra = document.getElementById('choice2');
var buttonSubmit = document.querySelector('.submit');
var buttonClear = document.getElementById('clear');
var buttonFavorite = document.getElementById('favorite');
var buttonDisplayFavorites = document.getElementById('display-favorites')

// message return screen
var messageDisplay = document.querySelector('.message-display');
var meditationImage = document.querySelector('img');
var returnMessage = document.getElementById('message-returned');

// global variables
var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom and power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trsuting the signals that it sends me.',
  'I manifest perfect health by making smart choices.',
];
var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Do not let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you, and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday in not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.',
];
var savedFavorites = [];
var newFavorite;
class FavoriteQuotes{
  constructor(type, quote) {
    this.id = Date.now();
    this.type = type;
    this.quote = quote;
  }
}

// eventListeners

buttonSubmit.addEventListener('click', returnRandomMessage);
buttonFavorite.addEventListener('click', storeFavoriteMessage);
buttonDisplayFavorites.addEventListener('click', displayFavoritesPage)

// ~~~*Main Page Functionality*~~

function returnRandomMessage() {
  event.preventDefault();
  meditationImage.classList.add("hidden");
  returnMessage.classList.remove("hidden");
  if (buttonAffirmation.checked) {
    returnMessage.innerText = affirmations[getRandomIndex(affirmations)];
    newFavorite = new FavoriteQuotes('affirmation', returnMessage.innerText);
    displayAddionalButtons();
  } else if (buttonMantra.checked) {
    returnMessage.innerText = mantras[getRandomIndex(mantras)];
    newFavorite = new FavoriteQuotes('mantra', returnMessage.innerText);
    displayAddionalButtons();
  } else {
    returnMessage.innerText = 'Please select your message type preference above ⬆.'
  }
}

function displayAddionalButtons () {
  buttonClear.style.display="inline-block";
  buttonFavorite.style.display="inline-block";
}

function storeFavoriteMessage() {
  event.preventDefault();
  if (savedFavorites.id !== newFavorite.id) {
  savedFavorites.push(newFavorite);
  console.log(savedFavorites);
  buttonDisplayFavorites.style.display="inline-block";
}
}

function getRandomIndex(messages) {
  return Math.floor(Math.random() * messages.length);
};


// ~~~*Favorites Page Functionality*~~
function displayFavoritesPage() {
  pageWelcome.classList.add("hidden");
  pageFavorites.classList.remove("hidden");
}
