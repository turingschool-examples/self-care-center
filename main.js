// user selets affirm/matra then presses receive message
// meditation icon is hidden and message chosen is displayes (need hidden class)
// need selectors for radio buttons, receive message, message chose and the meditation image?

// query selectors

var affirmBtn = document.querySelector(".radio-button-A")

var mantraBtn = document.querySelector("radio-button-M")

var receiveMsgBtn = document.querySelector(".receive-msg-btn")

var medImage = document.querySelector(".meditation-image")

var message = document.querySelector(".message hidden")



// event listeners

receiveMsgBtn.addEventListener("click", displayRandomMessage)



// functions/event handlers

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function displayRandomMessage() {
    var affirmMsg = affirmations[getRandomIndex(affirmations)]

    var mantraMsg = mantras[getRandomIndex(mantras)]

    if (affirmMsg.checked) {
        message.innerText = affirmMsg
    } else if (mantraMsg.checked) {
        message.innerText = mantraMsg
    }
    hideImage()
    unhideMsg()
}

function hideImage() {
    medImage.classList.add("hidden")
}

function unhideMsg() {
    message.classList.remove('hidden')
}