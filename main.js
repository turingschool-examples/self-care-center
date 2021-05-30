//Global Variables

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
]
var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
]

// Query Selectors

var affirmationBtn = document.getElementById('affirmation-input');
var mantraBtn = document.getElementById('mantra-input');
var receiveMessageBtn = document.getElementById('receiveBtn');
var bellIconBox = document.getElementById('bell-box');
var messageDisplayBox = document.querySelector('.message-box');
var nameInput = document.getElementById('login-text');
var loginBtn = document.getElementById('submit-btn');
var welcomeMsg = document.getElementById('welcome-msg');
var loginPage = document.querySelector('.login');
var mainPage = document.querySelector('.main-Page');



// Event Listeners

receiveMessageBtn.addEventListener('click', showMessage);
loginBtn.addEventListener('click', displayMain);

// Event Handlers
function showMessage() {
  bellIconBox.classList.add('hidden');
  messageDisplayBox.classList.remove('hidden');
  selectMessage();
}

function selectMessage() {
  if (affirmationBtn.checked) {
    messageDisplayBox.innerText = "";
    return messageDisplayBox.innerText += `${affirmations[getRandomIndex(affirmations)]}`
  }
  if (mantraBtn.checked) {
    messageDisplayBox.innerText = "";
    return messageDisplayBox.innerText += `${mantras[getRandomIndex(mantras)]}`
  }
  else {
    messageDisplayBox.innerText = "";
    return messageDisplayBox.innerText += "Please choose a mantra or affirmation";
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayMain() {
  loginPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
  showGreeting();
}

function showGreeting() {
  welcomeMsg.innerText = `Namaste, ${nameInput.value} ☮`
}
