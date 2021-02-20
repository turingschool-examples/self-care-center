var radioSelect = document.querySelectorAll('input[name="message-type"]');
var recieveMessageBtn = document.querySelector('.receive-message-btn');
var returnMessage = document.querySelector('h3');

var meditateImg = document.querySelector('.meditateImg');
var affirmationRadio = document.getElementById('#affirmation');
var mantraRadio = document.getElementById('#mantra');

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

var randomAffirmation = getRandomIndex(affirmations);
var randomMantra = getRandomIndex(mantras);

recieveMessageBtn.addEventListener('click', displayMessage);

function getRandomIndex(array) {
  var randomIndex =  Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function displayMessage () {
  if (mantraRadio.checked  || affirmationRadio.checked) {
    meditateImg.classList.add('hidden');
    returnMessage.classList.remove('hidden');
  }
  if (mantraRadio.checked) {
    returnMessage.innerHTML = randomMantra;
  } else if (affirmationRadio.checked) {
    returnMessage.innerHTML = randomAffirmation;
  }
}
