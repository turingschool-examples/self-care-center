
// Restate the goal: 
// I need to build a web app that will allow users to recieve a self care 
// message. They should be able to select the type of message they want 
// to recieve, click a button, and then see a randomly generated message
// Data Types: 
// I need have a data model - this will be an array or arrays that store the 
// messages in them
// I will be working with strings - these will be the messages
// I will be working with radio buttons
// Questiions:
// is it better to use innerHTML or createElement and then appendChild when 
// displaying something to the DOM?
// should I be using display: hidden for the image currently in the output
// how do I read the value of a radio button? or see if it is checked?
// Psuedocode:
// I need to add a heart emoji to favorite a message when the quote is rendered
// do I want to change my delete button to be an X emoji?
// how do I make a button into an emoji?
// when a user clicks the favorite icon, the quote needs to be stored in 
// another array, but still persist in the orginal array
// the favorited quote needs to have the the heart change colors on favorite
// if the quote is favorited, should it not show in the random quote generator?
// or should it just show the favorite icon when it comes up again?
// should the quotes be objects, so I can add a favorite key to them?
// I should have a show favorites button? 
// if I create an object for each element should there be an isFavorited: false key?
// when the heart is clicked isFavorite: true
// if isFavorite === true, heart changes to red
// if there is a show favorite button, I need to loop through the array and 
// display the indexes with isFavorite: true
// or is it easier to put the quotes that are clicked on into another array
// and access that array? 
// do I loop through the favorite array and check to see if a quote is in there
// before rendering to the dom? Then set the heart based on that? 

//<><>Data Model<><>
var affiramtions = ["I am worthy of love and respect",
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

var favorites = [];

//<><>Query Selectors<><>
var affrimationRadio = document.querySelector('#radio-button-affirmation');
var mantraRadio = document.querySelector('#radio-button-mantra');
var recieveMessageButton = document.querySelector('#message-button');
var outputSection = document.querySelector('#message-output-box');
var outputImage = document.querySelector('#meditation-image');
var h3 = document.querySelector('h3');

//<><>Event Listeners<><>
recieveMessageButton.addEventListener('click', makeNewMessage);
affrimationRadio.addEventListener('click', errorReset);
mantraRadio.addEventListener('click', errorReset);

//<><>Event Handlers<><>
function makeNewMessage() {
    if (affrimationRadio.checked) {
        recieveMessageButton.disabled = false;
        var affirmMessage = randomIndex(affiramtions);
        outputImage.classList.add('hidden');
        outputSection.innerHTML = `<h2 class="emoji-button" id="favorite-button">🤍</h2>
        <h4>"${affirmMessage}"</h4>
        <h2 class="emoji-button" id="clear-button">❌</h2>`;
        var clearButton = document.querySelector('#clear-button');
        clearButton.addEventListener('click', clearMessage);
        var favoriteButton = document.querySelector('#favorite-button');
        checkFavorites(affirmMessage, favoriteButton);
        favoriteButton.addEventListener('click', () => {
            favoriteButton.innerText = '❤️';
            addFavorite(affirmMessage);
        })
        outputSection.classList.add('output-message');
    } 
    if (mantraRadio.checked) {
        recieveMessageButton.disabled = false;
        var mantraMessage = randomIndex(mantras);
        outputImage.classList.add('hidden');
        outputSection.innerHTML = `<h2 class="emoji-button" id="favorite-button">🤍</h2>
        <h4>"${mantraMessage}"</h4>
        <h2 class="emoji-button" id="clear-button">❌</h2>`;
        var clearButton = document.querySelector('#clear-button');
        clearButton.addEventListener('click', clearMessage);
        var favoriteButton = document.querySelector('#favorite-button');
        checkFavorites(mantraMessage, favoriteButton);
        favoriteButton.addEventListener('click', () => {
            favoriteButton.innerText = '❤️';
            addFavorite(mantraMessage);
        })
        outputSection.classList.add('output-message');
    }
    if (!mantraRadio.checked && !affrimationRadio.checked) {
        recieveMessageButton.disabled = true;
        recieveMessageButton.classList.add('pointer-handling')
        h3.innerText = '✨PLEASE CHOOSE AN OPTION✨';
        h3.classList.add('error-handling');
    }
}

function errorReset() {
    if (affrimationRadio.checked) {
        recieveMessageButton.disabled = false;
        recieveMessageButton.classList.remove('pointer-handling');
        h3.classList.remove('error-handling');
        h3.innerText = 'Which type of message?';
    }
    if (mantraRadio.checked) {
        recieveMessageButton.disabled = false;
        recieveMessageButton.classList.remove('pointer-handling');
        h3.classList.remove('error-handling');
        h3.innerText = 'Which type of message?';
    }
}

function clearMessage() {
    outputSection.innerHTML = `<img src="assets/meditate.svg" id="meditation-image"alt="meditation-emoji">`;
}

//<><>Functions<><>
function randomIndex(messages) {
    var randInd = Math.floor(Math.random() * messages.length) ;
    var randMessage = messages[randInd];
    return randMessage;
}

function addFavorite(message) {
    if (!favorites.includes(message)) {
    favorites.push(message);
    }
}

function checkFavorites(message, favoriteButton) {
    if (favorites.includes(message)) {
        favoriteButton.innerText = '❤️'
    }
}

// function removeFavorite() {
//     if ()
// }


