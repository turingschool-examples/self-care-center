// page display
const pageWelcome = document.querySelector('.welcome-page');
const pageFavorites = document.querySelector('.favorites-page');

// buttons
const typeSelection = document.querySelectorAll('input[type="radio"]');
const buttonSubmit = document.getElementById('submit');
const buttonClear = document.getElementById('clear');
const buttonFavorite = document.getElementById('favorite');
const buttonViewFavorite = document.getElementById('view-favorite')
const buttonReturn = document.getElementById('return-to-welcome');
const buttonDelete = document.getElementById('deletion');

// welcome page message return screen
const messageDisplay = document.querySelector('.message-display');
const meditationImage = document.querySelector('img');
const returnMessage = document.getElementById('message-returned');

// favorites page quotes
const specificQuote = document.querySelector('.saved-quotes');
const displayFavorites = document.querySelector('.saved-quotes');

// global variables
const affirmations = [
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
    'I honor my body by trusting the signals that it sends me.',
    'I manifest perfect health by making smart choices.',
];
const mantras = [
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
let savedFavorites = [];
let newFavorite;
let unwantedQuote;


// eventListeners

buttonSubmit.addEventListener('click', event => {
    returnRandomMessage(event)
});
buttonFavorite.addEventListener('click', addFavoriteMessage);
buttonViewFavorite.addEventListener('click', displayFavoritesPage);
specificQuote.addEventListener('click', event => { quoteSelection(event) });
buttonDelete.addEventListener('click', event => {
    deleteQuote(event)
});

// ~~~*Main Page Functionality*~~

function returnRandomMessage(event) {
    event.preventDefault();
    hide(meditationImage);
    let messageChoice = evaluateMessageChoice();
    switch (messageChoice) {
        case 'affirmations':
            returnMessage.innerText = affirmations[getRandomIndex(affirmations)];
            newFavorite = returnMessage.innerText;
            displayAddionalButtons();
            break;
        case 'mantras':
            returnMessage.innerText = mantras[getRandomIndex(mantras)];
            newFavorite = returnMessage.innerText;
            displayAddionalButtons();
            break;
        default:
            returnMessage.innerText = 'Please select your message type preference above ⬆.'
    }
}

function displayAddionalButtons() {
    show(buttonClear);
    show(buttonFavorite);
};

function evaluateMessageChoice() {
    for (let i = 0; i < typeSelection.length; i++) {
        if (typeSelection[i].checked) {
            return typeSelection[i].defaultValue
        }
    }
}

function addFavoriteMessage(event) {
    event.preventDefault();
    show(buttonViewFavorite);
    if (!savedFavorites.includes(newFavorite)) {
        savedFavorites.push(newFavorite);
    };
};

function getRandomIndex(messages) {
    return Math.floor(Math.random() * messages.length);
};


// ~~~*Favorites Page Functionality*~~
function displayFavoritesPage() {
    hide(pageWelcome);
    show(pageFavorites);
    saveUserFavorites();
};

function saveUserFavorites() {
    let quoteHTML = "";
    savedFavorites.forEach(element => quoteHTML += `<p class="saved-quotes">${element}</p>`)
    displayFavorites.innerHTML = quoteHTML;
};

function quoteSelection(event) {
    unwantedQuote = event.target;
    unwantedQuote.classList.add('selected-quote');
};

function deleteQuote(event) {
    event.preventDefault();
    unwantedQuote.remove();
    const foundQuote = savedFavorites.indexOf(unwantedQuote.innerText);
    savedFavorites.splice(foundQuote, 1);
}

function hide(element) {
    element.classList.add('hidden');
}

function show(element) {
    element.classList.remove('hidden');
}