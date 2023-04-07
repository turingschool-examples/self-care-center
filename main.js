var affirmationRadio = document.querySelector('.affirmation-message');
var mantraRadio = document.querySelector('.mantra-message');
var createMessageButton = document.querySelector('.receive-message');
var favouriteMessageButton = document.querySelector('.save-message');
var viewFavouriteButton = document.querySelector('.view-favourite');
var viewHomeButton = document.querySelector('.home');
var mantraSelectBox = document.querySelector('.mantra-select');
var messageContainer = document.querySelector('.receive-messages');
var subTitle = document.querySelector('.sub-title');

var savedMessages = [];
var currentMessage;

// EVENT LISTENERS

createMessageButton.addEventListener('click', function(event){
        selectMessage();
    event.preventDefault();
});
favouriteMessageButton.addEventListener('click', function() {
    favouriteMessage();
    if (savedMessages.length) {
        viewFavouriteButton.classList.remove('hidden');
    }
});
viewFavouriteButton.addEventListener('click', function() {
    toggleHiddenButton(mantraSelectBox);
    toggleHiddenButton(viewHomeButton);
    toggleHiddenButton(viewFavouriteButton);
    viewFavouriteMessages();
    swapSubTitle();
});
viewHomeButton.addEventListener('click', function() {
    toggleHiddenButton(mantraSelectBox);
    toggleHiddenButton(viewHomeButton);
    toggleHiddenButton(viewFavouriteButton);
    viewHome();
    swapSubTitle();
});

// FUNCTIONS

function selectMessage() {
    var createMessageBox = document.querySelector('.display-message');

    if (affirmationRadio.checked) {
        if (createMessageBox.innerHTML === `<img src="./assets/meditate.svg" alt="enlightened buddha">`) {
            toggleHiddenButton(favouriteMessageButton);
        }

        createMessageBox.innerHTML = `<p>${createMessage(affirmations)}</p>`;

    } else if (mantraRadio.checked) {
        if (createMessageBox.innerHTML === `<img src="./assets/meditate.svg" alt="enlightened buddha">`) {
            toggleHiddenButton(favouriteMessageButton);
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

function favouriteMessage() {
    if (!savedMessages.includes(currentMessage)) {
        savedMessages.push(currentMessage);
    }
}

function viewFavouriteMessages() {
    messageContainer.innerHTML = '';
    for (var i = 0; i < savedMessages.length; i++) {
        // console.log(savedMessages[i]);
        messageContainer.innerHTML += `
            <section class="message-container">
                <p>${savedMessages[i]}</p>
            </section>`;
    }
}

function swapSubTitle() {
    if (viewFavouriteButton.classList.contains('hidden')) {
        subTitle.innerText = 'Saved messages';
    } else {
        subTitle.innerText = 'Which type of message?'
    }
}

function viewHome() {
    messageContainer.innerHTML = `
    <section class="message-container">
        <div class="display-message"><img src="./assets/meditate.svg" alt="enlightened buddha"></div>
        <button class="hidden save-message">Save Message</button>
    </section>`;
}