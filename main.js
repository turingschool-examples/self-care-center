
var recieveMessageButton = document.querySelector('#receive-message');
var chooseMessageForm = document.querySelector('form');
var messageDisplay = document.querySelector('#message-box');
var darkModeButton = document.querySelector('#darkmode-button');
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
  "Søren Kierkegaard","Jean-Paul Sartre","Epicurus","Seneca the Younger","Gottfried Leibniz", "G.W.F. Hegel", "Rene Descartes"
]

var mantras = [
  "We are too weak to discover the truth by reason alone.",
  "In everything, there is a share of everything.",
  "I can control my passions and emotions if I can understand their nature.",
  "Life must be understood backward. But it must be lived forward.",
  "No one's knowledge here can go beyond one's experience",
  "Entities should not be multiplied unnecessarily."
  "To be is to be perceived.",
  "Whereof one cannot speak, thereof one must be silent.",
]

var mantraAuthors = [
"William of Ockham"
]

var toughies = [
  "The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short.",
  "He who thinks great thoughts, often makes great errors.",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  "Only one man ever understood me, and he didn’t understand me."
  "Things alter for the worse spontaneously, if they be not altered for the better designedly.",
  "I should never die for my beliefs because I might be wrong",
  "I don’t know why we are here, but I’m pretty sure it is not in order to enjoy ourselves"
]

var toughiesAuthors = [

]

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

darkModeButton.addEventListener("click", toggleDarkMode);

recieveMessageButton.addEventListener("click", function(event) {
  var selectedMessageType = new FormData(chooseMessageForm);
  var output = "";
  for (const entry of selectedMessageType) {
    output = entry[1];
  };
  console.log(output);
  if(output === "mantra") {
    messageDisplay.innerText = mantras[getRandomIndex(mantras)];
  } else if(output === "affirmation") {
    messageDisplay.innerText = affirmations[getRandomIndex(affirmations)];
  } else if(output === "tough love") {
  messageDisplay.innerText = toughies[getRandomIndex(toughies)];
}
}, false);



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
  ;
}
