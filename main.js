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
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
];

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don\'t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you, and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward',
  'I am the sky, the rest is weather.'
];

var messages = [affirmations, mantras];

//⬇️ query selector variables ⬇️
//radio buttons
var affirmRadioButton = document.getElementById('affirmation');
var mantraRadioButton = document.getElementById('mantra');

//receive message button
var receiveButton = document.querySelector('.button');

//meditation img
var img = document.querySelector('img');

//random message
var randomMessage = document.querySelector('.random-message');

//loading animation
var animation = document.querySelector('.loader');

//background
var background = document.querySelector('body');

//⬇️ event listeners⬇️
receiveButton.addEventListener('click', function(){
  if(affirmRadioButton.checked || mantraRadioButton.checked){
    runAnimation();
    setTimeout(showMessage, 2000);
  }
});

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function display(array, index){
  randomMessage.innerText = array[index];
  randomMessage.classList.remove('hidden');
}

function showMessage(){
  animation.classList.add('hidden');

  var randomAffirmIndex = getRandomIndex(affirmations);
  var randomMantraIndex = getRandomIndex(mantras);

  if(affirmRadioButton.checked){
    background.classList.remove('mantra-gradient');
    background.classList.add('affirm-gradient');
    display(affirmations, randomAffirmIndex);
  }
  if(mantraRadioButton.checked){
    background.classList.remove('affirm-gradient');
    background.classList.add('mantra-gradient');
    display(mantras, randomMantraIndex);
  }
}

function runAnimation(){
  img.classList.add('hidden');
  randomMessage.classList.add('hidden');
  animation.classList.remove('hidden');
}











//
