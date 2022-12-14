var affirmButton = document.querySelector("#affirmation");
var mantraButton = document.querySelector("#mantra");
var submitButton = document.querySelector("#receiv-msg");
var displayedMessage = document.querySelector(".displayed-message");

//event listeners
affirmButton.addEventListener("click", clearMantra);
mantraButton.addEventListener("click", clearAffirm);

//functions
function getRandomIndex(array) {
    return Math.floor(Math.random(), array);
};

function clearMantra() {
    mantraButton.checked = false;
};

function clearAffirm() {
    affirmButton.checked = false;
};