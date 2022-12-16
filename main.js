var logo = document.querySelector(".logo");
var messageDiv = document.querySelector(".messagediv");
var messageButton = document.querySelector(".button");
var radioButtons = document.querySelectorAll(".radio");
var form = document.querySelector("form");

messageButton.addEventListener("click", preventDefault);
messageButton.addEventListener("click", displaySentiment);

function displaySentiment() {
    if(radioButtons[0].checked) {
      hide(logo);
      randomAff = affirmations[getRandomIndex(affirmations)];
      messageDiv.innerText = randomAff; 
    } else if (radioButtons[1].checked) {
      hide(logo);
      randomMantra = mantras[getRandomIndex(mantras)];
      messageDiv.innerText = randomMantra; 
    }
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function preventDefault(event) {
    event.preventDefault()
};

function show(element){
    element.classList.remove("hidden");
};

function hide(element){
    element.classList.add("hidden");
};
