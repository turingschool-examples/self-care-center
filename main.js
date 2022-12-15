// Variables -

var receiveMessageButton = document.querySelector('button')

var affirmationRadio = document.querySelector('#affirmation-selector')
var mantraRadio = document.querySelector('#mantra-selector')
var textBoxTwo = document.querySelector('.textBox2')
var meditationIcon = document.querySelector('img')
var messageBox = document.querySelector('.message')
var favoriteButton = document.querySelector('.favoriteButton')

var message;

var savedMessages= [];


// Event Listeners -

receiveMessageButton.addEventListener('click', function() {
    displayMessage()
})

favoriteButton.addEventListener('click', saveMessage())


// Event Handlers -

function displayMessage() {
    if (affirmationRadio.checked === true) {
        message = affirmations[getRandomIndex(affirmations)];
        console.log(message)
        textBoxTwo.innerHTML = `
        <section>
            <p>${message}</p>
            <button class='favorite-button'>Save Message</button>
        </section>`
    } else if (mantraRadio.checked === true) {
        message = mantras[getRandomIndex(mantras)];
        textBoxTwo.innerHTML = `
        <section>
            <p>${message}</p>
            <button class='favorite-button'>Save Message</button>
        </section>`
    } else {
        message = 'Please select a message option!'
        textBoxTwo.innerHTML = `
        <p>${message}</p>`
    }
}

function saveButton(message) {
    savedMessages.push(message)
}

// Misc. Functions -

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}