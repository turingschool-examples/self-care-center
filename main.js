var selectedType;
var messageBox = document.querySelector('.message-pop-up');
var receiveBtn = document.querySelector('#receive-btn');
var meditate = document.querySelector('.meditate');
var affirmRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');
var favoriteBtn = document.querySelector('#favorite-button');

affirmRadio.addEventListener('click', changeSelection);
mantraRadio.addEventListener('click', changeSelection);
receiveBtn.addEventListener('click', changeView);

function changeSelection(event) {
    selectedType = event.target.value;
}

function updateMessage() {
    if (selectedType === "affirmation") {
        messageBox.innerHTML = affirmations[Math.floor(Math.random() * affirmations.length)];
    } else {
        messageBox.innerHTML = mantras[Math.floor(Math.random() * mantras.length)];
    }
}

function hideElement(element) {
    element.classList.add('hidden');
}

function showElement(element) {
    element.classList.remove('hidden');
}

function changeView() {
    if (selectedType) {
    updateMessage();
    showElement(messageBox);
    hideElement(meditate);
    showElement(favoriteBtn);
    }
}