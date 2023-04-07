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

var mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    "Dont let yesterday take up too much of today.",
    'Every day is a second chance.',
    'Tell the truth and love everyone.',
    'I am free from sadness.',
    'I am enough.',
    'In the beginning it is you, in the middle it is you and in the end it is you.',
    'I love myself.',
    'I am present now.',
    'Inhale the future, exhale the past.',
    'This too shall pass.',
    'Yesterday is not today.',
    'The only constant is change.',
    'Onward and upward.',
    'I am the sky, the rest is weather.'
    ];
    
    var affirmations = [
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
    ];

receiveBtn.addEventListener('click', displayMessage)

function displayMessage() {
    buddha.classList.add('hidden');
    message.classList.remove('hidden');
}

function getMessage(messages) {
    var index = Math.floor(Math.random() * messages.length);
    return messages[index];
}

console.log(getMessage(mantras))

