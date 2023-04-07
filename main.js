// Goal: When the user clicks on the receive message button, the corresponding mantra or affirmation will display in place of the meditation icon.

// Steps:
    // Make a function that returns a random index.
    // Make a function that checks to see if the mantra or affirmation selector is picked, and then uses the random index function to pick a mantra or affirmation.
    // Make an event listener that responds to click.
    // update HTML to hide the buddha icon and display text
    // update CSS to style text. 

// make a variable that accesses buddha box
// make variable that accesses message

var buddha = document.querySelector('.buddha-icon');
var message = document.querySelector('.message');
var receiveBtn = document.querySelector('.receive-btn');

receiveBtn.addEventListener('click', displayMessage)

function displayMessage() {
    buddha.classList.add('hidden');
    message.classList.remove('hidden');
}