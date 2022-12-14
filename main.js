var affirmButton = document.querySelector("#affirmation");
var mantraButton = document.querySelector("#mantra");
var submitButton = document.querySelector("#receive-msg");
var medImg = document.querySelector(".meditation-icon");
var displayedMessage = document.querySelector(".displayed-message");

//event listeners
submitButton.addEventListener("click", outputRandom);

//functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function displayMessage() {
    medImg.classList.add("hidden");
    displayedMessage.classList.remove("hidden");
};

function outputRandom() {
    if (mantraButton.checked) {
        displayMessage();
        displayedMessage.innerText = mantras[getRandomIndex(mantras)];
        mantraButton.checked = false;
    } else if (affirmButton.checked) {
        displayMessage();
        displayedMessage.innerText = affirmations[getRandomIndex(affirmations)];
        affirmButton.checked = false;
    } else {
        return;
    };
};