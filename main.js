// Step 1: create a way to find a random array element from the data file

var mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    'Don’t let yesterday take up too much of today.',
    'Every day is a second chance.',
    'Tell the truth and love everyone.',
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
]

var affirmations = [
    'I forgive myself and set myself free.',
    'I believe I can be all that I want to be.',
    'I am in the process of becoming the best version of myself.',
    'I have the freedom & power to create the life I desire.',
    'I choose to be kind to myself and love myself unconditionally.',
    'My possibilities are endless.',
    'I am worthy of my dreams.',
    'I am enough.',
    'I deserve to be healthy and feel good.',
    'I am full of energy and vitality and my mind is calm and peaceful.',
    'Every day I am getting healthier and stronger.',
    'I honor my body by trusting the signals that it sends me.',
    'I manifest perfect health by making smart choices.'
]

// Variables -

var receiveMessageButton = document.querySelector('button')

var affirmationRadio = document.querySelector('.affirmation-radio')
var mantraRadio = document.querySelector('.mantra-radio')
var textBoxTwo = document.querySelector('.textBox2')
var meditationIcon = document.querySelector('img')
var messageBox = document.querySelector('.message')

var message;

// Event Listeners -

receiveMessageButton.addEventListener('click', function() {
    show(messageBox)
    locateSentence()
    displaySentence(message)
})

// Event Handlers -

function displaySentence(message) {
    hideElement(textBoxTwo)
    textBoxTwo.innerHTML = `
    <section class='message'>${message}</section>`
}

function locateSentence() {
    if (affirmationRadio.checked === true) {
        message = affirmations[getRandomIndex(affirmations)];
        console.log(message)
        return message;
    } else if (mantraRadio.checked === true) {
        message = mantras[getRandomIndex(mantras)];
        return message;
    }
}

// Misc. Functions -

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function hideElement(element) {
    element.classList.add('hidden');
}

function show(element) {
    element.classList.remove("hidden");
  };