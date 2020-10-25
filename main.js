var selects = document.querySelectorAll('.select');
var zen = document.querySelector('.zenIcon');
var returnMessage = document.querySelector('.message-suggestion');
var receiveBtn = document.querySelector('.receive-message-button');

receiveBtn.addEventListener('click', showMessage)

for (var i = 0; i < selects.length; i++) {
    selects[i].addEventListener('input', showMessage)
}

function getRandomIndex(array) {
    var randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

function showMessage() {
    hideMe()
    var mantra = getRandomIndex(mantras)
    var affirmation = getRandomIndex(affirmations)
    if (selects[0].checked) {
        returnMessage.innerHTML = `${mantra}`
    }
    if (selects[1].checked) {
        returnMessage.innerHTML = `${affirmation}`
    }
}