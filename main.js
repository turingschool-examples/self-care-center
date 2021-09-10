// Query Selectors
var receiveMessage = document.querySelector('#js-receive');
var messageBox = document.querySelector('#js-message-box');
var personIcon = document.querySelector('#js-person-icon');
var message = document.querySelector('#js-message');
var clearButton;
var affirmationButton = document.querySelector('#affirmation');
var mantraButton = document.querySelector('#mantra');

// Event Listeners
affirmationButton.addEventListener('click', enableReceive);
mantraButton.addEventListener('click', enableReceive);

// Global Variables
var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.',
];
var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
];

// Functions & Event Handlers
function getRandomMessage(messageType) {
  var index = Math.floor(Math.random() * messageType.length);
  return messageType[index];
}

function enableReceive() {
  receiveMessage.addEventListener('click', displayMessage);
}

function displayMessage() {
  if (affirmationButton.checked) {
    var randomMessage = getRandomMessage(affirmations);
  } else if (mantraButton.checked){
    var randomMessage = getRandomMessage(mantras);
  }
  personIcon.classList.add('hidden');
  displayClear();
  message.innerText = randomMessage;
}

function displayClear() {
  clearButton = document.querySelector('#js-clear');
  clearButton.addEventListener('click', resetPage);
  clearButton.classList.remove('hidden');
}

function resetPage() {
  receiveMessage.removeEventListener('click', displayMessage);
  personIcon.classList.remove('hidden');
  clearButton.classList.add('hidden');
  message.innerText = '';
  affirmationButton.checked = false;
  mantraButton.checked = false;
}
