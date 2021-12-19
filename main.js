// Selector Variables here ⛷

var meditationImage = document.querySelector('.meditation-img');
var yourMessage = document.querySelector('.your-message');
var messageButton = document.querySelector('#receive-button');
var affirmationRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');
var clearButton = document.querySelector('.clear-btn');
var favoriteButton = document.querySelector('.favorite-btn');
var starButton = document.querySelector('.star-btn');


// Data here ⛷

var affirmations = [
    {text: "I forgive myself and set myself free.", type: "affirmation", isFavorited: false, id: Date.now()},
    {text: "I believe I can be all that I want to be.", type: "affirmation", isFavorited: false, id: Date.now()},
    {text: "I am in the process of becoming the best version of myself.", type: "affirmation", isFavorited: false, id: Date.now()},
    {text: "I choose to be kind to myself and love myself unconditionally.", type: "affirmation", isFavorited: false, id: Date.now()},
    {text: "My possibilities are endless.", type: "affirmation", isFavorited: false, id: Date.now()},
    {text: "I am worthy of my dreams.", type: "affirmation", isFavorited: false, id: Date.now()},
    {text: "I am enough.", type: "affirmation", isFavorited: false, id: Date.now()},
    {text: "I deserve to be healthy and feel good.", type: "affirmation", isFavorited: false, id: Date.now()},
    {text: "I am full of energy and vitality and my mind is calm and peaceful.", type: "affirmation", isFavorited: false, id: Date.now()},
    {text: "Every day I am getting healthier and stronger.", type: "affirmation", isFavorited: false, id: Date.now()},
    {text: "I honor my body by trusting the signals that it sends me.", type: "affirmation", isFavorited: false, id: Date.now()},
    {text: "I manifest perfect health by making smart choices.", type: "affirmation", isFavorited: false, id: Date.now()},
  ];
  var mantras = [
    {text: "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "Don’t let yesterday take up too much of today.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "Every day is a second chance.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "Tell the truth and love everyone.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "I am free from sadness.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "I am enough.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "In the beginning it is you, in the middle it is you and in the end it is you.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "I love myself.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "I am present now.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "Inhale the future, exhale the past.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "This too shall pass.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "Yesterday is not today.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "The only constant is change.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "Onward and upward.", type: "mantra", isFavorited: false, id: Date.now()},
    {text: "I am the sky, the rest is weather.", type: "mantra", isFavorited: false, id: Date.now()},
  ];

var favoriteMessages = [];
var currentMessage;

// Event Listeners here ⛷

affirmationRadio.addEventListener('click', enableReceiveBtn);
mantraRadio.addEventListener('click', enableReceiveBtn);
messageButton.addEventListener('click', pickAMessage);
clearButton.addEventListener('click', clearMessage);

favoriteButton.addEventListener('click', favoriteMessage);


// Event handlers/functions here ⛷

function getRandomMessage(array) {
    return Math.floor(Math.random() * array.length)
};

function pickAMessage() {
    if (affirmationRadio.checked) {
        receiveAffirmation();
    } else if (mantraRadio.checked) {
        receiveMantra();
    }
    showStar();
};

function enableReceiveBtn() {
    messageButton.disabled = false;
}

function disableReceiveBtn() {
    messageButton.disabled = true;
};

function receiveAffirmation() {
    showItem(yourMessage);
    hideItem(meditationImage);
    showItem(clearButton);
    disableReceiveBtn()
    clearRadio();
    randomAffirmation();
    yourMessage.innerText = currentMessage.text;
    console.log(currentMessage);
};

function receiveMantra() {
    showItem(yourMessage);
    hideItem(meditationImage);
    showItem(clearButton);
    disableReceiveBtn()
    clearRadio();
    randomMantra();
    yourMessage.innerText = currentMessage.text;
    console.log(currentMessage);
};

function randomAffirmation() {
    currentMessage = affirmations[getRandomMessage(affirmations)];
}

function randomMantra() {
    currentMessage = mantras[getRandomMessage(mantras)];
}

function clearMessage() {
    hideItem(yourMessage);
    showItem(meditationImage);
    hideItem(clearButton);
    hideItem(starButton);
    clearRadio();
};

function clearRadio() {
    affirmationRadio.checked = false;
    mantraRadio.checked = false;
};

function showItem(selectorVariable) {
    selectorVariable.classList.remove('hidden')
};

function hideItem(selectorVariable) {
    selectorVariable.classList.add('hidden')
};


function showStar() {
    if (currentMessage.isFavorited) {
        showItem(starButton);
    }
};

function favoriteMessage() {
    removeFavorite();
    if (!currentMessage.isFavorited) {
        currentMessage.isFavorited = true;
        favoriteMessages.push(currentMessage);
    } 
    showStar();
}        

function removeFavorite() {
    for (i = 0; i < favoriteMessages.length; i ++) {
        if (favoriteMessages.includes(currentMessage)) {
            currentMessage.isFavorited = false;
            favoriteMessages.splice(i, 1)
        }
    }
}


/* TO DO

- find way to get star to hang out without impacting my message

- find way to remove favorite with same button

- create view favorites button

- create function to move user to favorites page where the contents
of the favoriteMessages array is displayed

- have button to bring user back to main



*/
