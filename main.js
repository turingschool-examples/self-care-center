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

var currentMessage;
var localMessage;

if (Object.keys(localStorage).length) {
    viewFavouriteButton.classList.remove('hidden');
}

// EVENT LISTENERS

createMessageButton.addEventListener('click', selectMessage);

favouriteMessageButton.addEventListener('click', function() {
    favouriteMessage();
    if (Object.keys(localStorage).length) {
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
    toggleHiddenButton(messageContainer);
    toggleHiddenButton(favouriteBox);
    toggleHiddenButton(displayMessage); 
    swapSubTitle();

    if (Object.keys(localStorage).length && viewHomeButton.classList.contains('hidden')) {
        viewFavouriteButton.classList.remove('hidden');
    } else if (!Object.keys(localStorage).length) {
        viewFavouriteButton.classList.add('hidden');
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
function favouriteMessage() {
    var valueCheck = [];
    
    if (!Object.keys(localStorage).length) {
        valueCheck.push(currentMessage.message);        
        localStorage.setItem(currentMessage.id, currentMessage.message);
    } else {
        for (var i = 0; i < Object.keys(localStorage).length; i++) {
            var item = localStorage.getItem(localStorage.key(i));
            valueCheck.push(item);
        }
        if (!valueCheck.includes(currentMessage.message)) {
            localStorage.setItem(currentMessage.id, currentMessage.message);
        }
    }
}

function viewFavouriteMessages() {
    favouriteBox.innerHTML = '';

    for (var i = 0; i < Object.keys(localStorage).length; i++) {
        favouriteBox.innerHTML += `
            <section class="message-container" id="${localStorage.key(i)}">
                <p>${localStorage.getItem(localStorage.key(i))}</p>
                <button class="delete-message">Delete</button>
            </section>`;
    }
}

function swapSubTitle() {
    if (messageContainer.classList.contains('hidden')) {
        subTitle.innerText = 'Saved messages';
    } else {
        subTitle.innerText = 'Which type of message?'
    }
}

function deleteFavourite(event) {
    for (var i = 0; i < Object.keys(localStorage).length; i++) {
        if (localStorage.key(i) === event.target.parentNode.id) {
            localStorage.removeItem(localStorage.key(i));
        }
    }

    viewFavouriteMessages();

    if (!Object.keys(localStorage).length) {
        subTitle.innerText = "All messages deleted";
    }
}