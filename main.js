// DOM variables
let recieveMsgButton = document.querySelector('#recieve-button');
let affirmRadio = document.querySelector('#affirmation');
let mantraRadio = document.querySelector('#mantra');
let msgBox = document.querySelector('#msg-box')
let addMsgButton = document.querySelector('#add-msg-button')
let chooseMsgView = document.querySelector('#choose-msg-view')
let addMsgView = document.querySelector('#add-msg-view')
let msgInput = document.querySelector('#msg')
let selectType = document.querySelector('#select')
let buddhaView = document.querySelector('#buddha-view')

// Event Listeners
recieveMsgButton.addEventListener('click', recieveMsg);
addMsgButton.addEventListener('click', addMsg)

// Functions
function getRandomIndex(type) {
    return Math.floor(Math.random() * type.length);
}

function recieveMsg() {
    if (chooseMsgView.classList.contains('hidden')){
        toggleChooseViews();
    }
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
        return alert('Please Choose a Message Type!')
    }
}

function displayMsg(msg) {
    msgBox.innerHTML = ''
    msgBox.innerHTML += `
    <h3>${msg}</h3>
    `
}

function addMsg() {
    if (!msgInput.value && addMsgView.classList.contains('hidden')){
        toggleChooseViews();
        msgBox.innerHTML = ''
        // show buddha
    } else if (selectType.value === 'default' && msgInput.value){
        alert('Please select a message type!')
    } else {
        displayMsg(msgInput.value);
        addMsgData()
        msgInput.value = ''
    }
}

function addMsgData() {
    if (selectType.value === 'affirmation'){
        affirmations.push(msgInput.value)
    } else if (selectType.value === 'mantra'){
        mantras.push(msgInput.value)
    } else {
        // come back to this ?
        return;
    }
}

function toggleChooseViews() {
    chooseMsgView.classList.toggle('hidden')
    addMsgView.classList.toggle('hidden')
}

function clearRadio() {
    mantraRadio.checked = false;
    affirmRadio.checked = false;
}