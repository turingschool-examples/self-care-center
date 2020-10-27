
var recieveMessageButton = document.querySelector('#receive-message');
var chooseMessageForm = document.querySelector('form');
var darkModeButton = document.querySelector('#darkmode-button');

var messageDisplay = document.querySelector('#message-box');
var page = document.querySelector('html');


var affirmations = [
  "The function of prayer is not to influence God, but rather to change the nature of the one who prays",
  "[I] am condemned to be free",
  "The greater the difficulty, the more glory in surmounting it.",
  "Even while they teach, men learn.",
  "We live in the best of all possible worlds.",
  "What is rational is actual and what is actual is rational",
  "I think therefore I am",
]

var affirmationsAuthors = [
  "Søren Kierkegaard",
  "Jean-Paul Sartre",
  "Epicurus",
  "Seneca the Younger",
  "Gottfried Leibniz",
  "G.W.F. Hegel",
  "Rene Descartes"
]

var mantras = [
  "We are too weak to discover the truth by reason alone.",
  "In everything, there is a share of everything.",
  "I can control my passions and emotions if I can understand their nature.",
  "Life must be understood backward. But it must be lived forward.",
  "My knowledge here cannot go beyond my experience",
  "Entities should not be multiplied unnecessarily.",
  "To be is to be perceived.",
  "Whereof one cannot speak, thereof one must be silent.",
]

var mantrasAuthors = [
  "St. Augustine",
  "Anaxagoras",
  "Spinoza",
  "Søren Kierkegaard",
  "John Locke",
  "William of Ockham",
  "George Berkeley",
  "Ludwig Wittgenstein"
]

var toughies = [
  "The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short.",
  "He who thinks great thoughts, often makes great errors.",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  "Only one man ever understood me, and he didn’t understand me.",
  "Things alter for the worse spontaneously, if they be not altered for the better designedly.",
  "I should never die for my beliefs because I might be wrong",
  "I don’t know why we are here, but I’m pretty sure it is not in order to enjoy ourselves"
]

var toughiesAuthors = [
  "Thomas Hobbes",
  "Martin Heidegger",
  "Aristotle",
  "G.W.F. Hegel",
  "Francis Bacon",
  "Bertrand Russell",
  "Ludwig Wittgenstein"
]

var currentMessage = "";
var currentAuthor = "";

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

darkModeButton.addEventListener("click", toggleDarkMode);

messageDisplay.addEventListener("click", displayAuthor);

recieveMessageButton.addEventListener("click", function(event) {
  var selectedMessageType = new FormData(chooseMessageForm);
  var output = "";
  for (const entry of selectedMessageType) {
    output = entry[1];
  };
  if(output === "mantra") {
    currentPoster = mantras[getRandomIndex(mantras)];
    currentAuthor = affirmationsAuthors[getRandomIndex(mantras)];
  } else if(output === "affirmation") {
    currentPoster = affirmations[getRandomIndex(affirmations)];
    currentAuthor = mantrasAuthors[getRandomIndex(affirmations)];
  } else if(output === "tough love") {
  currentPoster = toughies[getRandomIndex(toughies)];
  currentAuthor = toughiesAuthors[getRandomIndex(toughies)];
  }
  displayMessage();
}, false);

function displayMessage() {
  messageDisplay.innerHTML = `<p>${currentPoster}</p>`;
}

function displayAuthor() {
 messageDisplay.innerHTML =
 `<p>${currentPoster}</p> <h3 id="author"> - ${currentAuthor}<h3>`;
}

function toggleDarkMode() {
  darkModeButton.classList.toggle('lightmode-button');
  recieveMessageButton.classList.toggle('receive-message-dark');
  messageDisplay.classList.toggle('box-dark');
  chooseMessageForm.classList.toggle('box-dark');
  page.classList.toggle('html-dark');
  if(darkModeButton.innerText === "Dark Mode") {
    darkModeButton.innerText = "Light Mode";
  } else {
    darkModeButton.innerText = "Dark Mode";
  }
}
