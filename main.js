//ARRAYS 👇
var affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."];

var mantras = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."];

//QUERY SELECTORS 👇
var affirmationBTN = document.querySelector("#affirmation");
var clearMessageBTN = document.querySelector("#clear-btn");
var mantraBTN = document.querySelector("#mantra");
var messageBox = document.querySelector("#message-box");
var revieveMessageBTN = document.querySelector("#receieve-message");
var zenFigure = document.querySelector(".zen-figure");

//EVENT LISTENERS 👇
clearMessageBTN.addEventListener('click', removeDisplayedMessage);
revieveMessageBTN.addEventListener('click', displaySelectedMessage);


//FUNCTIONS 👇
function checkButtonSelected() {
     if (affirmationBTN.checked) {
          return affirmations[getRandomIndex(affirmations)];
     } else if (mantraBTN.checked) {
          return mantras[getRandomIndex(mantras)];
     } else showAlert()
          return displaySelectedMessage()
}; 

function displaySelectedMessage(event) {
     event.preventDefault()
     var message = checkButtonSelected()
     messageBox.innerText = message;
     clearMessageBTN.classList.remove('hidden') 
};

function getRandomIndex(array) {
     return Math.floor(Math.random() * array.length)
};

function removeDisplayedMessage(event) {
     zenFigure.classList.remove('hidden');
     clearMessageBTN.classList.add('hidden');
     location.reload()
};

function showAlert() {
     alert('Please select a message type!');
};

