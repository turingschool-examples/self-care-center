var affirmations = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",
    // "I have the freedom & power to create the life I desire.",
    // "I choose to be kind to myself and love myself unconditionally.",
    // "My possibilities are endless.",
    // "I am worthy of my dreams.",
    // "I deserve to be healthy and feel good.",
    // "I am full of energy and vitality and my mind is calm and peaceful.",
    // "Every day I am getting healthier and stronger.",
    // "I honor my body by trusting the signals that it sends me.",
    // "I manifest perfect health by making smart choices."
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
var removeMessageButton = document.querySelector(".remove-message-button")
var removeButtonClass = document.querySelector(".user-remove-button")

// event listeners:

recieveMessageButton.addEventListener("click", recieveMessage)
removeMessageButton.addEventListener("click", removeMessage);

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
    removeButtonClass.removeAttribute("hidden");

};

usedAffirmation = [];
usedMantra = [];

function generateUniqueAffirmation(array) {
    var random = Math.floor(Math.random() * array.length);
    // to do: confirm correct conditional??? 
    if (usedAffirmation.length === array.length) {
        alert('No more affirmations available. You will now see repeats')
        usedAffirmation = []
    }
    while (usedAffirmation.includes(array[random]) && array.length > 0) {
        random = Math.floor(Math.random() * array.length)
    }
    usedAffirmation.push(array[random])
    return random;

}

function generateUniqueMantra(array) {
    var random = Math.floor(Math.random() * array.length);
    if (usedMantra.length === array.length) {
        alert('No more mantras available. You will now see repeats')
        usedMantra = []
    }
    while (usedMantra.includes(array[random]) && array.length > 0) {
        random = Math.floor(Math.random() * array.length)
    }
    usedMantra.push(array[random])
    return random;

}

    function recieveMessage() {
        if (affirmationRadio.checked) {
            console.log(affirmations)
            if (affirmations.length === 0) {
                alert("No more available affirmations, reload the page to start again!")
                return;
            }
            var index = generateUniqueAffirmation(affirmations)
            userChosenMessage.innerText = affirmations[index]
            userChosenMessage.id = index
        } else if (mantraRadio.checked) {
            if (mantras.length === 0) {
                alert("No more available mantras, reload the page to start again!")
                return;
            }
            var index = generateUniqueMantra(mantras)
            userChosenMessage.innerText = mantras[index]
            userChosenMessage.id = index
        }
        showAffirmation();
    }

    function removeMessage() {
        alert("Message cleared, you will not see that again!")
        if (affirmationRadio.checked) {
            affirmations.splice(userChosenMessage.id, 1)
        } else {
            mantras.splice(userChosenMessage.id, 1)

        }
        userChosenMessage.setAttribute("hidden", "");
        meditatingImage.removeAttribute("hidden");
        removeButtonClass.setAttribute("hidden", "");
    };

