var affirmationRadio = document.querySelector('.affirmation-message');
var mantraRadio = document.querySelector('.mantra-message');
var createMessageButton = document.querySelector('.receive-message');
var saveMessageButton = document.querySelector('.save-message');
var viewSavedMessages = document.querySelector('.view-saved')
var createMessageBox = document.querySelector('.display-message');

var savedMessages = [];
var currentMessage;

createMessageButton.addEventListener('click', selectMessage);
saveMessageButton.addEventListener('click', function() {
    saveMessage();

    if (savedMessages.length) {
        viewSavedMessages.classList.remove('hidden');
    }
});


function selectMessage() {
    if (affirmationRadio.checked) {
        
        if (createMessageBox.innerHTML === `<img src="./assets/meditate.svg" alt="enlightened buddha">`) {
            toggleHiddenButton(saveMessageButton);
        }

        createMessageBox.innerHTML = `<p>${createMessage(affirmations)}</p>`;

    } else if (mantraRadio.checked) {
        
        if (createMessageBox.innerHTML === `<img src="./assets/meditate.svg" alt="enlightened buddha">`) {
            toggleHiddenButton(saveMessageButton);
        }

        createMessageBox.innerHTML = `<p>${createMessage(mantras)}</p>`;
    }
}

function createMessage(messageType) {
    currentMessage = messageType[getRandomMessage(messageType)];
    return currentMessage;
}

function getRandomMessage(messageType) {
    return Math.floor(Math.random() * messageType.length);
}

function toggleHiddenButton(button) {
    button.classList.toggle('hidden');
}

function saveMessage() {
    if (!savedMessages.includes(currentMessage)) {
        savedMessages.push(currentMessage);
    }
}