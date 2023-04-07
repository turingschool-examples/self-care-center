// Goal: When the user clicks on the receive message button, the corresponding mantra or affirmation will display in place of the meditation icon.

// Steps:
    // Make a function that returns a random index.
    // Make a function that checks to see if the mantra or affirmation selector is picked, and then uses the random index function to pick a mantra or affirmation.
    // Make an event listener that responds to click.
    // update HTML to hide the buddha icon and display text
    // update CSS to style text. 

// make a variable that accesses buddha box
// make variable that accesses message

var buddha = document.querySelector('.buddha-icon');
var message = document.querySelector('.message');
var receiveBtn = document.querySelector('.receive-btn');
var affirmationBtn = document.querySelector('.affirmation-btn');
var mantraBtn = document.querySelector('.mantra-btn');
var favBtn = document.querySelector('.favorite');
var favoritesPageBtn = document.querySelector('.favorites-page-btn');
// navigation
var homePage = document.querySelector('.home-page');
var favoritesPage = document.querySelector('.favorites-page');
var favorites = [];
var currentMessage = [];
var mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    "Dont let yesterday take up too much of today.",
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
    
    var affirmations = [
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
    'I manifest perfect health by making smart choices.'
    ];

receiveBtn.addEventListener('click', function() {
    displayMessage();
    var displayedMessage = getMessage();
    message.innerText = displayedMessage.message;
})

function displayMessage() {
    buddha.classList.add('hidden');
    message.classList.remove('hidden');
    favBtn.classList.remove('hidden');
}

function getMessage() {
    var displayedMessage = {
        message: 'Would you like a mantra or an affirmation?',
        id: Date.now
    }
    if (mantraBtn.checked) {
        var index = Math.floor(Math.random() * mantras.length);
        displayedMessage.message = mantras[index];
    } else if (affirmationBtn.checked) {
        var index = Math.floor(Math.random() * affirmations.length);
        displayedMessage.message = affirmations[index];
    } 
    currentMessage.splice(0, 1, displayedMessage)
    return displayedMessage;
}

favBtn.addEventListener('click', function() {
    var displayedMessage = message.innerText;
    favorites.push(currentMessage);
    favoritesPageBtn.classList.remove('hidden');

});

favoritesPageBtn.addEventListener('click', function() {
    homePage.classList.add('hidden');
    favoritesPage.classList.remove('hidden');
})
// Favorite button

// Goal 2: Create a nav button that allows the user to see the favorited messages.
// Steps: Make a button in an asthetic location on the page. Top Left dropdown menu maybe.
// If the user selects the button it will hide the homepage and display favorited messages.
    // Favorited messages will be in boxes styled similar to the home page boxes. Aligned in the center.



