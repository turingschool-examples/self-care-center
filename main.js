//QUERY SELECTORS
// var affirmationButton = document.getElementById('affirmation');
// var mantraButton = document.getElementById('mantra');
var recieveMessageButton = document.querySelector('.recieveMessageBtn');
var icon = document.querySelector('.icon');
var message = document.querySelector('.message');
var createMessageButton = document.querySelector('.createMessageBtn');
var form = document.querySelector('.formContainer');
var submitButton = document.querySelector('.submitBtn');
var dropDown = document.getElementById('messageType')
var customMessageInput = document.getElementById('customMessage')

//EVENT LISTENERS
recieveMessageButton.addEventListener('click', function() {
    showMessage();
    getMessage();
});

createMessageButton.addEventListener('click', function() {
showForm();
disableRecieveMessage();
});

submitButton.addEventListener ('click', function(event) {
    event.preventDefault()
    addCustomMessage();
    displayCustomMessage();
});

//DATA
var affirmationArray = ['I forgive myself and set myself free.','I believe I can be all that I want to be.','I am in the process of becoming the best version of myself.','I have the freedom & power to create the life I desire.','I choose to be kind to myself and love myself unconditionally.','My possibilities are endless.','I am worthy of my dreams.','I am enough.','I deserve to be healthy and feel good.','I am full of energy and vitality and my mind is calm and peaceful.','Every day I am getting healthier and stronger.','I honor my body by trusting the signals that it sends me.','I manifest perfect health by making smart choices.'
];

var mantraArray = 
['Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.','Don’t let yesterday take up too much of today.','Every day is a second chance.','Tell the truth and love everyone.','I am free from sadness.','I am enough.','In the beginning it is you, in the middle it is you and in the end it is you.','I love myself.','I am present now.','Inhale the future, exhale the past.','This too shall pass.','Yesterday is not today.','The only constant is change.','Onward and upward.', 'I am the sky, the rest is weather.'];

var pushedMessage = [];

//JS-DATA MODEL
function getRandomMessage(messageArray) {
    return Math.floor(Math.random() * messageArray.length);
}

function getMessage(){
    var affirmations = affirmationArray[getRandomMessage(affirmationArray)];
    var mantras = mantraArray[getRandomMessage(mantraArray)];
    if(document.getElementById('affirmation').checked){
        pushedMessage.push(affirmations)
        message.innerText = affirmations 
    } else if (document.getElementById('mantra').checked) {
        pushedMessage.push(mantras)
        message.innerText = mantras 
    }
}

function addCustomMessage() {
    if(dropDown.value === 'affirmationOpt') {
        affirmationArray.push(customMessageInput.value)
    } else if (dropDown.value === 'mantraOpt') {
        mantraArray.push(customMessageInput.value)
    }
}

//JS-DOM 
function displayCustomMessage() {
    if(dropDown.value === 'affirmationOpt'){
        form.classList.add('hidden')
        message.classList.remove('hidden')
        message.innerText = customMessageInput.value
    } else if(dropDown.value === 'mantraOpt'){
        form.classList.add('hidden')
        message.classList.remove('hidden')
        message.innerText = customMessageInput.value
    } else if(dropDown.value === 'empty'){
        alert('Please select a message type!');
        return false;
    }
}

function disableRecieveMessage(){
    if(form) {
        recieveMessageButton.disabled = true;
    }
}

function showMessage(){
    icon.classList.add('hidden');
    message.classList.remove('hidden')
    }

function showForm() {
    icon.classList.add('hidden');
    form.classList.remove('hidden');
    message.classList.add('hidden');
}