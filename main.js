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



recieveMessageButton.addEventListener('click', function(){
  getError();
});

clearButton.addEventListener('click', clearMessage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function hideIcon() {
  meditateIcon.classList.add('hidden');
  }

function showClearButton() {
  clearButton.classList.remove('hidden');
}

function hideClearButton() {
  clearButton.classList.add('hidden');
}

function showIcon() {
  meditateIcon.classList.remove('hidden');
}

function clearRadioSelection() {
  for (var i = 0; i < radioButtonSelection.length; i++) {
    if (radioButtonSelection[i].checked) {
      radioButtonSelection[i].checked = false
    }
  }
}

function clearMessage() {
  shownMessageBox.innerText = '';
  showIcon();
  hideClearButton();
  clearRadioSelection();
}
// console.log(selection);

function getSelection() {
  for (var i = 0; i < radioButtonSelection.length; i++) {
    if (radioButtonSelection[i].checked) {
      var selection = radioButtonSelection[i].value
    }
  }
  return selection;
}

function getError() {
  if (!getSelection()) {
    alert('Error, please select a message type');
  }
  else {
    doSomething();
  }
}

function doSomething () {
  hideIcon();
  showClearButton();
  if (getSelection() === 'affirmation') {
    var x = getRandomIndex(affirmations);
    console.log(affirmations[x]);
    shownMessageBox.innerText = `${affirmations[x]}`;
  }
  if (getSelection() === 'mantra') {
    var y = getRandomIndex(mantras);
    shownMessageBox.innerText = `${mantras[y]}`;
    console.log(mantras[y]);
  }
}
