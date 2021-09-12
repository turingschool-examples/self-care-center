// var affirmations = [
// "I forgive myself and set myself free.",
// "I believe I can be all that I want to be.",
// "I am in the process of becoming the best version of myself",
// "I have the freedom & power to create the life I desire.",
// "I choose to be kind to myself and love myself unconditionally.",
// "My possibilities are endless.",
// "I am worthy of my dreams.",
// "I am enough.",
// "I deserve to be healthy and feel good.",
// "I am full of energy and vitality and my mind is calm and peaceful.",
// "Every day I am getting healthier and stronger.",
// "I honor my body by trusting the signals that it sends me.",
// "I manifest perfect health by making smart choices."
// ];
//
// var mantras = [
// "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
// "Don’t let yesterday take up too much of today.",
// "Every day is a second chance.",
// "Tell the truth and love everyone.",
// "I am free from sadness.",
// "I am enough.",
// "In the beginning it is you, in the middle it is you and in the end it is you.",
// "I love myself.",
// "I am present now.",
// "Inhale the future, exhale the past.",
// "This too shall pass.",
// "Yesterday is not today.",
// "The only constant is change.",
// "Onward and upward.",
// "I am the sky, the rest is weather."
// ];
//
// //Query Selectors
//
// var receiveButton = document.querySelector('.receive-message');
// var messageOutput = document.querySelector('.message-box');
// var affirmationButton = document.querySelector('#affirmation');
// var mantraButton = document.querySelector('#mantra');
// var image = document.querySelector('.meditating-img');
// var messageText = document.querySelector('.message-text');
// var clearMessageButton =document.querySelector('.clear-message');
//
// //Event Listeners
//
// receiveButton.addEventListener('click', getRandomMessage);
// clearMessageButton.addEventListener('click', clearRandomMessage);
//
// //functions
//
//
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
//
// function changeText(type) {
//   messageText.innerText = type[getRandomIndex(type)];
// }
//
// function toggle(display, hide) {
//   display.classList.remove('hidden');
//   hide.classList.add('hidden');
//   }
//
// function getRandomMessage() {
//   clearMessageButton.classList.remove('hidden');
//   if(affirmationButton.checked) {
//     changeText(affirmations);
//     toggle(messageText, image);
//   } else if (mantraButton.checked) {
//     changeText(mantras);
//     toggle(messageText, image);
//   } else {
//     clearMessageButton.classList.add('hidden');
//     return `<p> Please select a message! </p>`;
//   }
// }
//
// function clearRandomMessage() {
//   toggle(image, messageText);
//   clearMessageButton.classList.add('hidden');
// }


var receiveButton = document.querySelector('.receive-message');
var messageOutput = document.querySelector('.message-box');
var affirmationButton = document.querySelector('#affirmation');
var mantraButton = document.querySelector('#mantra');
var image = document.querySelector('.meditating-img');
var messageText = document.querySelector('.message-text');
var clearMessageButton =document.querySelector('.clear-message');
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


receiveButton.addEventListener('click', getrandomMessage);
clearMessageButton.addEventListener('click', clearMessage);


function displayHide(display, hide) {
  display.classList.remove('hidden');
  hide.classList.add('hidden');
}

function getRandomIndex(array) {
  Math.floor(Math.random() * array.length);
  }

function changeMessageText(type) {
  messageText.innerText = type[getRandomIndex(type)];
}

function getrandomMessage() {
  clearMessageButton.classList.remove('hidden');
  if (affirmationButton.checked) {
    changeMessageText(affirmations);
    displayHide(messageText, image);
  } else if (mantraButton.checked) {
    changeMessageText(mantras);
    displayHide(messageText, image);
  } else {
    clearMessageButton.classList.add('hidden');
    alert('Please select a message!')
  }
};

function clearMessage() {
  displayHide(meditationImage, messageText);
  clearMessageButton.classList.add('hidden');
};
