var affirmationRadio = document.querySelector('.affirmation-message');
var mantraRadio = document.querySelector('.mantra-message');
var createMessageButton = document.querySelector('.create-message');
var favouriteMessageButton = document.querySelector('.save-message');
var viewFavouriteButton = document.querySelector('.view-favourite');
var viewHomeButton = document.querySelector('.home');
var deleteFavouriteButton = document.querySelector('.delete-message');
var mantraSelectBox = document.querySelector('.mantra-select');
var messageContainer = document.querySelector('.receive-messages');
var subTitle = document.querySelector('.sub-title');
var favouriteSection = document.querySelector('.favourite-section');
var messageHtmlParagraph = document.querySelector('.message');
var imgBuddha = document.querySelector('.img-buddha');

var createMessageBox = document.querySelector('.display-message');

var savedMessages = [];
var currentMessage;

// VARIABLES TO GENERATE HTML

var newHtmlParagraph = document.createElement('p');
var newHtmlButton = document.createElement('button');
var newHtmlSection = document.createElement('section');
var newHtmlImg = document.createElement('img');
var newHtmlDiv = document.createElement('div');

// EVENT LISTENERS

createMessageButton.addEventListener('click', selectMessage);
favouriteMessageButton.addEventListener('click', function() {
    favouriteMessageButton = document.querySelector('.save-message');
    favouriteMessage();
    if (savedMessages.length) {
        viewFavouriteButton.classList.remove('hidden');
    }
});
viewFavouriteButton.addEventListener('click', function() {
    toggleHiddenButton(mantraSelectBox);
    toggleHiddenButton(viewHomeButton);
    toggleHiddenButton(viewFavouriteButton);
    toggleHiddenButton(messageContainer);
    toggleHiddenButton(favouriteSection);
    viewFavouriteMessages();
    swapSubTitle();
});
viewHomeButton.addEventListener('click', function() {
    toggleHiddenButton(mantraSelectBox);
    toggleHiddenButton(viewHomeButton);
    toggleHiddenButton(viewFavouriteButton);
    toggleHiddenButton(messageContainer);
    toggleHiddenButton(favouriteSection);
    toggleHiddenButton(imgBuddha);
    toggleHiddenButton(messageHtmlParagraph);
    toggleHiddenButton(favouriteMessageButton);
    viewHome();
    swapSubTitle();
});
deleteFavouriteButton.addEventListener('click', function() { 
    // deleteFavouriteButton = document.querySelector('.delete-message');
    deleteFavourite();
});

// FUNCTIONS

function selectMessage() {
    createMessageBox = document.querySelector('.display-message');
    // favouriteMessageButton = document.querySelector('.save-message');
    // favouriteMessageButton = document.querySelector('.save-message');
    // console.log(createMessageBox.innerHTML === `<img class="img-buddha" src="./assets/meditate.svg" alt="enlightened buddha">`)
    console.log(!imgBuddha.classList.contains('hidden'))
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

        
        
        // if (imgBuddha.classList.contains('img-buddha')) {
        //     imgBuddha.remove();
        // }
        // createMessageBox.appendChild(newHtmlParagraph)
        // newHtmlParagraph.innerText = createMessage(mantras);


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

function favouriteMessage() {favouriteMessageButton = document.querySelector('.save-message');
    if (!savedMessages.includes(currentMessage)) {
        savedMessages.push(currentMessage);
    }
}

function viewFavouriteMessages() {
    favouriteSection.innerHTML = '';
    for (var i = 0; i < savedMessages.length; i++) {
        // console.log(savedMessages[i]);
        
        // newHtmlSection.classList = ``;
        // newHtmlButton.classList = ``;

        // newHtmlSection.classList = `message-container ${[i]}`;
        // newHtmlButton.classList = `delete-message ${[i]}`;

        // messageContainer.appendChild(newHtmlSection);
        // newHtmlSection.appendChild(newHtmlParagraph);
        // newHtmlParagraph.innerText = savedMessages[i];
        // newHtmlSection.appendChild = newHtmlButton;
        // newHtmlButton.innerText = 'Delete';
        
        favouriteSection.innerHTML += `
            <section class="message-container">
                <p>${savedMessages[i]}</p>
                <button class="delete-message ${[i]}">Delete</button>
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
    
    // messageContainer.innerHTML = `
    // <section class="message-container">
    //     <div class="display-message"><img class="img-buddha" src="./assets/meditate.svg" alt="enlightened buddha"></div>
    //     <button class="hidden save-message">Favourite</button>
    // </section>`;
    // messageContainer.innerHTML = '';

    
    // var removeBox = document.querySelectorAll('.message-container');
    // console.log(removeBox)
    // for (var i = 0; i < removeBox.length; i++) {

    //     messageContainer.removeChild(removeBox[i])
    // }
    // console.log(removeBox)

    // messageContainer.appendChild(newHtmlSection);
    // newHtmlSection.classList = `message-container`;
    // newHtmlSection.appendChild(newHtmlDiv);
    // newHtmlDiv.classList = `display-message`;
    // newHtmlDiv.appendChild(newHtmlImg);
    // newHtmlImg.classList = `img-buddha`; 
    // newHtmlImg.alt = `enlightened buddha`;
    // newHtmlImg.src = `./assets/meditate.svg`;
    // newHtmlSection.appendChild = newHtmlButton;
    // newHtmlButton.classList = `hidden save-message`;
    // newHtmlButton.innerText = 'Favourite';
}

function deleteFavourite() {
    // deleteFavouriteButton = document.querySelector('.delete-message');
    console.log('test')
    // for (var i = 0; i < savedMessages.length; i++) {
    //     if (event)
    // }
    console.dir(deleteFavouriteButton.target)
    // event.target.parentNode;
}
