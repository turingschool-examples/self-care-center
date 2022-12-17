var selectedType;
var messageBox = document.querySelector('.message-pop-up');
var receiveBtn = document.querySelector('#receive-btn');
var meditateIcon = document.querySelector('.meditate-icon');
var affirmRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');
var favoriteBtn = document.querySelector('#favorite-button');
var homeView = document.querySelector('.home-view');
var favoritesView = document.querySelector('.favorites-view');
var viewFavoritesBtn = document.querySelector('#view-favorites-button');
var affirmMessage = document.querySelector('.fav-affirm-msg');
var mantraMessage = document.querySelector('.fav-mantra-msg');
var homeBtn = document.querySelector('#home-btn');
var mantraHeader = document.querySelector('.mantra-heading');
var affirmHeader = document.querySelector('.affirm-heading');
var currentMessage;
var favoriteAffirmations = [];
var favoriteMantras = [];

affirmRadio.addEventListener('click', changeSelection);
mantraRadio.addEventListener('click', changeSelection);
receiveBtn.addEventListener('click', showMessage);
favoriteBtn.addEventListener('click', saveMessage);
viewFavoritesBtn.addEventListener('click', showFavoritesPage);
homeBtn.addEventListener('click', showHomePage);

function showHomePage() {
    hideElement(favoritesView);
    showElement(homeView);
    showElement(meditateIcon);
}

function showFavoritesPage() {
    if (favoriteMantras.length || favoriteAffirmations.length) {
        hideElement(homeView);
        showElement(favoritesView);
        hideElement(favoriteBtn);
        hideElement(messageBox);
        showFavoriteMessages();
    } else {
        alert('💛 You haven\'t favorited any messages yet 💛')
    }
}

function showFavoriteMessages() {
    affirmMessage.innerText = '';
    mantraMessage.innerText = '';
    if (favoriteAffirmations.length) {
        showElement(affirmHeader);
        showFavAffirmations(affirmMessage, favoriteAffirmations);
    }
    if (favoriteMantras.length) {
        showElement(mantraHeader);
        showFavAffirmations(mantraMessage, favoriteMantras);
    }
}

function showFavAffirmations(element, favoriteMessages) {
    for (var i = 0; i < favoriteMessages.length; i++) {
        element.innerHTML += `<p>${favoriteMessages[i]}</p>`;
    }
}

//remove alert when saving message but show some feedback
function saveMessage() {
    var selectedMessage = document.querySelector('.message-pop-up').innerText;
    if (selectedType === "affirmation") {
        if (!favoriteAffirmations.includes(selectedMessage)) {
            favoriteAffirmations.push(selectedMessage);
            alert('💛 Your message has been added to favorites 💛');
        }
    } else {
        if (!favoriteMantras.includes(selectedMessage)) {
            favoriteMantras.push(selectedMessage);
            alert('💛 Your message has been added to favorites 💛');
            console.log(favoriteMantras);
        }
    }
    showViewFavoritesBtn();
}

function showViewFavoritesBtn() {
    showElement(viewFavoritesBtn);
}

function changeSelection(event) {
    selectedType = event.target.value;
}

function updateMessage() {
    if (selectedType === "affirmation") {
        messageBox.innerHTML = affirmations[Math.floor(Math.random() * affirmations.length)];
    } else {
        messageBox.innerHTML = mantras[Math.floor(Math.random() * mantras.length)];
    }
}

function hideElement(element) {
    element.classList.add('hidden');
}

function showElement(element) {
    element.classList.remove('hidden');
}

function showMessage() {
    if (selectedType) {
        updateMessage();
        showElement(messageBox);
        hideElement(meditateIcon);
        showElement(favoriteBtn);
    }
}