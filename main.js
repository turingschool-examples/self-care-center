var affirmations = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",
    "I have the freedom & power to create the life I desire.",
    "I choose to be kind to myself and love myself unconditionally.",
    "My possibilities are endless.",
    "I am worthy of my dreams.",
    "I deserve to be healthy and feel good.",
    "I am full of energy and vitality and my mind is calm and peaceful.",
    "Every day I am getting healthier and stronger.",
    "I honor my body by trusting the signals that it sends me.",
    "I manifest perfect health by making smart choices."
];

var mantras = [
    "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    "Don't let yesterday take up too much of today.",
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

// DOM queries:

var recieveMessageButton = document.querySelector(".recieve-message-button");
var affirmationRadio = document.querySelector("#affirmation-radio");
var mantraRadio = document.querySelector("#mantra-radio");
var meditatingImage = document.querySelector(".meditating-person");
var userChosenMessage = document.querySelector(".user-random-phrase");
var clearMessageButton = document.querySelector(".clear-message-button")

// event listeners:

recieveMessageButton.addEventListener("click", recieveMessage)


// functions:


function showAffirmation() {
    var myText;
    for (i = 0; i < userChosenMessage.length; i++) {
        if (userChosenMessage[i].innerHTML == "test") {
            myText = userChosenMessage[i];
            break;
        }
    }
    userChosenMessage.removeAttribute("hidden");
    meditatingImage.setAttribute("hidden", "");
};


var usedAffirmation = [];
var usedMantra = [];

function generateUniqueAffirmation(array) {
    var random = Math.floor(Math.random() * array.length);
    random = Number(random);
    if (!usedAffirmation.includes(random)) {
        usedAffirmation.push(random);
        return random;
    } else if (usedAffirmation.includes(random) && usedAffirmation.length < array.length) {
        return generateUniqueAffirmation(array);
    } else {
        alert('No more affirmations available. You will now see repeats')
        usedAffirmation =[]
        return generateUniqueAffirmation(array);
    }
}

function generateUniqueMantra(array) {
    var random = Math.floor(Math.random() * array.length);
    random = Number(random);
    if (!usedMantra.includes(random)) {
        usedMantra.push(random);
        return random;
    } else if (usedMantra.includes(random) && usedMantra.length < array.length) {
        return generateUniqueMantra(array);
    } else {
        alert('No more mantras available. You will now see repeats')
        usedMantra =[]
        return generateUniqueMantra(array);
    }
}


function randomAffirmation() {
    var newAffirmations = affirmations[generateUniqueAffirmation(affirmations)];
    console.log(newAffirmations);
    return newAffirmations;
}


function randomMantras() {
    var newMantras = mantras[generateUniqueMantra(mantras)];
    return newMantras;
};


function recieveMessage() {
    userChosenMessage.innerHTML = '';
    if (affirmationRadio.checked) {
        userChosenMessage.innerHTML +=
            `<p class= "user-random-phrase">${randomAffirmation()}</p>`
        showAffirmation();
        // usedAffirmations.pop(userChosenMessage.innerText);
        // console.log(affirmations);
    } else if (mantraRadio.checked) {
        userChosenMessage.innerHTML +=
            `<p class= "user-random-phrase">${randomMantras()}</p>`
        showAffirmation();
        // usedMantra.push(userChosenMessage.innerText);
        // repeatMantra();
    }
}

// repeatAffirmation();
//     repeatMantra();

