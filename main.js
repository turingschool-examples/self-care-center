// Variables -

var receiveMessageButton = document.querySelector('#receive-message-button')
var textBoxOne = document.querySelector('.textBox1')
var affirmationRadio = document.querySelector('#affirmation-selector')
var mantraRadio = document.querySelector('#mantra-selector')
var textBoxTwo = document.querySelector('.textBox2')
var meditationIcon = document.querySelector('img')
var messageBox = document.querySelector('.message')
var savedMessageSection = document.querySelector('.view-saved-messages')
var saveMessageButton = document.querySelector('#view-saved-messages')
var h2 = document.querySelector('.h2')
var mainPage = document.querySelector('#main-page')
var image = document.querySelector('.img')
var favoriteMessages = document.querySelector('.saved-messages')

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
    }textBoxTwo.innerHTML = `
    <section>
        <p>${message}</p>
        <button class='button-format' id='favorite-button'>Save Message</button>
    </section>`

    var favoriteButton = document.querySelector('#favorite-button')
    console.log(favoriteButton)
    favoriteButton.addEventListener('click', function() {
        saveMessage(message)})
}

function saveMessage(message) {
    savedMessages.push(message)
    }

function returnHome() {
    hide(savedMessageSection)
    show(mainPage)
}

function showSavedMessages() {
    show(savedMessageSection)
    hide(mainPage)
    displaySavedMessages()
    var homeButton = document.querySelector('#home-button')
    homeButton.addEventListener('click', function(){
        returnHome()})
    }

function displaySavedMessages() {
    favoriteMessages.innerHTML = '';
    for (var i = 0; i < savedMessages.length; i++) {
        favoriteMessages.innerHTML += `
        <p>${savedMessages[i]}</p>`
        console.log(savedMessages[i])
        console.log(savedMessages)
    } show(favoriteMessages)
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