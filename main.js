//BUTTONS AND INPUTS **
var recieveBtn = document.querySelector('#recieve-button')
var radioAffirmation = document.querySelector('#radio-affirmation')
var radioMantra = document.querySelector('#radio-mantra')
var clearBtn = document.querySelector('.clear-button')
var affChoice = document.querySelector('.aff-choice')
var mantraChoice = document.querySelector('.mantra-choice')
var inputOne = document.querySelector('.input1')
var dropdown = document.querySelector('.dropdown-content')
var submitOne = document.querySelector('.submit1')
var submitTwo = document.querySelector('.submit2')
var hereBtn = document.querySelector('.here-button')

//VARIABLES **
var giveMantra = document.querySelector('#give-message')
var giveAffirmation = document.querySelector('#give-message')
var imageBuddha = document.querySelector('.buddha')
var textBox = document.querySelector('.textbox')

// Pseudocode for add own message FUNCTIONS
// Add variables for drop down, input form, submit button.

var choiceContainer = document.querySelector('.container')
var hereBtn = document.querySelector('.here-button')

//STORED DATA **
 affirmations = [
'I forgive myself and set myself free.', 'banana',
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
'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it', 'pineapple',
'Dont let yesterday take up too much of today.',
'Every day is a second chance.',
'Tell the truth and love everyone.',
'I am free from sadness.', 'I am enough.',
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

var tempList = []
//EVENT LISTENERS HERE **
recieveBtn.addEventListener('click', sendMessage)
radioAffirmation.addEventListener('click', showButton)
radioMantra.addEventListener('click', showButton)
clearBtn.addEventListener('click', hideMessage)
hereBtn.addEventListener('click', showChoices)
submitOne.addEventListener('click', choiceMessageReveal)
submitTwo.addEventListener('click', addMessage)
// submit button LISTENER

//FUNCTIONS AND HANDLERS **
randoMantra = getRandomIndex(mantras)
randoAffirmation = getRandomIndex(affirmations)

function sendMessage(){
    hideTheBuddha()
    unhideClear()
    unHideText()
  if (radioMantra.checked){
    giveMantra.innerText = mantras[randoMantra]
  }
  if (radioAffirmation.checked) {
    giveAffirmation.innerText = affirmations[randoAffirmation]
  }
  // if statement for add own message.
};


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};
//(un)HIDE FUNCTIONS ***
// un-hide submit when drop down choice made
// unhide form when hover over message
// hide inputs when submitted.
function addMessage(){
  hideTheBuddha()
  unHideText()
tempList.unshift(inputOne.value)
giveAffirmation.innerText = tempList[0]
}
function choiceMessageReveal(){
    inputOne.classList.remove('hidden')
    submitTwo.classList.remove('hidden')
}
function showChoices(){
  choiceContainer.classList.remove('hidden')
}
function showInput(){
  inputContainer.classList.remove('hidden')
}
function showButton(){
    recieveBtn.classList.remove('hidden')
    textBox.classList.add('hidden')
}
function hideTheBuddha(){
    imageBuddha.classList.add('hidden')
}
function unHideText(){
    textBox.classList.remove('hidden')
}
function unhideClear(){
    clearBtn.classList.remove('hidden')
}
function hideMessage(){
    location.reload()
}
