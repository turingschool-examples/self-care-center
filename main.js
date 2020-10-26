var selects = document.querySelectorAll('input[type="radio"]');
var zen = document.querySelector('.zenIcon');
var returnMessage = document.querySelector('.replace');
var receiveBtn = document.querySelector('.receive-message-button');
var clearBtn = document.querySelector('.clear-message-button');
var messageContainer = document.querySelector('message-container');

if (selects[0].checked === false || selects[1].checked === false) {
    receiveBtn.disabled = true;
}
for (var i = 0; i < selects.length; i++) {
    selects[i].addEventListener('input', enableReceiveButton)
}

receiveBtn.addEventListener('click', showMessage)
clearBtn.addEventListener('click', clearMessage)


function getRandomIndex(array) {
    var randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

function showMessage() {
    var mantra = getRandomIndex(mantras)
    var affirmation = getRandomIndex(affirmations)

    if (selects[0].checked) {
        returnMessage.innerText = `${mantra}`
    } else if (selects[1].checked) {
        returnMessage.innerText = `${affirmation}`
    }
    zen.classList.add('hidden');

}

function enableReceiveButton() {
    receiveBtn.removeAttribute('disabled')
}

function clearMessage() {
    returnMessage.innerText = ""
    returnMessage.innerText = ""
    zen.classList.remove('hidden')

}