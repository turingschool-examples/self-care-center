
//<><>Data Model<><>
var affirmations = ["I am worthy of love and respect",
"I embrace my uniqueness and individuality",
"I radiate positivity and attract abundance",
"I am confident in my abilities and talents",
"I am deserving of happiness and fulfillment",
"I trust in my journey and embrace uncertainty",
"I forgive myself and release all negativity",
"I am surrounded by love and support",
"I am capable of overcoming challenges",
"I am a magnet for success and prosperity",
"I choose joy and gratitude in every moment",
"I am enough just as I am",
"I am in control of my thoughts and emotions",
"I attract positivity and opportunities into my life",
"I am empowered to create the life I desire"];

var mantras =["I am at peace",
"I am here, I am now",
"I am love, I am light",
"I am strong, I am resilient",
"I am grateful for this moment",
"I trust in the journey of life",
"I let go of fear and embrace love",
"I am open to receiving abundance",
"I am connected to the universe",
"I am centered, I am grounded",
"I am worthy of love and joy",
"I am aligned with my purpose",
"I am guided by intuition",
"I am grateful for all experiences",
"I am a beacon of positivity"];

//<><>Favorites Storage<><>
var favorites = [];
var storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

//<><>Local Storage<><>
function saveFavoritesToLocalStorage(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

//<><>Variables<><>
var randomMessage;

//<><>Query Selectors<><>
var affrimationRadio = document.querySelector('#radio-button-affirmation');
var mantraRadio = document.querySelector('#radio-button-mantra');

var inputSection = document.querySelector('#user-input-box');
var outputSection = document.querySelector('#message-output-box');
var outputSectionImage = document.querySelector('#meditation-image');
var favoriteSection = document.querySelector('#favorites-section')

var messageOutput = document.querySelector('#random-message');
var messageTypeHeader = document.querySelector('#message-type');
var dblClickMessage = document.querySelector('#dbl-click-message');

var recieveMessageButton = document.querySelector('#message-button');
var favoritesButton = document.querySelector('#favorites-button');
var homeButton = document.querySelector('#home-button');

//<><>Event Handlers<><>
function makeNewMessage() {
    if (affrimationRadio.checked) {
        recieveMessageButton.disabled = false;
        randomMessage = randomIndex(affirmations);
        outputSectionImage.classList.add('hidden');
        outputSection.innerHTML = `<h2 class="button-pointer-handler" id="favorite-button">🤍</h2>
        <messageTypeHeader class="random-phrase">"${randomMessage}"</messageTypeHeader>
        <h2 class="button-pointer-handler" id="clear-button">❌</h2>`;
        var clearButton = document.querySelector('#clear-button');
        clearButton.addEventListener('click', () => {
            removeFavorite(storedFavorites, randomMessage);
            clearMessage();
            showFavoritesButton();
        });
        var favoriteButton = document.querySelector('#favorite-button');
        checkFavorites(randomMessage, favoriteButton, clearButton);
        favoriteButton.addEventListener('click', () => {
            addFavorite(randomMessage);
            showFavoritesButton();
            changeEmojiButtons(favoriteButton, clearButton);
        })
        outputSection.classList.add('output-message-size');
    } 
    if (mantraRadio.checked) {
        recieveMessageButton.disabled = false;
        randomMessage = randomIndex(mantras);
        outputSectionImage.classList.add('hidden');
        outputSection.innerHTML = `<h2 class="button-pointer-handler" id="favorite-button">🤍</h2>
        <messageTypeHeader class="random-phrase">"${randomMessage}"</messageTypeHeader>
        <h2 class="button-pointer-handler" id="clear-button">❌</h2>`;
        var clearButton = document.querySelector('#clear-button');
        clearButton.addEventListener('click', () => {
            removeFavorite(storedFavorites, randomMessage);
            clearMessage();
            showFavoritesButton();
        });
        var favoriteButton = document.querySelector('#favorite-button');
        checkFavorites(randomMessage, favoriteButton, clearButton);
        favoriteButton.addEventListener('click', () => {
            addFavorite(randomMessage);
            showFavoritesButton();
            changeEmojiButtons(favoriteButton, clearButton);
        })
        outputSection.classList.add('output-message-size');
    } 
    if (!mantraRadio.checked && !affrimationRadio.checked) {
        recieveMessageButton.disabled = true;
        recieveMessageButton.classList.add('error-pointer-handling')
        messageTypeHeader.innerText = '✨PLEASE CHOOSE AN OPTION✨';
        messageTypeHeader.classList.add('error-handling');
    }
}

function showFavoritesButton() {
    if (storedFavorites.length >= 1) {
        favoritesButton.classList.remove('hidden');
        favoritesButton.classList.add('recieve-message');
    } else if (storedFavorites.length === 0) {
        favoritesButton.classList.remove('recieve-message')
        favoritesButton.classList.add('hidden');
    }
}

function viewFavoritesPage() {
    favoriteSection.innerHTML = '';
    inputSection.classList.add('hidden');
    outputSection.classList.add('hidden');
    messageTypeHeader.classList.add('hidden');
    favoritesButton.classList.add('hidden');
    favoriteSection.classList.remove('hidden');
    favoriteSection.classList.add('favorites-output-container');  
    homeButton.classList.remove('hidden');
    homeButton.classList.add('recieve-message');
    dblClickMessage.classList.remove('hidden');
    dblClickMessage.classList.add('sub-heading');
    retrieveFavorites(storedFavorites);  
}

function viewHome() {
    inputSection.classList.remove('hidden');
    outputSection.classList.remove('hidden');
    outputSection.classList.add('message-output');
    messageTypeHeader.classList.remove('hidden');
    favoritesButton.classList.remove('hidden');
    favoriteSection.classList.add('hidden');
    homeButton.classList.add('hidden');
    dblClickMessage.classList.add('hidden');
    showFavoritesButton();
    clearMessage();
}

function radioReset() {
    if (affrimationRadio.checked) {
        recieveMessageButton.disabled = false;
        recieveMessageButton.classList.remove('error-pointer-handling');
        messageTypeHeader.classList.remove('error-handling');
        messageTypeHeader.innerText = 'Which type of message?';
    }
    if (mantraRadio.checked) {
        recieveMessageButton.disabled = false;
        recieveMessageButton.classList.remove('error-pointer-handling');
        messageTypeHeader.classList.remove('error-handling');
        messageTypeHeader.innerText = 'Which type of message?';
    }
}

//<><>Functions<><>
function randomIndex(messages) {
    var randInd = Math.floor(Math.random() * messages.length) ;
    var randMessage = messages[randInd];
    return randMessage;
}

function addFavorite(message) {
    if (!storedFavorites.includes(message)) {
        storedFavorites.push(message);
        saveFavoritesToLocalStorage(storedFavorites);
    }
}

function removeFavorite(favorites, message) {
    for (var i = 0; i < favorites.length; i++) {
        if (favorites[i] === message) {
            favorites.splice(i, 1);
            saveFavoritesToLocalStorage(storedFavorites);
        }
    }
    return favorites
}

function checkFavorites(message, favoriteButton, clearButton) {
    if (storedFavorites.includes(message)) {
        favoriteButton.innerText = '❤️';
        clearButton.innerText = '🗑️'
    }
}

function retrieveFavorites(favorites) {
    for (var i = 0; i < favorites.length; i++) {
        favoriteSection.innerHTML += 
        `<h2 class="favorite-display button-pointer-handler">${favorites[i]}</h2>`
    }
}

function deleteFromFavoritesContainer(e) {
    var favoriteMessage = e.target;
    for (var i = 0; i < storedFavorites.length; i++) {
        if (storedFavorites[i] === favoriteMessage.innerText) {
            storedFavorites.splice(i, 1);
            favoriteMessage.remove();
        }
    }
}

function changeEmojiButtons(heart, clear) {
    heart.innerText = '❤️';
    clear.innerText = '🗑️';
}

function clearMessage() {
    outputSection.innerHTML = `<img src="assets/meditate.svg" id="meditation-image"alt="meditation-emoji">`;
}

//<><>Event Listeners<><>
recieveMessageButton.addEventListener('click', makeNewMessage);
affrimationRadio.addEventListener('click', radioReset);
mantraRadio.addEventListener('click', radioReset);
favoritesButton.addEventListener('click', viewFavoritesPage);
homeButton.addEventListener('click', viewHome);
favoriteSection.addEventListener('dblclick', deleteFromFavoritesContainer);

showFavoritesButton();











