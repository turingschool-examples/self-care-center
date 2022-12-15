var affirmations = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am worthy of my dreams.",
    "I am enough.",
    "I am full of energy and vitality and my mind is calm and peaceful."
];

var mantras = [
    "Don't let yesterday take up too much of today.",
    "I love myself.",
    "I am present now.",
    "This too shall pass.",
    "Onward and upward."
];

var receiveMessageBtn = document.querySelector('.receive-message-btn');
var affirmationBtn = document.querySelector('.affirmation-button');
var mantraBtn = document.querySelector('.mantra-button');
var message = document.querySelector('.message-box');
var icon = document.querySelector('svg');
var addMessageBtn = document.querySelector('.add-message');
var form = document.querySelector('form');


receiveMessageBtn.addEventListener('click', displayMessage);

function displayMessage() {
    var randomAffirmIndex = Math.floor(Math.random() * affirmations.length);
    var randomMantraIndex = Math.floor(Math.random() * mantras.length);
    icon.classList.add('hidden');
    if (affirmationBtn.checked && !mantraBtn.checked) {
        message.innerHTML = `<p>${affirmations[randomAffirmIndex]}</p>
        <button class="add-message">Add Message</button>`;
    } else if (mantraBtn.checked && !affirmationBtn.checked) {
        message.innerHTML = `<p>${mantras[randomMantraIndex]}</p>
        <button class="add-message">Add Message</button>`;
    } else {
        alert("Please select either affirmation or mantra");
    }
};

addMessageBtn.addEventListener('click', displayForm);

function displayForm() {
    if (affirmations[randomAffirmIndex] || mantras[randomMantraIndex]) {
        message.innerHTML = ` `;
        form.classList.remove('hidden');
    }  
}




