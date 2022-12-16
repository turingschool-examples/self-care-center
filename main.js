// Variables -

var receiveMessageButton = document.querySelector('#receive-message-button')
var textBoxOne = document.querySelector('.textBox1')
var affirmationRadio = document.querySelector('#affirmation-selector')
var mantraRadio = document.querySelector('#mantra-selector')
var textBoxTwo = document.querySelector('.textBox2')
var meditationIcon = document.querySelector('img')
var messageBox = document.querySelector('.message')
var savedMessageSection = document.querySelector('.saved-messages')
var saveMessageButton = document.querySelector('#view-saved-messages')
var h2 = document.querySelector('.h2')
var mainPage = document.querySelector('#main-page')

var message;

var savedMessages= [];


// Event Listeners -

receiveMessageButton.addEventListener('click', function() {
    displayMessage()
})

saveMessageButton.addEventListener('click', showSavedMessages)

// Event Handlers -

function displayMessage() {
    if (affirmationRadio.checked === true) {
        message = affirmations[getRandomIndex(affirmations)];
    } else if (mantraRadio.checked === true) {
        message = mantras[getRandomIndex(mantras)];
    } else {
        message = 'Please select a message option!'
        textBoxTwo.innerHTML = `
        <p>${message}</p>`
        return
    } textBoxTwo.innerHTML = `
    <section>
        <p>${message}</p>
        <button class='button-format'>Save Message</button>
    </section>`

    var favoriteButton = document.querySelector('.favorite-button')
    console.log(favoriteButton)
    favoriteButton.addEventListener('click', function() {
        saveMessage(message)})
}

function saveMessage(message) {
    savedMessages.push(message)
}

var image = document.querySelector('.img')

function showSavedMessages() {
    show(savedMessageSection)
    hide(mainPage)
}

// Misc. Functions -

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function show(element) {
    element.classList.remove('hidden')
}

function hide(element) {
    element.classList.add('hidden')
}