var affirmationChecked = document.getElementById('affirmation');
var mantraChecked = document.getElementById('mantra');
var recieveMessageButton = document.querySelector('#recieve-message-button');
var meditationImage = document.querySelector('svg');
var meditationContainer = document.querySelector('#meditate-container');

var affirmations = [
'I forgive myself and set myself free.',
'I forgive myself and set myself free.',
'I believe I can be all that I want to be.'
];

var mantras = [
'Breathing in. Breathing out.',
'Don’t let yesterday take up too much of today.',
'Every day is a second chance.'
];

recieveMessageButton.addEventListener('click',giveMessage);


function giveMessage() {
  if (mantra.checked) {
    var message = mantras[getRandomIndex(mantras)];
    meditationImage.classList.add('hidden');
    meditationContainer.innerHTML = `
    <p>${message}</p>`
  }
  if (affirmation.checked) {
    var message = affirmations[getRandomIndex(affirmations)];
    meditationImage.classList.add('hidden');
    meditationContainer.innerHTML = `
    <p>${message}</p>`
  }
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
