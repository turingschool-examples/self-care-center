
// Restate the goal: 
// I need to build a web app that will allow users to recieve a self care 
// message. They should be able to select the type of message they want 
// to recieve, click a button, and then see a randomly generated message
// Data Types: 
// I need have a data model - this will be an array or arrays that store the 
// messages in them
// I will be working with strings - these will be the messages
// I will be working with radio buttons
// Questiions:
// is it better to use innerHTML or createElement and then appendChild when 
// displaying something to the DOM?
// should I be using display: hidden for the image currently in the output
// how do I read the value of a radio button? or see if it is checked?
// Psuedocode:
// I need 2 arrays that will store the message strings
// I need a function that will randomly choose a message from the arrays
// I need a function that will change the innerHTML of the output box
// I need querySelectors that will target the radio buttons and see if there
// value is checked
// I need a querySelector that will target the message button
// I need a querySelector that willt target the output box
// I need a class of hidden in css to show and hide the image in the output box

//<><>Data Model<><>
var affiramtions = ["I am worthy of love and respect",
"I embrace my uniqueness and individuality",
"I radiate positivity and attract abundance",
"I am confident in my abilities and talents",
"I am deserving of happiness and fulfillment",
"I trust in my journey and embrace uncertainty",
"I forgive myself and release all negativity",
"I am surrounded by love and support",
"I am capable of overcoming challenges",
"I am a magnet for success and prosperity",
"I choose joy and gratitude in every moment",
"I am enough just as I am",
"I am in control of my thoughts and emotions",
"I attract positivity and opportunities into my life",
"I am empowered to create the life I desire"]

var mantras =["I am at peace",
"I am here, I am now",
"I am love, I am light",
"I am strong, I am resilient",
"I am grateful for this moment",
"I trust in the journey of life",
"I let go of fear and embrace love",
"I am open to receiving abundance",
"I am connected to the universe",
"I am centered, I am grounded",
"I am worthy of love and joy",
"I am aligned with my purpose",
"I am guided by intuition",
"I am grateful for all experiences",
"I am a beacon of positivity"]

//<><>Query Selectors<><>
var affrimationRadio = document.querySelector('#radio-button-affirmation');
var mantraRadio = document.querySelector('#radio-button-mantra');
var recieveMessageButton = document.querySelector('#message-button');
var outputSection = document.querySelector('#message-output-box');
var outputImage = document.querySelector('#meditation-image');
var h3 = document.querySelector('h3');

//<><>Event Listeners<><>
recieveMessageButton.addEventListener('click', makeNewMessage);
affrimationRadio.addEventListener('click', errorReset);
mantraRadio.addEventListener('click', errorReset);

//<><>Event Handlers<><>
function makeNewMessage() {
    if (affrimationRadio.checked) {
        var affirmMessage = randomIndex(affiramtions);
        outputImage.classList.add('hidden');
        outputSection.innerHTML = `"${affirmMessage}"`;
        outputSection.classList.add('output-message');
    } 
    if (mantraRadio.checked) {
        var mantraMessage = randomIndex(mantras);
        outputImage.classList.add('hidden');
        outputSection.innerHTML = `"${mantraMessage}"`;
        outputSection.classList.add('output-message');
    }
    if (!mantraRadio.checked && !affrimationRadio.checked) {
        h3.innerText = '✨PLEASE CHOOSE AN OPTION✨';
        h3.classList.add('error-handling');
    }
}

function errorReset() {
    if (affrimationRadio.checked) {
        h3.classList.remove('error-handling');
        h3.innerText = 'Which type of message?';
    }
    if (mantraRadio.checked) {
        h3.classList.remove('error-handling');
        h3.innerText = 'Which type of message?';
    }
}

//<><>Functions<><>
function randomIndex(messages) {
    var randInd = Math.floor(Math.random() * messages.length) ;
    var randMessage = messages[randInd];
    return randMessage;
}


