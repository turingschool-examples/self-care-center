var msgBtn = document.querySelector('.show-message-button')
var message = document.querySelector('.message-view')
var icon = document.querySelector('.icon-view')
var affirmation = document.getElementById('affirmation-radio')
var mantra = document.getElementById('mantra-radio')

msgBtn.addEventListener('click', displayMsg)

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function displayMsg() {
    var messageChosen = chooseMsg();
    if (messageChosen) {
        message.classList.remove('hidden');
        icon.classList.add('hidden');
    }
}

function chooseMsg() {
if (affirmation.checked) {
    var idx = getRandomIndex(affirmations);
    message.innerText = affirmations[idx];
    return true;
} else if (mantra.checked) {
    var idx = getRandomIndex(mantras);
    message.innerText = mantras[idx]
    return true;
}
}