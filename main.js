// buttons
var buttonAffirmation = document.getElementById('choice1');
var buttonMantra = document.getElementById('choice2');
var buttonSubmit = document.querySelector('.submit');
var buttonClear = document.getElementById('clear');
var buttonFavorite = document.getElementById('favorite');

// message return screen
var messageDisplay = document.querySelector('.message-display');
var meditationImage = document.querySelector('svg');

// global variables
var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom and power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trsuting the signals that it sends me.',
  'I manifest perfect health by making smart choices.',
]
var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Do not let yesterday take up too much of today.',
  'Evey day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you, and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday in not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.',
]

// eventListeners

buttonSubmit.addEventListener('click', returnRandomMessage);

// functions and handlers

function returnRandomMessage() {
  event.preventDefault();
  meditationImage.classList.add("hidden");
  if (buttonAffirmation.checked) {
    messageDisplay.innerText = affirmations[getRandomIndex(affirmations)];
    displayAddionalButtons();
  } else if (buttonMantra.checked) {
    messageDisplay.innerText = mantras[getRandomIndex(mantras)];
    displayAddionalButtons();
  } else {
    messageDisplay.innerText = 'Please select your message type preference above ⬆.'
  }
}

function getRandomIndex(messages) {
  return Math.floor(Math.random() * messages.length);
};

function displayAddionalButtons () {
  buttonClear.style.display="inline-block";
  buttonFavorite.style.display="inline-block";
}
