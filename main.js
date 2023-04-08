var affirmationRadio = document.querySelector('.affirmation-message');
var mantraRadio = document.querySelector('.mantra-message');
var createMessageButton = document.querySelector('.create-message');
var favouriteMessageButton = document.querySelector('.save-message');
var viewFavouriteButton = document.querySelector('.view-favourite');
var viewHomeButton = document.querySelector('.home');
var mantraSelectBox = document.querySelector('.mantra-select');
var messageContainer = document.querySelector('.receive-messages');
var subTitle = document.querySelector('.sub-title');
var favouriteBox = document.querySelector('.favourite-box');
var messageHtmlParagraph = document.querySelector('.message');
var imgBuddha = document.querySelector('.img-buddha');
var displayMessage = document.querySelector('.display-message-container')
var createMessageBox = document.querySelector('.display-message');

var savedMessages = [];
var currentMessage;

// EVENT LISTENERS

createMessageButton.addEventListener('click', selectMessage);

favouriteMessageButton.addEventListener('click', function() {
    favouriteMessage();
    if (savedMessages.length) {
        viewFavouriteButton.classList.remove('hidden');
    }
});

viewFavouriteButton.addEventListener('click', function() {
    affirmationRadio.checked = false;
    mantraRadio.checked = false
    toggleHiddenButton(mantraSelectBox);
    toggleHiddenButton(viewHomeButton);
    toggleHiddenButton(viewFavouriteButton);
    toggleHiddenButton(messageContainer);
    toggleHiddenButton(favouriteBox);
    toggleHiddenButton(displayMessage);
    viewFavouriteMessages();
    swapSubTitle();

    if (!messageHtmlParagraph.classList.contains('hidden')) {
        toggleHiddenButton(imgBuddha);
        toggleHiddenButton(messageHtmlParagraph);
        toggleHiddenButton(favouriteMessageButton);
    }
});

viewHomeButton.addEventListener('click', function() {
    toggleHiddenButton(mantraSelectBox);
    toggleHiddenButton(viewHomeButton);
    toggleHiddenButton(viewFavouriteButton);
    toggleHiddenButton(messageContainer);
    toggleHiddenButton(favouriteBox);
    toggleHiddenButton(displayMessage); 
    swapSubTitle();

    if (!savedMessages.length) {
        toggleHiddenButton(viewFavouriteButton);
    }
});

favouriteBox.addEventListener('click', deleteFavourite);

// FUNCTIONS

function selectMessage() {
    createMessageBox = document.querySelector('.display-message');

    if (affirmationRadio.checked) {
        if (!imgBuddha.classList.contains('hidden')) {
            toggleHiddenButton(imgBuddha);
            toggleHiddenButton(messageHtmlParagraph);
            toggleHiddenButton(favouriteMessageButton);
        }
        
        messageHtmlParagraph.innerText = createMessage(affirmations);

    } else if (mantraRadio.checked) {
        if (!imgBuddha.classList.contains('hidden')) {
            toggleHiddenButton(imgBuddha);
            toggleHiddenButton(messageHtmlParagraph);
            toggleHiddenButton(favouriteMessageButton);
        }
   
        messageHtmlParagraph.innerText = createMessage(mantras);
    }
}

function createMessage(messageType) {
    currentMessage = {
        message: messageType[getRandomMessage(messageType)],
        id: Date.now()
    };
    return currentMessage.message;
}

function getRandomMessage(messageType) {
    return Math.floor(Math.random() * messageType.length);
}

function toggleHiddenButton(button) {
    button.classList.toggle('hidden');
}

function favouriteMessage() {favouriteMessageButton = document.querySelector('.save-message');
    if (!savedMessages.includes(currentMessage)) {
        savedMessages.push(currentMessage);
    }
}

function viewFavouriteMessages() {
    favouriteBox.innerHTML = '';

    for (var i = 0; i < savedMessages.length; i++) {
        favouriteBox.innerHTML += `
            <section class="message-container" id="${savedMessages[i].id}">
                <p>${savedMessages[i].message}</p>
                <button class="delete-message">Delete</button>
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

function deleteFavourite(event) {
    for (var i = 0; i < savedMessages.length; i++) {
        if (savedMessages[i].id === Number(event.target.parentNode.id)) {
            savedMessages.splice(i, 1);
        }
    }

    viewFavouriteMessages();

    if (!savedMessages.length) {
        subTitle.innerText = "All messages deleted";
    }
}
