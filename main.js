// Query Selectors
var mainPage = document.querySelector('#js-main-page');
var favMsgPage = document.querySelector('#js-fav-msg');
var affirmationButton = document.querySelector('#affirmation');
var mantraButton = document.querySelector('#mantra');
var radioButtons = document.querySelector('form');
var receiveMessageButton = document.querySelector('#js-receive');
var messageDisplay = document.querySelector('#msg-and-fav');
var personImage = document.querySelector('#js-person-img');
var message = document.querySelector('#js-message');
var showMainButton = document.querySelector('#back-to-main');
var favMsgGrid = document.querySelector('#js-fav-msg-grid');
var viewFavsButton;
var likeButton;
var clearButton;

// Event Listeners
affirmationButton.addEventListener('click', enableReceive);
mantraButton.addEventListener('click', enableReceive);
showMainButton.addEventListener('click', resetPage);
favMsgGrid.addEventListener('dblclick', deleteMessage);

// Global Variables
var affirmations = [
  // '1',
  // '2',
  // '3',
  // '4',
  // '5',
  // '6',
  // '7',
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.',
];
var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
];
var favoritedMessages = [];
var seenAffirmations = [];
var seenMantras = [];
var currentMessage;

// Functions & Event Handlers
function enableReceive() {
  receiveMessageButton.addEventListener('click', displayMessage);
}

function changeHidden(hide, show) {
  if (hide) {
    for (var i = 0; i < hide.length; i++) {
      hide[i].classList.add('hidden');
    }
  }
  if (show) {
    for (var i = 0; i < show.length; i++) {
      show[i].classList.remove('hidden');
    }
  }
}

function getRandomIndex(messageType) {
  var index = Math.floor(Math.random() * messageType.length);
  return messageType[index];
}

function generateMessage() {
  if (affirmationButton.checked) {
    currentMessage = getRandomIndex(affirmations);
    noRepeats(affirmations, seenAffirmations);
  } else if (mantraButton.checked){
    currentMessage = getRandomIndex(mantras);
    noRepeats(mantras, seenMantras)
  }
  return currentMessage;
}

function noRepeats(messageType, seenArray) {
  if (seenArray.length !== messageType.length) {
    if (seenArray.includes(currentMessage)) {
      generateMessage();
    } else {
      seenArray.push(currentMessage);
    }
  } else {
    currentMessage = resetNoRepeats(messageType);
  }
}

function resetNoRepeats(messageType) {
  if (messageType === affirmations) {
    seenAffirmations = [currentMessage];
    var viewedAll = 'affirmations';
  } else {
    seenMantras = [currentMessage];
    var viewedAll = 'mantras';
  }
  likeButton.classList.add('hidden');
  return `You have viewed all ${viewedAll}. You will now start seeing repeats.`;
}

function displayMessage() {
  enableFavorite();
  changeHidden([personImage], [likeButton, messageDisplay]);
  message.innerText = generateMessage();
  displayClearButton();
  displayViewFavsButton();
  likeButton.classList.remove('pink');
  if (favoritedMessages.includes(currentMessage)) {
    likeButton.classList.add('pink');
  }
}

function displayClearButton() {
  clearButton = document.querySelector('#js-clear');
  clearButton.addEventListener('click', resetPage);
  changeHidden([], [clearButton]);
}

function displayViewFavsButton() {
  viewFavsButton = document.querySelector('#js-fav-button');
  viewFavsButton.addEventListener('click', showFavPage);
  changeHidden([], [viewFavsButton]);
}

function showFavPage() {
  changeHidden([mainPage], [favMsgPage]);
  makeFavMsgGrid();
}

function enableFavorite() {
  likeButton = document.querySelector('#js-like');
  likeButton.addEventListener('click', favoriteMessage);
}

function resetPage() {
  receiveMessageButton.removeEventListener('click', displayMessage);
  changeHidden([favMsgPage, messageDisplay, clearButton, viewFavsButton], [mainPage, personImage]);
  for (var i = 0; i < radioButtons.elements.length; i++) {
    radioButtons.elements[i].checked = false;
  }
}

function favoriteMessage() {
  if (!likeButton.classList.contains('pink')) {
    likeButton.classList.add('pink');
    if (!favoritedMessages.includes(currentMessage)) {
      favoritedMessages.push(currentMessage);
    }
  } else {
    likeButton.classList.remove('pink');
    for (var i = 0; i < favoritedMessages.length; i++) {
      if (favoritedMessages[i] === currentMessage) {
        favoritedMessages.splice(i, 1);
      }
    }
  }
}

function makeFavMsgGrid() {
  favMsgGrid.innerHTML = '';
  for (var i = 0; i < favoritedMessages.length; i++) {
    favMsgGrid.innerHTML += `
    <article class="mini-message" id="${i}">
    <p>${favoritedMessages[i]}</p>
    `
  }
}

function deleteMessage() {
  var messageToDelete = event.target.innerText;
  for (var i = 0; i < favoritedMessages.length; i++) {
    if (messageToDelete === favoritedMessages[i]) {
      favoritedMessages.splice(i, 1);
    }
  }
  makeFavMsgGrid();
}
