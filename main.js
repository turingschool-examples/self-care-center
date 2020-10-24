var affirmationRadio = document.querySelector(".affirmation");
var mantraRadio = document.querySelector(".mantra");
var receiveMessageButton = document.querySelector(".receive-message");
var messageDisplayBox = document.querySelector(".display")
var meditationImage = document.querySelector(".meditation-image")

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
];
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
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
  "I am the sky, the rest is weather.",
];

affirmationRadio.addEventListener('click', generateAffirmationMessage);
mantraRadio.addEventListener('click', generateMantraMessage);
receiveMessageButton.addEventListener('click', displayMessage)
// messageDisplayBox.addEventListener()

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateAffirmationMessage() {
  var currentAffirmation = affirmations[getRandomIndex(affirmations)];
  console.log(currentAffirmation);
}

function generateMantraMessage() {
  var currentMantra = mantras[getRandomIndex(mantras)];
  console.log(currentMantra);
}

function displayMessage() {
  // meditationImage.classList.toggle(".meditation-image")
  if (affirmationRadio) {
    messageDisplayBox.innerHTML = generateAffirmationMessage();
  } else if (mantraRadio) {
    messageDisplayBox.innerHTML = generateMantraMessage();
  }
}

/*
generateAffirmationMessage
randomly select the affirmation from the array of quotes given in the prompt

generateMantraMessage
randomly select the mantra from the array of quotes given in the prompt

displayMessage
remove the bell image
display the generated message from the selection of the radio buttons
will likely have to create new class in CSS for text display

*/
