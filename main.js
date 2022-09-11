window.onload = function () {
    recieveMessageButton = document.querySelector('.rMButton')
    recieveMessageButton.addEventListener('click', showMessage)
}

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
    "I manifest perfect health by making smart choices.",
];

function showMessage() {
    affirmationButton = document.querySelector("#Affirmation")
    if(affirmationButton.checked == true) {
        var randomAffirmation = affirmations [Math.floor(Math.random()*affirmations.length)];
        console.log(randomAffirmation)
    }
}
