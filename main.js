var selectionButton = document.querySelector('.message-button');
var receiveButton = document.querySelector('.receive-button')
var messageArea = document.querySelector('#message-box')

var currentMessage;

receiveButton.addEventListener('click', receiveMessage)

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  };


function receiveMessage(event) {
    event.preventDefault()
    if (selectionButton.checked === true) {
    var randomAffirmation = getRandomIndex(affirmations)
    currentMessage = affirmations[randomAffirmation]
    } else if (selectionButton.checked === false) {
    var randomMantra = getRandomIndex(mantras)
    currentMessage = mantras[randomMantra]   
    }
    messageArea.innerHTML = `<p>${currentMessage}</p>` 
}

function deleteMessage() {

}

// User can delete a message
// Add the ability to delete a messge (ie: when a message shows up, show a button that says “I don’t like this messge” (or something similar), and remove it from the list so that it will not show up any more. Make sure to alert the user in some way that the message has been removed.




