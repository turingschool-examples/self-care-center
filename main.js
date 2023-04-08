var affirmationBox = document.getElementById('affirmation');
var mantraBox = document.getElementById('mantra');
var messageButton = document.querySelector('.button');
var image = document.querySelector('img'); 
var message = document.querySelector('span');
var clearButton = document.querySelector('.button2');

messageButton.addEventListener('click', createMessage);
clearButton.addEventListener('click', clearMessage);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
};

function createMessage() {
    valid = true;
    image.classList.add('hidden');
    message.classList.remove('hidden');
    if (affirmationBox.checked) {
        message.innerText = affirmations[getRandomIndex(affirmations)]
    } else if (mantraBox.checked) { 
        message.innerText = mantras[getRandomIndex(mantras)]
    } else {
        valid = false;   
        message.innerText = "Please select an affirmation or mantra!!!!!"
    } 
    clearButton.classList.remove('hidden');
}
    
function clearMessage() {
    image.classList.remove('hidden');
    message.classList.add('hidden');
    clearButton.classList.add('hidden');
    }
    
    
    
   

