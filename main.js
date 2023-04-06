var affirmationRadio = document.querySelector('.affirmation-message');
var mantraRadio = document.querySelector('.mantra-message');
var createMessageButton = document.querySelector('.receive-message');
var saveMessageButton = document.querySelector('.save-message')
var createMessageBox = document.querySelector('.display-message');

createMessageButton.addEventListener('click', selectMessage);

function selectMessage() {
    if (affirmationRadio.checked) {
       createMessageBox.innerHTML = `<p>${createMessage(affirmations)}</p>`;

       if (createMessageBox.innerHTML === '<img src="./assets/meditate.svg" alt="enlightened buddha">') {
           toggleHiddenButton(saveMessageButton);
       }

    } else if (mantraRadio.checked) {
       createMessageBox.innerHTML = `<p>${createMessage(mantras)}</p>`;
       
       if (createMessageBox.innerHTML === '<img src="./assets/meditate.svg" alt="enlightened buddha">') {
           toggleHiddenButton(saveMessageButton);
       }
    }
}

function createMessage(messageType) {
    return messageType[getRandomMessage(messageType)];
}

function getRandomMessage(messageType) {
    return Math.floor(Math.random() * messageType.length);
}

function toggleHiddenButton(button) {
    button.classList.toggle('hidden');
}