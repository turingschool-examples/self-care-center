// DOM variables
let recieveMsgButton = document.querySelector('#recieve-button');
let affirmRadio = document.querySelector('#affirmation');
let mantraRadio = document.querySelector('#mantra');
let msgBox = document.querySelector('#msg-box')
let addMsgButton = document.querySelector('#add-msg-button')
let chooseMsgView = document.querySelector('#choose-msg-view')
let addMsgView = document.querySelector('#add-msg-view')
let msgInput = document.querySelector('#msg')

// Event Listeners
recieveMsgButton.addEventListener('click', recieveMsg);
addMsgButton.addEventListener('click', addMsg)

// Functions
function getRandomIndex(type) {
    return Math.floor(Math.random() * type.length);
}

function recieveMsg() {
    displayMsg(getMsg())
    clearRadio()
}

function getMsg() {
    if (affirmRadio.checked) {
       let affirm = affirmations[getRandomIndex(affirmations)]
       return affirm;
    } else if (mantraRadio.checked){
        let mantra = mantras[getRandomIndex(mantras)]
        return mantra;
    } else if (!mantraRadio.checked && !affirmRadio.checked){
        //hide message view, unhide buddha
        return msgBox.innerHTML = ''
    }
}

function displayMsg(msg) {
    msgBox.innerHTML = ''
    msgBox.innerHTML += `
    <h3>${msg}</h3>
    `
}

function addMsg() {
    if (!msgInput.value){
        toggleViews();
        msgBox.innerHTML = ''
        // show buddha
    } else {
        displayMsg();
        msgInput.value = ''
    }
}

// function addMsgData() {
//     affirmations.push(msgInput.value)
// }

function toggleViews() {
    chooseMsgView.classList.toggle('hidden')
    addMsgView.classList.toggle('hidden')
}

function clearRadio() {
    mantraRadio.checked = false;
    affirmRadio.checked = false;
}