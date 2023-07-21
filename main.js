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

//QuerySelectors:
var formButton = document.querySelector('#form');
var affirmationButton = document.querySelector('#option1');
var mantraButton = document.querySelector('#option2');
var meditationIcon = document.querySelector('#meditationIcon');
var hiddenMessage = document.querySelector('.hiddenMessage');

//Functions:
function getRandomIndex(messages) {
    var randomIndexNumber = Math.floor(Math.random() * array.length);
    return messages[randomIndexNumber];
}

function createMessage() {
    var newMessage = "";

    if(affirmationButton.checked){
        newMessage = getRandomIndex(affirmation);
    } else if(mantraButton.checked) {
        newMessage = getRandomIndex(mantra);
    } else {
        newMessage = `Please select a choice of message above.`
    }
    return newMessage;
}
 
function changeElementVisibility() {
    hiddenMessage.innerText = createMessage();
    meditationIcon.style.display = "none";
    hiddenMessage.style.display = "block";
    
}

//Event Listener
formButton.addEventListener("submit", (e) => {e.preventDefault();

changeElementVisibility();
})