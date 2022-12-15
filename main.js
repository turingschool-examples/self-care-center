var receiveMessageBtn = document.querySelector('#btn-receive-msg');
var homeBtn = document.querySelector('#btn-home');
var collectionBtn = document.querySelector('#btn-collection');
var createBtn = document.querySelector('#btn-create');
var createAffBtn = document.querySelector('#btn-create-aff');
var createManBtn = document.querySelector('#btn-create-man');
var affirmationRb = document.querySelector('#rb-affirmation');
var mantraRb = document.querySelector('#rb-mantra');
var messageDisplay = document.querySelector('#message-display');
var homeSection = document.querySelector('#main-section');
var collectionSection = document.querySelector('#collection-section');
var affirmationList = document.querySelector('#affirmation-list');
var mantraList = document.querySelector('#mantra-list');
var createMessage = document.querySelector('#create-message-form');
var createMessageTextArea = document.querySelector('#create-message-ta');

var messages = [
    {type: 'affirmation', msg: "All you need is within you right now", id: 0},
    {type: 'affirmation', msg: "Just be a little bit better than you were yesterday", id: 1},
    {type: 'affirmation', msg: "Make way for the unprecedented and watch your reality rearrange yourself", id: 2},
    {type: 'affirmation', msg: "The perfect moment is this one", id: 3},
    {type: 'affirmation', msg: "You must do the things you think you cannot do", id: 4},
    {type: 'affirmation', msg: "Good riddance to decisions that don't support self-care, self-value, and self-worth", id: 5},
    {type: 'affirmation', msg: "You can make someone's life more bearable", id: 6},
    {type: 'affirmation', msg: "My goals are attainable, and my habits will get me there", id: 7},
    {type: 'affirmation', msg: "Peace, harmony, and poise govern my mind at all times", id: 8},
    {type: 'affirmation', msg: "You can try and fail, but you can never fail to try", id: 9},
    {type: 'mantra', msg: "Progress Not Perfection", id: 10},
    {type: 'mantra',msg: "It is all good!", id: 11},
    {type: 'mantra',msg: "I am exactly where I am supposed to be", id: 12},
    {type: 'mantra',msg: "I will have a good day, because it is my choice", id: 13},
    {type: 'mantra',msg: "I hold the key to better health through eating better and exercise", id: 14},
    {type: 'mantra',msg: "My commitment to myself is unbreakable", id: 15},
    {type: 'mantra',msg: "No one can take your joy", id: 16},
    {type: 'mantra',msg: "Happiness can be affected by the circumstances you create.", id: 17},
    {type: 'mantra',msg: "Inhale, exhale", id: 18},
    {type: 'mantra',msg: "I choose love", id: 19}
];

window.addEventListener('load', displayMessages);
homeBtn.addEventListener('click', goHome);
collectionBtn.addEventListener('click', goToCollection);
createAffBtn.addEventListener('click', addNewMessage);
createManBtn.addEventListener('click', addNewMessage);
createBtn.addEventListener('click', toggleCreateMessage);

receiveMessageBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if(affirmationRb.checked){
        messageDisplay.innerHTML = `<p>${getRandomMessage(messages)}</p>`;
    }else if(mantraRb.checked) {
        messageDisplay.innerHTML = `<p>${getRandomMessage(messages)}</p>`;
    }
});

var msgDragged;
collectionSection.addEventListener('dragstart', function(event) {
    msgDragged = event.target.id;
})
collectionSection.addEventListener('dragover', function(event){
    event.preventDefault();
});
collectionSection.addEventListener('drop', function(event) {
    if(event.target.id === 'trash-can') {
        deleteMessage(msgDragged);
    }else if(event.target.classList[0] === 'single-message') {
        var msgDropped = event.target.id;
        moveMessage(getIndexFromID(msgDragged),getIndexFromID(msgDropped));
    }
})

function goHome() {
    collectionSection.classList.add('hidden');
    homeSection.classList.remove('hidden');
}

function goToCollection() {
    collectionSection.classList.remove('hidden');
    homeSection.classList.add('hidden');
}

function toggleCreateMessage() {
    createMessage.classList.toggle('hidden');
    if(createMessage.classList.contains('hidden')) {
        createBtn.innerText = '➕';
    }else{
        createBtn.innerText = '➖';
    }
}

function addNewMessage(event) {
    event.preventDefault();
    if(createMessageTextArea.value) {
        var msgType;
        if(event.target.id === 'btn-create-aff') {
            msgType = 'affirmation';
        }else if(event.target.id === 'btn-create-man'){
            msgType = 'mantra';
        }
        messages.unshift({
            type: msgType,
            msg: createMessageTextArea.value,
            id: Date.now()
        })
        createMessageTextArea.value = '';
        toggleCreateMessage();
        displayMessages();
    }
}

function deleteMessage(idString) {
    for(var i = 0; i < messages.length; i++) {
        if(messages[i].id.toString() === idString){
            messages.splice(i,1);
            break;
        }
    }
    displayMessages();
}

function moveMessage(messageIndex, newIndex) {
    if(messages[messageIndex].type === messages[newIndex].type){
        var messageToMove = messages.splice(messageIndex,1)[0];
        messages.splice(newIndex,0,messageToMove);
        displayMessages();
    }
}

function getIndexFromID(idString) {
    for(var i = 0; i < messages.length; i++) {
        if(messages[i].id.toString() === idString){
            return i;
        }
    }
}

function displayMessages() {
    affirmationList.innerHTML = ''
    mantraList.innerHTML = ''
    for(var i = 0; i < messages.length; i++) {
        if(messages[i].type === 'affirmation') {
            affirmationList.innerHTML += `<div draggable="true" class="single-message card" id="${messages[i].id}">${messages[i].msg}</div>`;
        }else if(messages[i].type === 'mantra'){
            mantraList.innerHTML += `<div draggable="true" class="single-message card" id="${messages[i].id}">${messages[i].msg}</div>`
        }
    }
}

function getRandomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)].msg;
}
