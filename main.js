var mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    'Don’t let yesterday take up too much of today.',
    'Every day is a second chance.',
    'Tell the truth and love everyone',
    'I am free from sadness.',
    'I am enough.',
    'In the beginning it is you, in the middle it is you and in the end it is you.',
    'I love myself.',
    'I am present now.',
    'Inhale the future, exhale the past.',
    'This too shall pass.',
    'Yesterday is not today.',
    'The only constant is change.',
    'Onward and upward.',
    'I am the sky, the rest is weather.'
];
var affirmations = [
    'I forgive myself and set myself free.',
    'I believe I can be all that I want to be.',
    'I am in the process of becoming the best version of myself.',
    'I have the freedom & power to create the life I desire.',
    'I choose to be kind to myself and love myself unconditionally.', 'My possibilities are endless.',
    'I am worthy of my dreams.',
    'I am enough.',
    'I deserve to be healthy and feel good.',
    'I am full of energy and vitality and my mind is calm and peaceful.',
    'Every day I am getting healthier and stronger.',
    'I honor my body by trusting the signals that it sends me.',
    'I manifest perfect health by making smart choices.'
];
var affirm = document.querySelector('#affirmation ');
var mantra = document.querySelector('#mantra');
var typeBox = document.querySelector('.type-box');
var messagePad = document.querySelector('.message-pad');
var radios = document.getElementsByName('care-choice');
var sayDisplay = document.querySelector('.say-display')
var buddha = document.querySelector('.buddha')
var clearOut = document.querySelector('.clear')

// var buddhaBounce = new AnimationEvent(animationstart, { animationName: slide })

typeBox.addEventListener('submit', insertSaying);

// typeBox.addEventListener('change', disableButton);

clearOut.addEventListener('click', clearBox);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function insertSaying() {
    event.preventDefault();
    buddha.style.display = 'none';
    clearOut.disabled = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked === true) {
            if (radios[i].value == 'affirmations') {
                sayDisplay.innerText = affirmations[getRandomIndex(affirmations)]
            } else if (radios[i].value == 'mantras') {
                sayDisplay.innerText = mantras[getRandomIndex(mantras)]
            }
        }
    }
};

function clearBox() {
    sayDisplay.innerText = '';
    buddha.style.display = 'initial';
    clearOut.disabled = true;
};

// function disableButton() {
//     if (event.target.checked) {
//         clearOut.disabled = false;
//     } else {
//         clearOut.disabled = true;
//     }
// };
// console.log(radios[i].value);
// arrayToUse = radios[i].value;
// sayDisplay.innerText = arrayToUse[getRandomIndex(arrayToUse)]