// query selector variables go here👇
var radioAffirmation = document.querySelector('.radio-affirmation');
var radioMantra = document.querySelector('.radio-mantra');
var receiveMessageButton = document.querySelector('.receive-message');
var meditateGuy = document.querySelector('.meditation-guy');
var message = document.querySelector('.pop-up-message');


//CYOA new:
var addMessageButton = document.querySelector('.add-message');
var submitButton = document.querySelector('.submit-button');
var customMessage = document.querySelector('#add-custom-message-input');
var viewCustomMessage = document.querySelector('.view-custom-message');

//form
var form = document.querySelector(".form");
var p = document.querySelector('p');

// event listeners go here👇
receiveMessageButton.addEventListener('click', function(){
  radioSelectionChoice()
  displayMessage()
});
addMessageButton.addEventListener('click', showForm);
submitButton.addEventListener('click', displayCustomMessage);


//data👇
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
  "I manifest perfect health by making smart choices."
];

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
  "I am the sky, the rest is weather."
];

// functions and event handlers go here👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function radioSelectionChoice() {
  event.preventDefault();
  if (radioAffirmation.checked) {
    message.innerText = affirmations[getRandomIndex(affirmations)];
  } else if (radioMantra.checked) {
    message.innerText = mantras[getRandomIndex(mantras)];
  } else {
    alert('Please select a message type')
    customMessage.value = "";
    meditateGuy.classList.remove("hidden");
  }
};

function displayMessage() {
  meditateGuy.classList.add("hidden");
  message.classList.remove("hidden");
  viewCustomMessage.classList.add("hidden");
  form.classList.add("hidden");
};

function showForm() {
  meditateGuy.classList.add("hidden");
  form.classList.remove("hidden");
  p.classList.add("hidden");
  message.classList.add('hidden');
};

function displayCustomMessage() {
  event.preventDefault();
  radioSelectionChoice();
  viewCustomMessage.classList.remove('hidden');
  form.classList.add('hidden');
  viewCustomMessage.innerText = customMessage.value;
};
