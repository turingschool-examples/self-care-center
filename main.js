var affirmationRadio = document.querySelector('.affirmation-message');
var mantraRadio = document.querySelector('.mantra-message');
var createMessageButton = document.querySelector('button');


createMessageButton.addEventListener('click', selectMessage);

function selectMessage() {
    if (affirmationRadio.checked) {
       
    } else if (mantraRadio.checked) {
       
    }
}

function createMessage() {
    
}

function getRandomMessage(messageType) {
    return Math.floor(Math.random() * messageType.length);
}