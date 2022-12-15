var randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
var randomMantra = mantra[Math.floor(Math.random() * mantras.length)];

var messageBox = document.querySelector('.message-pop-up');
var receiveBtn = document.querySelector('.receive-btn');
var meditate = document.querySelector('.meditate');
var affirmRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');

affirmRadio.addEventListener('click', changeSelection);
mantraRadio.addEventListener('click', changeSelection);
// receiveBtn.addEventListener('click', hideMeditate);
function changeSelection() {
    if (document.getElementById('affirmation')) {
        messageBox.innerHTML = randomAffirmation;
    } else {
        messageBox.innerHTML = randomMantra;
    }
}