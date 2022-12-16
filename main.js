var logo = document.querySelector(".logo");
var messageDiv = document.querySelector(".messagediv");
var messageButton = document.querySelector("#recieve");
var clearButton = document.querySelector("#clear");
var radioButtons = document.querySelectorAll(".radio");

messageButton.addEventListener("click", preventDefault);
messageButton.addEventListener("click", displaySentiment);
clearButton.addEventListener("click", resetView);

function displaySentiment() {
    if(radioButtons[0].checked) {
        hide(logo);
        randomAff = affirmations[getRandomIndex(affirmations)];
        messageDiv.innerText = randomAff; 
        show(clearButton);
    } else if (radioButtons[1].checked) {
        hide(logo);
        randomMantra = mantras[getRandomIndex(mantras)];
        messageDiv.innerText = randomMantra;
        show(clearButton);
    }
};

function resetView() {
    hide(clearButton);
    messageDiv.innerText = "";
    messageDiv.innerHTML = `<img id ="logo" class="logo" src="assets/meditate.svg" alt="a pictogram of a person meditating"/>`
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function preventDefault(event) {
    event.preventDefault()
};

function hide(element){
    element.classList.add("hidden");
};

function show(element) {
    element.classList.remove("hidden");
};

//event listener: when button is clicked the message should disappear and the logo should reappear