// Query selectors
var affirmationButton = document.querySelector('#affirmation');
var mantraButton = document.querySelector('#mantra');
var messageButton = document.querySelector('.receive-message');
var messageDisplay = document.querySelector('.message-display');
var image = document.querySelector('.image');
var message = document.querySelector('.message');
var affirmation = document.getElementById('affirmation');
var mantra = document.getElementById('mantra');
// Event listeners
messageButton.addEventListener("click", pullRandomMessage);
affirmationButton.addEventListener("click",getAffirmationIndex);
mantraButton.addEventListener("click",getMantraIndex);




// Functions
// Needs to check which radio button is selected when the
// receive message bttn is clicked, then randomly select
// a message from the appropriate array and display it.
function pullRandomMessage() {
  var randomMessage;
  if(affirmation.checked){
    // if (messageButton && affirmationButton) {
    randomMessage = affirmations[getAffirmationIndex(affirmations)];
    displayMessage(randomMessage)
  } else if(mantra.checked){
  // else if (messageButton && mantraButton) {
    randomMessage = mantras[getMantraIndex(mantras)];
    displayMessage(randomMessage)
  }
  document.getElementById('affirmation').checked = false;
  document.getElementById('mantra').checked = false;
};

function getAffirmationIndex(affirmations) {
  document.getElementById('mantra').checked = false;
  return Math.floor(Math.random()*affirmations.length);
}

function getMantraIndex(mantras) {
  document.getElementById('affirmation').checked = false;
  return Math.floor(Math.random()*mantras.length);
}

function displayMessage(selectedMessage) {
  message.innerText = '';
  image.classList.add('hidden');
  message.classList.remove('hidden');
  message.innerText += selectedMessage;
}



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


























//
