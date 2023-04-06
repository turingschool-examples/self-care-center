var msgBtn = document.querySelector('.show-message-button');
var message = document.querySelector('.message-view');
var icon = document.querySelector('.icon-view');
var affirmation = document.getElementById('affirmation-radio');
var mantra = document.getElementById('mantra-radio');

msgBtn.addEventListener('click', displayMsg);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var displayedMantras = [];
var displayedAffirmations = [];

function organizeAffirmations(i) {
  displayedAffirmations.push(affirmations[i]);
  affirmations.splice(i, 1);
}

function organizeMantras(i) {
  displayedMantras.push(mantras[i]);
  mantras.splice(i, 1);
}

function displayMsg() {
  if (chooseMsg()) {
    message.classList.remove('hidden');
    icon.classList.add('hidden');
  } else {
    icon.classList.remove('hidden');
    message.classList.add('hidden');
  }
}

function chooseMsg() {
  if (affirmation.checked) {
    if (affirmations.length) {
      var idx = getRandomIndex(affirmations);
      message.innerText = affirmations[idx];
      organizeAffirmations(idx);
      return true;
    } else {
      alert(`You have seen all the mantras we currently have to offer. You will now start begin seeing repeated mantras.`);
      affirmations = displayedAffirmations;
      displayedAffirmations = [];
    }
  } else if (mantra.checked) {
    if (mantras.length) {
      var idx = getRandomIndex(mantras);
      message.innerText = mantras[idx];
      organizeMantras(idx);
      return true;
    } else {
      alert(`You have seen all the affirmations we currently have to offer. You will now start begin seeing repeated affirmations.`);
      mantras = displayedMantras;
      displayedMantras = [];
    }
  }
}