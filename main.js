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
    "Breathing in, I send myself love.",
    "Breathing out, I send love to someone else who needs it.",
    "Don\'t let yesterday take up too much of today.",
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
    "I am the sky, the rest is weather.",
    ];

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function receiveMessage() {
    if (document.getElementById('Affirmation').checked && affirmations.length){
        image.classList.add("hidden");
       var affirmationsIndex = getRandomIndex(affirmations);
       message.innerText = affirmations[affirmationsIndex];
       addMessages1(affirmationsIndex);
    } else if (!affirmations.length) {
        image.classList.remove("hidden")
        message.innerText = 'You will now begin seeing repeated affirmation messages.'
        affirmations = shownAffirmationMessages;
        shownAffirmationMessages = [];
    }
    
    if (document.getElementById('Mantra').checked && mantras.length){
        image.classList.add("hidden");
        var mantrasIndex = getRandomIndex(mantras);
        message.innerText = mantras[mantrasIndex];
        addMessages2(mantrasIndex)
    }  else if (!mantras.length) {
        image.classList.remove("hidden")
        message.innerText = 'You will now begin seeing repeated mantra messages.'
        mantras = shownMantraMessages;
        shownMantraMessages = [];
    }
}

var shownAffirmationMessages = []
var shownMantraMessages = []

function addMessages1(i) {
    shownAffirmationMessages.push(affirmations[i]);
    affirmations.splice(i, 1);
}

function addMessages2(i) {
    shownMantraMessages.push(mantras[i]);
    mantras.splice(i, 1);
}

var image = document.querySelector(".image");
var receiveMessageButton = document.querySelector(".button");
var message = document.querySelector('.message')

receiveMessageButton.addEventListener('click', receiveMessage)