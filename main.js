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
  "I manifest perfect health by making smart choices."
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
  "I am the sky, the rest is weather."
];
var affirmationBtn = document.querySelector('.affirmation');
var mantraBtn = document.querySelector('.mantra');
var receiveMessageBtn = document.querySelector('.receive-message');
var meditationImage = document.querySelector('svg');
var messageReturn = document.querySelector('h3');
var randomAffirmation = affirmations[getRandomIndex(affirmations)];
var randomMantra = mantras[getRandomIndex(mantras)];
var deleteMessageBtn = document.querySelector('.delete-message')


receiveMessageBtn.addEventListener('click', displayMessage);
deleteMessageBtn.addEventListener('click', deleteMessage)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayMessage() {
  if (affirmationBtn.checked === true || mantraBtn.checked === true) {
    meditationImage.classList.add('hidden');
    messageReturn.classList.remove('hidden');
  }
  if (affirmationBtn.checked === true) {
    messageReturn.innerText = randomAffirmation;
  } else if (mantraBtn.checked === true) {
    messageReturn.innerText = randomMantra;
  }
}

function deleteMessage() {
  if (affirmationBtn.checked === true) {
    for (var i = 0; i < affirmations.length; i++) {
      if (affirmations[i] === randomAffirmation) {
        affirmations.splice(i, 1);
        alert("You won't see this affirmation again!");
      }
    }
  } else if (mantraBtn.checked === true) {
    for (var i = 0; i < mantras.length; i++) {
      if (mantras[i] === randomMantra) {
        mantras.splice(i, 1);
        alert("You won't see this mantra again!");
      }
    }
  }
}
