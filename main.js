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
var affirmationBtn2 = document.querySelector('.affirmation-button-2');
var mantraBtn = document.querySelector('.mantra-button');
var mantraBtn2 = document.querySelector('.mantra-button-2');
var message = document.querySelector('.message-box');
var icon = document.querySelector('svg');
var addMessageBtn = document.querySelector('.add-message');
var submitBtn = document.querySelector('.submit');
var textArea = document.querySelector('.message-input');

receiveMessageBtn.addEventListener('click', displayMessage);

function displayMessage() {
    var randomAffirmIndex = Math.floor(Math.random() * affirmations.length);
    var randomMantraIndex = Math.floor(Math.random() * mantras.length);
    icon.classList.add('hidden');
    if (affirmationBtn.checked) {
        message.innerHTML = `<p>${affirmations[randomAffirmIndex]}</p>
        <button class="add-message">Add Message</button>`;
    } else if (mantraBtn.checked) {
        message.innerHTML = `<p>${mantras[randomMantraIndex]}</p>
        <button class="add-message">Add Message</button>`;
    } else {
        alert("Please select either affirmation or mantra");
    }
};

addMessageBtn.addEventListener('click', displayForm);

function displayForm() {
    message.innerHTML = ' ';
    message.innerHTML = `
        <form>
            <input type="radio" name="option" class="affirmation-button-2"/>
            <label for="affirmation"><em>affirmation</em></label><br>
            <input type="radio" name="option" class="mantra-button-2"/>
            <label for="mantra" class=mantra-option-2><em>mantra</em></label><br>
            <textarea type="text" class="message-input"></textarea><br>
            <button class="submit">Submit</button>
        </form>
        `;
    icon.classList.add('hidden');
};

submitBtn.addEventListener('click', addMessageToList);

function addMessageToList(event) {
    event.preventDefault();
    displayForm();
    if (affirmationBtn2.checked && textArea.value) {
        affirmations.push(`${textArea.value}`);
        message.innerHTML = `${textArea.value}`;
        icon.classList.add('hidden');
    } else if (mantraBtn2.checked && textArea.value) {
        mantras.push(textArea.value);
        message.innerHTML = `${textArea.value}`
    } else {
        alert("Please select either affirmation or mantra, and input message");
    }
};






