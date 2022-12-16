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
var currentMessage;
var favoriteAffirmations = [];
var favoriteMantras = [];
//create favorite button var and on html
//once favoriteBtn has been clicked, viewFavoritesBtn appears

affirmRadio.addEventListener('click', changeSelection);
mantraRadio.addEventListener('click', changeSelection);
receiveBtn.addEventListener('click', showMessage);
favoriteBtn.addEventListener('click', saveMessage);
viewFavoritesBtn.addEventListener('click', showFavoritesPage);

function showFavoritesPage() {
    hideElement(homeView);
    showElement(favoritesView);
    hideElement(favoriteBtn);
    hideElement(messageBox);
    saveMessage();
    //add home button
    //show meditateIcon?
}

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