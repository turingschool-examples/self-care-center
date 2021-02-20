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
  'I manifest perfect health by making smart choices.'
];
var receiveMessageButton = document.querySelector('.lower-btn');
var affirmButton = document.querySelector('#affirm');
var mantraButton = document.querySelector('#mantra');
var messagePlaceholder = document.querySelector('#placeholder');
var buddha = document.querySelector('img');
var choiceButtons = document.querySelectorAll('input[name="choice"]');
var favoriteMessageButton = document.querySelector('.favorite-button');
var favoriteMessageForm = document.querySelector('.favorite-message');
var mainPage = document.querySelector('.main-page');
var backToMainButton = document.querySelector('.back-to-main');
var savedMessages = [];

receiveMessageButton.addEventListener('click', showMessage);
favoriteMessageButton.addEventListener('click', showForm);
backToMainButton.addEventListener('click', showForm);

function showMessage () {
  var randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  var randomMantra = mantras[Math.floor(Math.random() * mantras.length)];
  for(var i = 0; i < choiceButtons.length; i++) {
    if(choiceButtons[0].checked) {
      messagePlaceholder.innerText = randomAffirmation;
      showButton();
  } else if(choiceButtons[1].checked) {
      messagePlaceholder.innerText = randomMantra;
      showButton();
  }
}
}

function showButton() {
  favoriteMessageButton.classList.remove('hidden');
}

function showForm() {
    mainPage.classList.toggle('hidden');
    favoriteMessageForm.classList.toggle('hidden');
}
