//query selectors

var affirmationButton = document.querySelector('.affirmation');
var mantraButton = document.querySelector('.mantra');
var receiveMessageButton = document.querySelector('.receive-message');
var clearMessageButton = document.querySelector('.clear-message');
var messageText = document.querySelector('.message-text');
var image = document.querySelector('.image');
var nameInput = document.querySelector('.your-name');
var messageInput = document.querySelector('.personal-message');
var personalButton = document.querySelector('.personal-button')
var personalForm = document.querySelector('.personalize');

var saveMessageButton = document.querySelector('.save-message');
var saveAffirmationButton = document.querySelector('.mini-affirmation')
var saveMantraButton = document.querySelector('.mini-mantra');

var showAllSection = document.querySelector('.show-all')
var showAllButton = document.querySelector('.show-messages');
var form = document.querySelector('.form');
var showAffirmationsButton = document.querySelector('.show-affirmations');
var showMantrasButton = document.querySelector('.show-mantras');
var showSavedButton = document.querySelector('.show-saved');
var arrayDisplay = document.querySelector('.array-display')


//event listeners

receiveMessageButton.addEventListener('click', returnMessage);
personalButton.addEventListener('click', showForm)
saveMessageButton.addEventListener('click', saveMessage);
showAllButton.addEventListener('click', showAllMessages);
showAffirmationsButton.addEventListener('click', showAffirmations);
showMantrasButton.addEventListener('click', showMantras);

//event handlers

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function personalizeMessage() {
    if(nameInput.value){
        messageText.innerText = nameInput.value + ", " + messageInput.value;
    }else{
        messageText.innerText = messageInput.value;
    }
}

function returnAffirmation() {
    if(nameInput.value){
        messageText.innerText = nameInput.value + ", " + affirmations[randomIndex(affirmations)];
    }else{
        messageText.innerText = affirmations[randomIndex(affirmations)]; 
    }
}

function returnMantra() {
    if(nameInput.value){
        messageText.innerText = nameInput.value + ", " + mantras[randomIndex(mantras)];
    }else{
        messageText.innerText = mantras[randomIndex(mantras)];
    }
};

function returnMessage() {
    event.preventDefault();
    image.classList.add('hidden');
    messageText.classList.remove('hidden');
    affirmationButton.disabled = true;
    mantraButton.disabled = true;
    if (!affirmationButton.checked && !mantraButton.checked && !messageInput.value){
        messageText.innerText = 'Please select "affirmation" OR "mantra"!'
    }else if(affirmationButton.checked) {
        returnAffirmation();
    }else if(mantraButton.checked){
        returnMantra();
    }else if(messageInput){
        personalizeMessage();
    }
    receiveMessageButton.classList.add('hidden');
    clearMessageButton.classList.remove('hidden');
    personalButton.classList.add('hidden');
    affirmationButton.checked = false;
    mantraButton.checked = false;
};

function saveMessage() {
    if (!saveAffirmationButton.checked && !saveMantraButton.checked){
        alert('Is this message an "affirmation" OR a "mantra"?')
    }
    else if (saveAffirmationButton.checked){
        saveAffirmation();
    }else if (saveMantraButton.checked){
            saveMantra();
        };
    if (savedMessages[savedMessages.length-1] !== messageInput.value){
        savedMessages.push(messageInput.value)
    }   
    returnMessage();
    // console.log(savedMessages)
    // console.log(mantras)
    // console.log(affirmations)
}

function saveMantra(){
    if (!mantras.includes(messageInput.value)){
    mantras.push(messageInput.value)
    }
};

function saveAffirmation(){
    if (!affirmations.includes(messageInput.value)){
    affirmations.push(messageInput.value)
    }
};

function showForm() {
    event.preventDefault();
    personalForm.classList.remove('hidden');
    personalButton.classList.add('hidden');
    saveMessageButton.classList.remove('hidden');
    showAllButton.classList.add('hidden');
}

function showAllMessages() {
    event.preventDefault();
    showAllSection.classList.remove('hidden');
    form.classList.add('hidden');
}

// function showMessage(type){

//     if (type === 'affirmations'){
//         showAffirmations();
//     }else if (type === 'mantras'){
//         showMantras();
//     }
// }
function showAffirmations(){
    event.preventDefault();
    arrayDisplay.classList.toggle('hidden');
    showAffirmationsButton.innerText = "Hide Affirmations"
    arrayDisplay.innerHTML = "";
    for (var i = 0; i < affirmations.length; i++){
        arrayDisplay.innerHTML += `<p class="array-display">${affirmations[i]}</p>`
    }
}    

function showMantras(){
    event.preventDefault();
    arrayDisplay.classList.toggle('hidden');
    showMantrasButton.innerText = "Hide Mantras"
    arrayDisplay.innerHTML = "";
    for (var i = 0; i < mantras.length; i++){
        arrayDisplay.innerHTML += `<p class="array-display">${mantras[i]}</p>`
    }
}  



//pseudo
//when a user selects a message type, that information should be passed to a function that iterates through it's corresponding array and returns an element.
//the value of the innerText of the H2 element (.message) in the message container should be reassigned to the value that is returned from the array
//when the 'receive message' button is clicked the hidden class needs to be applied to the image, and the class hidden needs to be removed from the message.

// arrays 
var savedMessages = [];

var affirmations = ["I forgive myself and set myself free.", 
"I believe I can be all that I want to be.", 
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.", 
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.", 
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."];

var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.", 
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."];