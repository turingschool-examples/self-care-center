var affirmations = ['I forgive myself and set myself free.',
'I believe I can be all that I want to be.',
'I am in the process of becoming the best version of myself.',
'I have the freedom & power to create the life I desire.',
'I choose to be kind to myself and love myself unconditionally.',
'My possibilities are endless.', 'I am worthy of my dreams.',
'I am enough.', 'I deserve to be healthy and feel good.',
'I am full of energy and vitality and my mind is calm and peaceful.',
'Every day I am getting healthier and stronger.',
'I honor my body by trusting the signals that it sends me.',
'I manifest perfect health by making smart choices.'];

var mantras = ['Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
'Don’t let yesterday take up too much of today.',
'Every day is a second chance.', 'Tell the truth and love everyone.',
'I am free from sadness.', 'I am enough.', 'In the beginning it is you, in the middle it is you and in the end it is you.',
'I love myself.', 'I am present now.', 'Inhale the future, exhale the past.',
'This too shall pass.', 'Yesterday is not today.', 'The only constant is change.',
'Onward and upward.', 'I am the sky, the rest is weather.'];

var recieveMessageButton = document.querySelector('.recieve-button');
var radioButtonSelection = document.querySelectorAll('input[name="message-type"]');
var shownMessageBox = document.querySelector('.shown-message-box');
var meditateIcon = document.querySelector('.meditate-icon');
var clearButton = document.querySelector('.clear');
var currentMessage = [];
recieveMessageButton.addEventListener('click', getCurrentMessage);
recieveMessageButton.addEventListener('click', getOutput);
clearButton.addEventListener('click', clearMessage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function hideIcon() {
  meditateIcon.classList.add('hidden');
  }

function showIcon() {
  meditateIcon.classList.remove('hidden');
}

function showClearButton() {
  clearButton.classList.remove('hidden');
}

function hideClearButton() {
  clearButton.classList.add('hidden');
}

function clearRadioSelection() {
  for (var i = 0; i < radioButtonSelection.length; i++) {
    if (radioButtonSelection[i].checked) {
      radioButtonSelection[i].checked = false
    }
  }
}

function clearMessage() {
  clearCurrentMessage();
  showIcon();
  hideClearButton();
  clearRadioSelection();
}

function getSelection() {
  for (var i = 0; i < radioButtonSelection.length; i++) {
    if (radioButtonSelection[i].checked) {
      var selection = radioButtonSelection[i].value
    }
  }
  return selection;
}

function showCurrentMessage() {
  shownMessageBox.innerText = `${currentMessage}`;
}

function getOutput() {
  if (!getSelection()) {
    alert('Error, please select a message type');
  }
  else {
    showCurrentMessage();
  }
}

function getCurrentMessage() {
  hideIcon();
  showClearButton();
  if (getSelection() === 'affirmation') {
    var randomAffirmationsIndex = getRandomIndex(affirmations);
    currentMessage.push(affirmations[randomAffirmationsIndex])
  }
  if (getSelection() === 'mantra') {
    var randomMantrasIndex = getRandomIndex(mantras);
    currentMessage.push(mantras[randomMantrasIndex]);
  }
  return currentMessage;
}

function clearCurrentMessage() {
  currentMessage = []
  showCurrentMessage()
}
