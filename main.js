// DECLARE VARIABLES //
var btn = document.querySelector('button')
var msgBox = document.querySelector('.message-box')
var messages = document.querySelectorAll('input[name="message"]')


// EVENT LISTENERS //
btn.addEventListener('click', showMessage)




// EVENT HANDLERS AND FUNCTIONS //
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function getRandomMsg(msgArray) {
    var randomMsg = msgArray[getRandomIndex(msgArray)];
    return randomMsg;
}

function showMessage() {
    var selectedMsgType;
    for (var message of messages) {
        if (message.checked) {
            selectedMsgType = message.value;
            break;
        }
    }
    if (selectedMsgType === 'mantra'){
        var randomMessage = getRandomMsg(mantras)
        msgBox.innerHTML = `<p> ${randomMessage} </p>`
    } else if (selectedMsgType === 'affirmation') {
        var randomMessage = getRandomMsg(affirmations)
        msgBox.innerHTML = `<p> ${randomMessage} </p>`
    } else {
        alert('Please select a message type!')
    }
}
