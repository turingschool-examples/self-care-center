var affirmationRadio = document.querySelector('.affirmation-message');
var mantraRadio = document.querySelector('.mantra-message');
var createMessageButton = document.querySelector('button');


createMessageButton.addEventListener('click', selectMessage);

function selectMessage() {
    if (affirmationRadio.checked) {
       createMessage(affirmations);
    } else if (mantraRadio.checked) {
       createMessage(mantras);
    }
}

function createMessage(messageType) {
    var messagePosition = getRandomMessage(messageType);
    return messageType[messagePosition];
}

function getRandomMessage(messageType) {
    return Math.floor(Math.random() * messageType.length);
}