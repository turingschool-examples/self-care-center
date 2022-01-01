// Selector Variables here ⛷

var meditationImage = document.querySelector('.meditation-img');
var yourMessage = document.querySelector('.your-message');

var messageButton = document.querySelector('#receive-button');
var affirmationRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');
var clearButton = document.querySelector('.clear-btn');
var emptyHeartButton = document.querySelector('.empty-heart-btn-container');
var fullHeartButton = document.querySelector('.full-heart-btn-container');
var faveButton = document.querySelector('.fave-btn');
var backToMainBtn = document.querySelector('.main-btn')

var favoritesPage = document.querySelector('.favorites-page');
var favoritesCenter = document.querySelector('.fave-center');
var mainSubHeader = document.querySelector('.sub-header');
var mainMessageForm = document.querySelector('.message-form');
var messageCenter = document.querySelector('.message-center');



// Data here ⛷

var affirmations = [
    {text: "I forgive myself and set myself free.", type: "affirmation", isFavorited: false, id: 0},
    {text: "I believe I can be all that I want to be.", type: "affirmation", isFavorited: false, id: 1},
    {text: "I am in the process of becoming the best version of myself.", type: "affirmation", isFavorited: false, id: 2},
    {text: "I choose to be kind to myself and love myself unconditionally.", type: "affirmation", isFavorited: false, id: 3},
    {text: "My possibilities are endless.", type: "affirmation", isFavorited: false, id: 4},
    {text: "I am worthy of my dreams.", type: "affirmation", isFavorited: false, id: 5},
    {text: "I am enough.", type: "affirmation", isFavorited: false, id: 6},
    {text: "I deserve to be healthy and feel good.", type: "affirmation", isFavorited: false, id: 7},
    {text: "I am full of energy and vitality and my mind is calm and peaceful.", type: "affirmation", isFavorited: false, id: 8},
    {text: "Every day I am getting healthier and stronger.", type: "affirmation", isFavorited: false, id: 9},
    {text: "I honor my body by trusting the signals that it sends me.", type: "affirmation", isFavorited: false, id: 10},
    {text: "I manifest perfect health by making smart choices.", type: "affirmation", isFavorited: false, id: 11},
  ];
  var mantras = [
    {text: "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", type: "mantra", isFavorited: false, id: 12},
    {text: "Don’t let yesterday take up too much of today.", type: "mantra", isFavorited: false, id: 13},
    {text: "Every day is a second chance.", type: "mantra", isFavorited: false, id: 14},
    {text: "Tell the truth and love everyone.", type: "mantra", isFavorited: false, id: 15},
    {text: "I am free from sadness.", type: "mantra", isFavorited: false, id: 16},
    {text: "I am enough.", type: "mantra", isFavorited: false, id: 17},
    {text: "In the beginning it is you, in the middle it is you and in the end it is you.", type: "mantra", isFavorited: false, id: 18},
    {text: "I love myself.", type: "mantra", isFavorited: false, id: 19},
    {text: "I am present now.", type: "mantra", isFavorited: false, id: 20},
    {text: "Inhale the future, exhale the past.", type: "mantra", isFavorited: false, id: 21},
    {text: "This too shall pass.", type: "mantra", isFavorited: false, id: 22},
    {text: "Yesterday is not today.", type: "mantra", isFavorited: false, id: 23},
    {text: "The only constant is change.", type: "mantra", isFavorited: false, id: 24},
    {text: "Onward and upward.", type: "mantra", isFavorited: false, id: 25},
    {text: "I am the sky, the rest is weather.", type: "mantra", isFavorited: false, id: 26},
  ];

var favoriteMessages = [];
var currentMessage;

// Event Listeners here ⛷

affirmationRadio.addEventListener('click', enableReceiveBtn);
mantraRadio.addEventListener('click', enableReceiveBtn);
messageButton.addEventListener('click', pickAMessage);
clearButton.addEventListener('click', clearMessage);
emptyHeartButton.addEventListener('click', favoriteMessage);
fullHeartButton.addEventListener('click', favoriteMessage);
faveButton.addEventListener('click', viewFavoritesPage);
backToMainBtn.addEventListener('click', viewMainPage);
favoritesPage.addEventListener('click', removeFromFavorites);



// Event handlers/functions here ⛷

function getRandomMessage(array) {
    return Math.floor(Math.random() * array.length)
};

function pickAMessage() {
    if (affirmationRadio.checked) {
        receiveAffirmation();
    } else if (mantraRadio.checked) {
        receiveMantra();
    }
};

function receiveAffirmation() {
    showItem(yourMessage);
    hideItem(meditationImage);
    showItem(clearButton);
    disableReceiveBtn()
    clearRadioBtn();
    getRandomAffirmation();
    yourMessage.innerText = currentMessage.text;
    displayHeart();
};

function receiveMantra() {
    showItem(yourMessage);
    hideItem(meditationImage);
    showItem(clearButton);
    disableReceiveBtn()
    clearRadioBtn();
    getRandomMantra();
    yourMessage.innerText = currentMessage.text;
    displayHeart();
};

function getRandomAffirmation() {
    currentMessage = affirmations[getRandomMessage(affirmations)];
};

function getRandomMantra() {
    currentMessage = mantras[getRandomMessage(mantras)];
};

function clearMessage() {
    hideItem(yourMessage);
    showItem(meditationImage);
    hideItem(clearButton);
    hideItem(fullHeartButton);
    hideItem(emptyHeartButton);
    clearRadioBtn();
};

function clearRadioBtn() {
    affirmationRadio.checked = false;
    mantraRadio.checked = false;
};

function favoriteMessage() {
    if (!currentMessage.isFavorited) {
        currentMessage.isFavorited = true;
        favoriteMessages.push(currentMessage);
    } else {
        removeFavorite();
    }
    refreshMessageCenter();
    makeFavoritesList();
};        

function removeFavorite() {
    for (i = 0; i < favoriteMessages.length; i ++) {
        if (favoriteMessages.includes(currentMessage)) {
            currentMessage.isFavorited = false;
            favoriteMessages.splice(i, 1)
        }
    }
};

function displayHeart() {
    if (!currentMessage.isFavorited) {
        showItem(emptyHeartButton);
        hideItem(fullHeartButton);
    } else if (currentMessage.isFavorited) {
        showItem(fullHeartButton);
        hideItem(emptyHeartButton);
    }
};

function viewFavoritesPage() {
    showItem(favoritesPage);
    hideItem(mainSubHeader);
    hideItem(mainMessageForm);
    hideItem(messageCenter);
    hideItem(faveButton);
    clearMessage();
};

function viewMainPage() {
    hideItem(favoritesPage);
    showItem(mainSubHeader);
    showItem(mainMessageForm);
    showItem(messageCenter);
    showItem(faveButton);
};

function refreshMessageCenter() {
    yourMessage.innerText = currentMessage.text;
    displayHeart();
}

function enableReceiveBtn() {
    messageButton.disabled = false;
};

function disableReceiveBtn() {
    messageButton.disabled = true;
};

function showItem(selectorVariable) {
    selectorVariable.classList.remove('hidden')
};

function hideItem(selectorVariable) {
    selectorVariable.classList.add('hidden')
};

function makeFavoritesList() {
    favoritesCenter.innerHTML = ""
    for (var i = 0; i < favoriteMessages.length; i ++) {
        favoritesCenter.innerHTML += `
        <div class="fave-with-heart">
            <h3 class="fave-message">${favoriteMessages[i].text}</h3>
            <i class="fas fa-heart" id=${favoriteMessages[i].id}></i>
        </div>`
    }
};

function removeFromFavorites(e) {
    if (e.target.closest('.fa-heart')) {
        for (i = 0; i < favoriteMessages.length; i ++) {
            if (favoriteMessages[i].id === parseInt(e.target.closest('.fa-heart').id)) {
                favoriteMessages.splice(i, 1);
            }
        }
    }
    makeFavoritesList();
};
