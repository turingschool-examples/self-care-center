// Selector Variables here ⛷

var meditationImage = document.querySelector('.meditation-img');
var yourMessage = document.querySelector('.your-message');
var messageButton = document.querySelector('#receive-button');
var affirmationRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');
var clearButton = document.querySelector('.clear-btn');


// Data here ⛷

var affirmations = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",
    "I have the freedom & power to create the life I desire.",
    "I choose to be kind to myself and love myself unconditionally.",
    "My possibilities are endless.",
    "I am worthy of my dreams.",
    "I am enough.",
    "I deserve to be healthy and feel good.",
    "I am full of energy and vitality and my mind is calm and peaceful.",
    "Every day I am getting healthier and stronger.",
    "I honor my body by trusting the signals that it sends me.",
    "I manifest perfect health by making smart choices."
];
var mantras = [
    "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
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
    "I am the sky, the rest is weather."
];

// Event Listeners here ⛷

affirmationRadio.addEventListener('click', enableReceiveBtn);
mantraRadio.addEventListener('click', enableReceiveBtn);
messageButton.addEventListener('click', pickAMessage);
clearButton.addEventListener('click', clearMessage);


// Event handlers/functions here ⛷

function getRandomMessage(array) {
    return Math.floor(Math.random() * array.length)
};

function pickAMessage() {
    if (affirmationRadio.checked) {
        receiveAffirmation();
    } else if (mantraRadio.checked) {
        receiveMantra();
    }
};

function enableReceiveBtn() {
    messageButton.disabled = false;
}

function receiveAffirmation() {
    showItem(yourMessage);
    hideItem(meditationImage);
    showItem(clearButton);
    // disableReceiveBtn();
    clearRadio();
    yourMessage.innerText = affirmations[getRandomMessage(affirmations)];
};

function receiveMantra() {
    showItem(yourMessage);
    hideItem(meditationImage);
    showItem(clearButton);
    // disableReceiveBtn();
    clearRadio();
    yourMessage.innerText = mantras[getRandomMessage(mantras)];
};

function clearMessage() {
    hideItem(yourMessage);
    showItem(meditationImage);
    hideItem(clearButton);
    clearRadio();
};

function clearRadio() {
    affirmationRadio.checked = false;
    mantraRadio.checked = false;
};

// function showReceiveBtn() {
//     if (affirmationRadio.checked || mantraRadio.checked) {
//         showItem(messageButton);
//     }
// };

// function disableReceiveBtn() {
//     if (!affirmationRadio.checked || mantraRadio.checked) {
//         messageButton.disabled = true;
//     }
// };

function showItem(selectorVariable) {
    selectorVariable.classList.remove('hidden')
};

function hideItem(selectorVariable) {
    selectorVariable.classList.add('hidden')
};




// receive message always visible but disabled if radio buttons not 
// selected.