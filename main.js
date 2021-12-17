var affirmations = ['I forgive myself and set myself free.',
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
'I manifest perfect health by making smart choices.']

var mantras = ['Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
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
'Onward and upward.',
'I am the sky, the rest is weather.']

// query selectors

var receiveButton = document.querySelector('.receive-message');
var messageBox = document.querySelector('#message-box');
var newMessage = document.querySelector('p');
var meditateIcon = document.querySelector('svg');
var affirmationButton = document.querySelector('#affirmation-button');
var mantraButton = document.querySelector('#mantra-button');
var submitName = document.querySelector('.submit-name');
var mainPage = document.querySelector('.message-page');
var loginPage = document.querySelector('.login-page');
var greetingPage = document.querySelector('.greeting-page');
var greetingBox = document.querySelector('.greeting-box');
var nameInput = document.querySelector('#name-input');

// event listeners

receiveButton.addEventListener('click', generateMessage);
affirmationButton.addEventListener('click', checkAffirmation);
mantraButton.addEventListener('click', checkMantra);
submitName.addEventListener('click', showMainPage);

// Login page

function hideLogin() {
  loginPage.classList.toggle("hidden");
}

function showMainPage() {
  greetingBox.innerHTML += `
  <h2 class="greeting">Good day, ${nameInput.value}.</h2>`
  mainPage.classList.toggle("hidden");
  hideLogin();
}

// Message page

// function personalizedGreeting() {
//   ****
// }

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateMessage() {
  meditateIcon.style.display = "none";
  if (mantraButton.checked) {
    newMessage.innerText = mantras[getRandomIndex(mantras)];
  } else if (affirmationButton.checked){
    newMessage.innerText = affirmations[getRandomIndex(affirmations)];
  }
}

function checkAffirmation() {
  mantraButton.checked = false;
  affirmationButton.checked = true;
}

function checkMantra() {
  affirmationButton.checked = false;
  mantraButton.checked = true;
}





// function generateMessage() {
//   messageBox.innerHTML = ``;
//   for (var i = 0; i < mantras.length; i++) {
//     messageBox.innerHTML += `
//     <p>${mantras[i].toString()}</p>`
//   }
// }
