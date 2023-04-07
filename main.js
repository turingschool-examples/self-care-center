// DECLARE VARIABLES //
var btn = document.querySelector('button')
var msgBox = document.querySelector('.message-box')
var messages = document.querySelectorAll('input[name="message"]')
var clearBtn = document.querySelector('#clearbtn')

// EVENT LISTENERS //
btn.addEventListener('click', showMessage)
clearBtn.addEventListener('click', clearMsg)



// EVENT HANDLERS AND FUNCTIONS //
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
function clearMsg() {
    msgBox.innerHTML = `<img src="assets/meditate.svg" alt="Bell Icon">`
    clearBtn.classList.add('hidden');
    for (var message of messages) {
        message.checked = false;
    }
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
        clearBtn.classList.remove('hidden');
    } else if (selectedMsgType === 'affirmation') {
        var randomMessage = getRandomMsg(affirmations)
        msgBox.innerHTML = `<p> ${randomMessage} </p>`
        clearBtn.classList.remove('hidden');
    } else {
        msgBox.innerHTML = `<p> ✨Please select a message type✨ </p>` 
    }
}
