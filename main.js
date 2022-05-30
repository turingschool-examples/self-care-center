//messages
var mantras = [
'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
'Do not let yesterday take up too much of today.',
'Every day is a second chance.',
'Tell the truth and love everyone.',
'I am free from sadness.',
'I am enough.',
'In the beginning it is you, in the middle it is you and in the end it is you.',
'I love myself.',
'I am present now.',
'Inhale the future, exhale the past.',
'This too shall pass.'
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

//query selectors
var receiveMessage = document.querySelector('.receive-message-button');
var meditationGuy = document.querySelector('img');
var message = document.querySelector('.message');
var messageContainer = document.querySelector('.message-container');
var clearMessage = document.querySelector('.clear-message-button');
var clearButtonAppears = document.querySelector('clear-message');
var mantraInput = document.querySelector('.mantraInput');
// var affirmInput = document.querySelector('.affirmInput');

//event listeners
receiveMessage.addEventListener('click', displayMessage);
// clearButton = addEventListener('click', clearMessageFunction);
clearButtonAppears = addEventListener ('click', showClearButton);
mantraInput = addEventListener ('click', enableButtons);
// affirmInput = addEventListener ('click', enableButtons);
receiveMessage.disable = true;

//functions
function displayMessage(event){
  event.preventDefault();
  hideMeditationGuy();
  showMessage();
  enableButtons();
};

function enableButtons(){
  if(document.querySelector('.mantraInput').value === '') {
    receiveMessage.disabled = true;
  } else {
  receiveMessage.disabled = false;
  receiveMessage.classList.remove('disable');
  }
};

function hideMeditationGuy(){
  meditationGuy.classList.add('hidden');
  messageContainer.classList.remove('hidden');
};

function showClearButton(){
  clearButtonAppears.classList.remove('hidden');
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showMessage(){
var radio = document.querySelector("input[type=radio]:checked");
var randomAffirmation = getRandomIndex(affirmations);
var randomMantra = getRandomIndex(mantras);
  if(radio.value === "affirmations"){
    message.innerHTML = `<section class"message-type"> ${affirmations[randomAffirmation]} </section>`;
  } else {
    message.innerHTML = `<section class"message-type"> ${mantras[randomMantra]} </section>`;
  }
  // showClearButton();
};






//query selctor is the same,
//event listener will be similar,
//the function of the event listener will be different
//between affirmation and mantra result
