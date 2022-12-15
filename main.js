var receiveMessageBtn = document.querySelector('#btn-receive-msg');
var affirmationRb = document.querySelector('#rb-affirmation');
var mantraRb = document.querySelector('#rb-mantra');
var messageDisplay = document.querySelector('#message-display');

var affirmations = [
    "All you need is within you right now.",
    "Just be a little bit better than you were yesterday.",
    "Make way for the unprecedented and watch your reality rearrange yourself.",
    "The perfect moment is this one.",
    "You must do the things you think you cannot do.",
    "Good riddance to decisions that don't support self-care, self-value, and self-worth.",
    "You can make someone's life more bearable.",
    "My goals are attainable, and my habits will get me there.",
    "Peace, harmony, and poise govern my mind at all times.",
    "You can try and fail, but you can never fail to try."
];

var mantras = [
    "Progress Not Perfection.",
    "I am exactly where I am supposed to be.",
    "I will have a good day, because it is my choice.",
    "I hold the key to better health through eating better and exercise.",
    "My commitment to myself is unbreakable.",
    "No one can take your joy.",
    "Happiness is a choice, not a condition. I choose to be happy.",
    "Inhale, exhale.",
    "I choose love.",
    "It is all good!"
];

receiveMessageBtn.addEventListener('click', function (event) {
    event.preventDefault();
    
    if(affirmationRb.checked){

    }
});

function getRandomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
}
