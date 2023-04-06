var affirmations = [
    "I am love. I am purpose. I was made with divine intention.", 
    "I am worthy of what I desire.", 
    "I can. I will. End of story.", 
    "I am adventurous. I overcome fears by following my dreams.", 
    "I feed my spirit. I train my body. I focus my mind. It's my time.", 
    "I am in charge of my life.", 
    "I am worthy. I am loved. I am enough.", 
    "I am my own light.", 
    "I believe in the good things coming.", 
    "I claim my desires. I hold great visions. I am ready to receive.", 
    "My presence is my power.", 
    "I am evolving.", 
    "You are the sky. Everything else is just the weather.", 
    "I am grateful for all that is unfolding in my life and all that is yet to come.", 
    "I am fulfilled. I am fearless.", 
    "Let the sacred Jewel of my lotus heart shine forth and bring light and joy to the world and to me."
];  
var mantras = [
    "My mind is brilliant. My body is healthy. My spirit is tranquil.", 
    "I create my own path and walk it with joy.", "My positive thoughts guide me to new heights.", 
    "I am conquering my fears and becoming stronger each day.", 
    "I am enough.", 
    "I am not afraid to be wrong.", 
    "My body is a temple. I keep my temple clean.", 
    "I love myself.", 
    "Good health is a practice and I have patience.", 
    "I listen to my body and give it what it needs.", 
    "Every cell in my body is alive and beautiful.", 
    "My potential is limitless, and I choose where to spend my energy.", 
    "Inhale the future, exhale the past.", 
    "I surrender to the flow and have faith in the ultimate good.", 
    "I will speak with confidence and self-assurance.", 
    "My commitment to myself is unbreakable."
];
var mantraChoice = document.querySelector('#mantra-choice');
var affirmationChoice = document.querySelector('#affirmation-choice');
var showMessage = document.querySelector("#show-message");
var buddhaIcon = document.querySelector('.buddha-icon');

var message;

//buttons:

var rcvMsgBtn = document.querySelector("#msg-btn");
var mantra = document.querySelector("#mantra-choice");
var affirmation = document.querySelector('#affirmation-choice')
var clearMsgBtn = document.querySelector("#clr-btn");

//event listeners:

rcvMsgBtn.addEventListener('click', function() {
    createMessage();
    hideIcon();
});

// event handlers & functions:

function randomizeMessage(array) {
    return Math.floor(Math.random() * array.length);
};

function createMessage() {
    if (mantra.checked) {
        message = mantras[randomizeMessage(mantras)];
        displayMessage();
    }
    else if (affirmation.checked) {
        message = affirmations[randomizeMessage(affirmations)];
        displayMessage();
    } else {
        alert("✨ Please make a selection to display message! ✨")
    }
}


function hideIcon() {
    if (mantra.checked || affirmation.checked){
        buddhaIcon.classList.add('hidden');
    } clearMsgBtn.classList.remove('hidden')
  }

// function displayClrBtn() {
//     clearMsgBtn.classList.remove('hidden')
// }

function displayMessage() {
    showMessage.innerText = message;
    return message
}






    //needs to hide the buddha icon -- line 28 htmlu
    //which means "removve hidden" from random index position of array, based on which radio button is selected...
    //


    // how can i join the rcvMsgBtn eventListener(aka, click) with the disappearing w/"#icon-display" -- (save it in a variable?) -- need to specify that










