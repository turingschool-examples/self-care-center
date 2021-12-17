//BUTTONS AND INPUTS **
var recieveBtn = document.querySelector('#recieve-button')
var radioAffirmation = document.querySelector('#radio-affirmation')
var radioMantra = document.querySelector('#radio-mantra')

//VARIABLES **
var giveMantra = document.querySelector('#give-message')
var giveAffirmation = document.querySelector('#give-message')
var imageBuddha = document.querySelector('.buddha')

//STORED DATA **
 affirmations = [
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
'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it',
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


//EVENT LISTENERS HERE **
recieveBtn.addEventListener('click', sendMessage)
radioAffirmation.addEventListener('click', showButton)
radioMantra.addEventListener('click', showButton)
//FUNCTIONS AND HANDLERS **
randoMantra = getRandomIndex(mantras)
randoAffirmation = getRandomIndex(affirmations)

function sendMessage(){
hideTheBuddha()
    if (radioMantra.checked){
    giveMantra.innerText = mantras[randoMantra]
  }
    if (radioAffirmation.checked) {
    giveAffirmation.innerText = affirmations[randoAffirmation]
  }
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};
function showButton(){
  recieveBtn.classList.remove('hidden')
}
function hideTheBuddha(){
  imageBuddha.classList.add('hidden')
}
