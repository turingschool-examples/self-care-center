var affirmationChecked = document.getElementById('affirmation');
var mantraChecked = document.getElementById('mantra');
var recieveMessageButton = document.querySelector('#recieve-message-button');
var meditationImage = document.querySelector('svg');
var meditationContainer = document.querySelector('#meditate-container');

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
