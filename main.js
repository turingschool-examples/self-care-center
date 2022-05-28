// query selectors below:

var clearButton = document.querySelector('.clear-button');
var messageButton = document.querySelector('.receive-message');
var meditateImage = document.querySelector('.meditation');
var messageText = document.querySelector('.uplifting-message');

// data below:

var affirmations = ['I forgive myself and set myself free.', 'I believe I can be all that I want to be.', 'I am in the process of becoming the best version of myself.', 'I have freedom & power to create the life I desire.', 'I choose to be kind to myself and love myself unconditionally.', 'My possibilites are endless.', 'I am worthy of my dreams.', 'I am enough.', 'I deserve to be healthy and feel good.', 'I am full of energy and vitality and my mind is calm and peaceful.', 'Every day I am getting healthier and stronger.', 'I am practicing mindfulness', 'I will detach myself from the outcome.'];

var mantras = ['Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.', 'Don\'t let yesterday take up too much of today.', 'Every day is a second chance.', 'Tell the truth and love everyone.', 'I am enough.', 'In the beginning it is you, in the middle it is you and in the end it is you.', 'Just do it.', 'I am present now.', 'Inhale the future, exhale the past.', 'This too shall pass.', 'Yesterday is not today.', 'The only constant is change.', 'Keep picking them up and putting them down.', 'I will not allow my emotions to control me.', 'I am not afraid to be wrong.'];

// messageButton.disabled = true;

// event listeners:

messageButton.addEventListener('click', selectMessage);
clearButton.addEventListener('click', clearMessage);

// event handlers and functions:
// try a conditional using if/else
// REFACTOR - separate the DOM from data model

function selectMessage() {
  var selectedMessages = document.querySelector("input[name='message-type']:checked").value;
  var myMessages = "";

  switch (selectedMessages) {
    case "affirmation":
      myMessages = generateAffirmation();
      break;
    case "mantra":
      myMessages = generateMantra();
      break;
    default:
      return;
      break;
  }

  // inline approach
  // apply classList.add/remove "hidden" instead
  meditateImage.style.visibility = "hidden";
  clearButton.style.visibility = "visible";
  messageText.style.visibility = "visible";
  messageText.innerText = myMessages;
};

function generateAffirmation() {
  var index = getRandomIndex(affirmations);
  return affirmations[index];
};

function generateMantra() {
  var index = getRandomIndex(mantras);
  return mantras[index];
};

// inline approach
// apply classList.add/remove "hidden" instead

function clearMessage() {
  meditateImage.style.visibility = "visible";
  clearButton.style.visibility = "hidden";
  messageText.style.visibility = "hidden";
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};