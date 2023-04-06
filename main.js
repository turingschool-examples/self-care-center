// goal: when user clicks the receive message button, a random message from the list emerges.
// data:
// array: storage of mantra and affirmations
// radio input/value
// event listener
// DOM variable

// questions:
// how do we have the button recieve the input from the radio type?
// is this based on its value?
// how do we connect the affirmation values to the affirmation array?

// create a DOM variable for the recieve message button
var receiveButton = document.querySelector(".receive");
var radioAffirmation = document.querySelector("#affirmation");
var meditationImg = document.querySelector("img");
var messageDisplaySection = document.querySelector('.message-display')

// create an event listener
receiveButton.addEventListener("click", displayMessage);
radioAffirmation.addEventListener("click", displayMessage);

var currentMessage;

// random array index
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function createMessage()


function hide(element) {
    element.classList.add("hidden");
  }
  
  function show(element) {
    element.classList.remove("hidden");
  }
  
  function displayMessage() {
    console.log("hello");
    hide(meditationImg);
  }

// array objects data model
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

var mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    "Don’t let yesterday take up too much of today.",
    'Every day is a second chance.',
    'Tell the truth and love everyone',
    'I am free from sadness.',
    'I am enough',
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