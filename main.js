var radioSelect = document.querySelectorAll('input[name="message-type"]');
var recieveMessageBtn = document.querySelector('.receive-message-btn');
var returnMessage = document.querySelector('h3');

var form = document.querySelector('form');
var affirmationRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');

var meditateImg = document.querySelector('.meditateImg');
var deleteMessageBtn = document.querySelector('.delete-message-btn');

var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be',
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
  'Don\'t let yesterday take up too much of today.',
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
]

var currentDisplayType;

recieveMessageBtn.addEventListener('click', displayMessage);
deleteMessageBtn.addEventListener('click', deleteMessage);


function getRandomIndex(array) {
  var randomIndex =  Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function displayMessage () {
  event.preventDefault();
  if (mantraRadio.checked  || affirmationRadio.checked) {
    meditateImg.classList.add('hidden');
    returnMessage.classList.remove('hidden');
    deleteMessageBtn.classList.remove('hidden');
  } else {
    alert('Please select a message type you would like to receive!');
  }
  if (mantraRadio.checked) {
    returnMessage.innerHTML = getRandomIndex(mantras);
    currentDisplayType = 'mantra';
  } else if (affirmationRadio.checked) {
    returnMessage.innerHTML = getRandomIndex(affirmations);
    currentDisplayType = 'affirmation';
  }

}
function deleteMessage() {
  event.preventDefault();
  if (currentDisplayType === 'affirmation') {
    var messageIndex = affirmations.indexOf(returnMessage.innerText);
    affirmations.splice(messageIndex, 1);

  } else {
    var messageIndex = mantras.indexOf(returnMessage.innerText);
    mantras.splice(messageIndex, 1);
  }
  deleteMessageBtn.classList.add('hidden');
  meditateImg.classList.remove('hidden');
  returnMessage.classList.add('hidden');
  if (affirmations.length === 0 || mantras.length === 0) {
    recieveMessageBtn.classList.add('hidden');
  }
}
