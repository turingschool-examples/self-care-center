// Selector Variables here ⛷

var meditationImage = document.querySelector('.meditation-img');
var yourMessage = document.querySelector('.your-message');
var messageButton = document.querySelector('#receive-button');
var affirmationRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');
var clearButton = document.querySelector('.clear-btn');


// Data here ⛷

var affirmations = [
    {text: "I forgive myself and set myself free.", isFavorited: false, id: Date.now()},
    {text: "I believe I can be all that I want to be.", isFavorited: false, id: Date.now()},
    {text: "I am in the process of becoming the best version of myself.", isFavorited: false, id: Date.now()},
    {text: "I choose to be kind to myself and love myself unconditionally.", isFavorited: false, id: Date.now()},
    {text: "My possibilities are endless.", isFavorited: false, id: Date.now()},
    {text: "I am worthy of my dreams.", isFavorited: false, id: Date.now()},
    {text: "I am enough.", isFavorited: false, id: Date.now()},
    {text: "I deserve to be healthy and feel good.", isFavorited: false, id: Date.now()},
    {text: "I am full of energy and vitality and my mind is calm and peaceful.", isFavorited: false, id: Date.now()},
    {text: "Every day I am getting healthier and stronger.", isFavorited: false, id: Date.now()},
    {text: "I honor my body by trusting the signals that it sends me.", isFavorited: false, id: Date.now()},
    {text: "I manifest perfect health by making smart choices.", isFavorited: false, id: Date.now()},
  ];
  var mantras = [
    {text: "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", isFavorited: false, id: Date.now()},
    {text: "Don’t let yesterday take up too much of today.", isFavorited: false, id: Date.now()},
    {text: "Every day is a second chance.", isFavorited: false, id: Date.now()},
    {text: "Tell the truth and love everyone.", isFavorited: false, id: Date.now()},
    {text: "I am free from sadness.", isFavorited: false, id: Date.now()},
    {text: "I am enough.", isFavorited: false, id: Date.now()},
    {text: "In the beginning it is you, in the middle it is you and in the end it is you.", isFavorited: false, id: Date.now()},
    {text: "I love myself.", isFavorited: false, id: Date.now()},
    {text: "I am present now.", isFavorited: false, id: Date.now()},
    {text: "Inhale the future, exhale the past.", isFavorited: false, id: Date.now()},
    {text: "This too shall pass.", isFavorited: false, id: Date.now()},
    {text: "Yesterday is not today.", isFavorited: false, id: Date.now()},
    {text: "The only constant is change.", isFavorited: false, id: Date.now()},
    {text: "Onward and upward.", isFavorited: false, id: Date.now()},
    {text: "I am the sky, the rest is weather.", isFavorited: false, id: Date.now()},
  ];

var favoriteAffirmations = [];
var favoriteMantras = [];


// Event Listeners here ⛷

affirmationRadio.addEventListener('click', enableReceiveBtn);
mantraRadio.addEventListener('click', enableReceiveBtn);
messageButton.addEventListener('click', pickAMessage);
clearButton.addEventListener('click', clearMessage);


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
    yourMessage.innerText = affirmations[getRandomMessage(affirmations)].text;
};
//yourMessage.innerText = affirmations[getRandomMessage(affirmations).text]

function receiveMantra() {
    showItem(yourMessage);
    hideItem(meditationImage);
    showItem(clearButton);
    disableReceiveBtn()
    clearRadio();
    yourMessage.innerText = mantras[getRandomMessage(mantras)].text;
};

function clearMessage() {
    hideItem(yourMessage);
    showItem(meditationImage);
    hideItem(clearButton);
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





/* Favorite Messages CYOA ~~~~~

- re structure the affirmations & mantra arrays into arrays
of objects, each with a text, isFavorited, and id property

- create favorite button (image of star inside an invisible button)

- when user clicks favorite button (only if isFavorited === false)
    * the button should fill with yellow
    * the isFavorited status of the object should change to true
    * the message should be pushed to either the Mantra or Affirmations favorite array
    * IF ISFAVORITED === TRUE -> 
        - then the button should not be yellow
        - ifFavorited status should change to false
        - the message should be spliced from the Mantra or Affirmations fave array

~~~~~

- create View Favorites button

- create a new HTML section for saved posters view (separate sections for mantras vs
    affirmations??)







*/
