var affirmations = ["I forgive myself and set myself free.", 
"I believe I can be all that I want to be.", 
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.", 
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.", 
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."];

var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.", 
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."];

//query selectors

var affirmationButton = document.querySelector('.affirmation');
var mantraButton = document.querySelector('.mantra');
var receiveMessageButton = document.querySelector('.receive-message');
var clearMessageButton = document.querySelector('.clear-message');
var messageText = document.querySelector('.message-text');
var image = document.querySelector('.image');


//event listeners

receiveMessageButton.addEventListener('click', returnMessage);
// mantraButton.addEventListener('click', unclickAffirmation);

//event handlers

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function returnMessage() {
    event.preventDefault();
    image.classList.add('hidden');
    messageText.classList.remove('hidden');
    if (!affirmationButton.checked && !mantraButton.checked){
        alert('Please select a message type!')
        messageText.innerText = 'Please select "affirmation" OR "mantra"!'
    }else if (affirmationButton.checked) {
        messageText.innerText = affirmations[randomIndex(affirmations)];
        receiveMessageButton.classList.add('hidden');
        clearMessageButton.classList.remove('hidden');   
    }else if (mantraButton.checked) {
        messageText.innerText = mantras[randomIndex(mantras)];
        receiveMessageButton.classList.add('hidden');
        clearMessageButton.classList.remove('hidden');
    };
    affirmationButton.checked = false;
    mantraButton.checked = false;
};

//pseudo
//when a user selects a message type, that information should be passed to a function that iterates through it's corresponding array and returns an element.
//the value of the innerText of the H2 element (.message) in the message container should be reassigned to the value that is returned from the array
//when the 'receive message' button is clicked the hidden class needs to be applied to the image, and the class hidden needs to be removed from the message.
