//Array of affirmations:

var affirmations = [
"I am enough. I have enough",
"I am in the right place, at the right time, doing the right thing",
"I can do hard things",
"I allow myself to be more fully me",
"I believe in myself",
"I am grateful for another day of life",
"I am worthy of what I desire",
"I choose myself",
"I am resilient in the face of challenges",
"I am proud of myself and my achievements",
"I will accomplish everything I need to do today",
"I do my best, and my best is good enough",
"I prioritize my well-being",
"I overcome my fears by getting out of my comfort zone",
"I am love, and I am loved",
"I trust my inner guidance and follow it",
"I accept my emotions and let them move through me",
"I take care of myself, mind, body, and spirit",
"I trust myself to make the right decisions",
]

//Array of mantras:
var mantras = [
"I am loveable. I am loved",
"I am destined to find love",
"I deserve to find true love",
"I deserve a partner who loves me and treats me with respect",
"My life partner is waiting for me to find them",
"I wish to share my life with someone special",
"I wish to give my heart to someone special",
"My heart is open to love",
"I will find true love when the time is right",
"I wish to receive love and to give love",
"I am enough", 
"I love myself", 
"I am present now", 
"Inhale the future, exhale the past",
"I am free from sadness", 
"I am free from pain", 
"Don't let yesterday take up too much of today", 
"This too shall pass", 
"The only constant is change",
"I am the sky, the rest of weather",    
]

//QuerySelectors for receiving message: TOP SECTION BOX//
var receiveMessageButton = document.querySelector('#form');
var affirmationButton = document.querySelector('#option1');
var mantraButton = document.querySelector('#option2');

//QuerySelectors for receiving message: MIDDLE SECTION BOX//
var meditationIcon = document.querySelector('#meditationIcon');
var hiddenMessage = document.querySelector('#hiddenMessage');

//QuerySelectors for user message: HIDDEN FORM//
var userMessageForm = document.querySelector('#userMessageForm');
var affirmationUserButton = document.querySelector('#userOption1');
var mantraUserButton = document.querySelector('#userOption2');
var userHiddenBox = document.querySelector('#hiddenBox');

//Queryselectors for user add message//
var addMessageButton = document.querySelector('#addMessageButton');

//Functions:

//Random message function:
function getRandomIndex(messages) {
    var randomIndexNumber = Math.floor(Math.random() * messages.length);
    return messages[randomIndexNumber];
}

//Retrieving message function depending on mantras or affirmations array:
function createMessage() {
    var newMessage = "";

    if(affirmationButton.checked){
        newMessage = getRandomIndex(affirmations);
    } else if(mantraButton.checked) {
        newMessage = getRandomIndex(mantras);
    } else {
        newMessage = `Please select either a mantra or affirmation message.`
    }
    return newMessage;
}
 
//Sets the message, hide or unhide message for mantra or affirmation message function:
function changeElementVisibility() {
    hiddenMessage.innerText = createMessage();
    meditationIcon.style.display = "none";
    hiddenMessage.style.display = "block";
}

//FUNCTION
function changeAddMessageVisibility() {
    userHiddenBox.style.display = "block";
}

//Event Listener for recieve message button:
receiveMessageButton.addEventListener("submit", (e) => {
    e.preventDefault();
    changeElementVisibility();
})

addMessageButton.addEventListener("click", (e) => {
    e.preventDefault();
    changeAddMessageVisibility();

} )

