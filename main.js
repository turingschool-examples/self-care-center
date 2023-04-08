var affirmationBox = document.querySelector('affirmation');
var mantraBox = document.querySelector('mantras');
var button = document.querySelector('.button');
var image = document.querySelector('img'); 
var radioButton = document.querySelectorAll('input[name="which-message"]:checked').value;
var message = document.querySelector('span');

button.addEventListener('click', createMessage);
button2.addEventListener('click', clearMessage);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function createMessage() {
    valid = true;
    image.classList.add('hidden');
    message.classList.remove('hidden');
    console.log(document.getElementById('affirmation').checked)
    console.log((document.getElementById('mantra').checked))
    if (document.getElementById('affirmation').checked) {
        console.log(affirmations[getRandomIndex(affirmations)])
        message.innerText = affirmations[getRandomIndex(affirmations)]
    } else if (document.getElementById('mantra').checked) { 
        message.innerText = mantras[getRandomIndex(mantras)]
    } else {
        valid = false;   
        message.innerText = "Please seleced an affirmation or mantra!"
    } 
}






