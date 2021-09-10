var affirmationButton = document.querySelector('.radio-aff')
var mantraButton = document.querySelector('.radio-man')
var receiveButton = document.querySelector('button')
var contentBox = document.querySelector('.content')

affirmationButton.addEventListener('click', selectAffirmationContent)
mantraButton.addEventListener('click', selectMantraContent)
receiveButton.addEventListener('click', displayContent)
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
  'I am the sky, the rest is weather.',
  'Perfection is a path, not a place.'
]
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
  'I manifest perfect health by making smart choices.',
  'Everything I need comes to me in the perfect time.',
  'I use my words and thoughts as tools to shape my future.',
]
var errors = [
  'Please select whether you would like to receive an affirmation or a mantra.'
]
var contentType = errors;

var mantrasSeen = []
var affirmationsSeen = []

function selectAffirmationContent() {
  contentType = affirmations;
}

function selectMantraContent() {
  contentType = mantras;
}

function displayContent() {
  var index = getRandomIndex(contentType);
  var content = contentType[index];

  if (contentType === errors) {
    contentBox.classList.add('red-text')
  } else {
    contentBox.classList.remove('red-text')
  }

  contentBox.innerHTML = `${content}`;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

// After displaying each message,
// Remove that message from its array, and
// push it into the appropriate ...Seen array

// If the content array is empty,
// display notification that they will now start seeing repeated messages, and
// add move ...Seen messages back to appropriate content array
