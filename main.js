var msgBtn = document.querySelector('.show-message-button');
var message = document.querySelector('.message-view');
var icon = document.querySelector('.icon-view');
var affirmation = document.getElementById('affirmation-radio');
var mantra = document.getElementById('mantra-radio');

msgBtn.addEventListener('click', displayMsg);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getAllIndexs() {
  return {
    affirmations: getRandomIndex(affirmations),
    mantras: getRandomIndex(mantras)
  }
}

var displayedMsgs = {
  mantras: [],
  affirmations: []
}

function organizeMsgs(type, array, i) {
  displayedMsgs[type].push(array[i]);
  array.splice(i, 1);
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
  var idx = getAllIndexs();
  if (affirmation.checked) {
    if (affirmations.length) {
      message.innerText = affirmations[idx.affirmations];
      organizeMsgs('affirmations', affirmations, idx.affirmations)
      return true;
    } else {
      alert(`You have seen all the mantras we currently have to offer. You will now start begin seeing repeated mantras.`);
      affirmations = displayedMsgs.affirmations;
      displayedMsgs.affirmations = [];
    }
  } else if (mantra.checked) {
    if (mantras.length) {
      message.innerText = mantras[idx.mantras];
      organizeMsgs('mantras', mantras, idx.mantras)
      return true;
    } else {
      alert(`You have seen all the affirmations we currently have to offer. You will now start begin seeing repeated affirmations.`);
      mantras = displayedMsgs.mantras;
      displayedMsgs.mantras = [];
    }
  }
}