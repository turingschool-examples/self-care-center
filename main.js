// pull information from html that will let me access the receive message button
// display random message in message container
// make buddha icon disappear (message container)
// create global variables for document.querySelector()
// addEventListeners to correct items
// create functions
// items with classes: message-options, radio-controls, receive-message, message-container, display message
// items that may need an eventlISTENER receive button, clear button, icon(?), 

var randomAffirmation = document.getElementById('affirmation');
var randomMantra = document.getElementById('mantra');

// var messageOptions = document.querySelector('.message-options');
var receiveMessageButton = document.querySelector('receive-message');
var messageContainer = document.querySelector('message-container');
var clearButton = document.querySelector('.clear-message');
// var radioControls = document.querySelector('.radio-controls');
// var displayMessage = document.querySelector('.display-message');



receiveMessageButton.addEventListener('click', displayMessage);
clearButton.addEventListener('click', clearMessage);


var affirmations = ['I forgive myself and set myself free.', 'I believe I can be all that I want to be.', 'I am in the process of becoming the best version of myself.', 'I have the freedom & power to create the life I desire.', 'I choose to be kind to myself and love myself unconditionally.', 'My possibilities are endless.', 'I am worthy of my dreams.', 'I am enough.', 'I deserve to be healthy and feel good.', 'I am full of energy and vitality and my mind is calm and peaceful.', 'Every day I am getting healthier and stronger.', 'I honor my body by trusting the signals that it sends me.', 'I manifest perfect health by making smart choices.']

var mantras = ['Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.', 'Don/t let yesterday take up too much of today.', 'Every day is a second chance.', 'Tell the truth and love everyone.', 'I am free from sadness.', 'I am enough.', 'In the beginning it is you, in the middle it is you and in the end it is you.', 'I love myself.', 'I am present now.', 'Inhale the future, exhale the past.', 'This too shall pass.', 'Yesterday is not today.', 'The only constant is change.', 'Onward and upward.', 'I am the sky, the rest is weather.']

// Functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * messages.length);
}

function displayMessage() {
  var selectedMessageType = randomAffirmation.checked
  var messages = selectedMessageType === ' affirmations'
  var randomMessage = messages[randomIndex];
  var randomIndex =
  messageContainer.innerHTML = randomMessage;
}


// I need randomly generated messages (getRandomIndex) to be passed through to the messageContainer when the receiveMessage button is clicked


// function showDomElement(eventTarget) {
//   eventTarget.classList.remove('hidden')
// }

// function hideDomElement(eventTarget) {
//   eventTarget.classList.add('hidden')
// }