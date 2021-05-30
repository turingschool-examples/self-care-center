
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
]

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
]


// query selector variables go here 👇
var affirmationBtn = document.querySelector('#affirmation');
var dontLikeMessageBtn = document.querySelector('.remove-message-from-array');
var mantraBtn = document.querySelector('#mantra');
var receiveMessageBtn = document.querySelector('.receive-message');



var displayedMessage = document.querySelector('.new-message');
var meditationImage = document.querySelector('.meditation-image');




// event listeners go here 👇
dontLikeMessageBtn.addEventListener('click', deleteMessage);
receiveMessageBtn.addEventListener('click', makeMessage);




// functions and event handlers go here 👇

function makeMessage(e) {
  e.preventDefault()
  if (affirmationBtn.checked) {
    displayedMessage.innerText = affirmations[randomMessage(affirmations)]
  } else if (mantraBtn.checked) {
    displayedMessage.innerText = mantras[randomMessage(mantras)]
  }
  hideMeditationImage()
  showMessage()
  showDislikeButton()
};

function deleteMessage() {
  var dislikeMessage = makeMessage.innerText

  for (var i = 0; i < affirmations.length; i++) {
    if (affirmations[i] === dislikeMessage) {
    affirmations.splice(i, 1);
    }
  }
  for (var i = 0; i < mantras.length; i++) {
    if (mantras[i] === dislikeMessage) {
    mantras.splice(i, 1);
    }
  }
  showMeditationImage()
  hideMessage()
  hideDislikeButton()

  alert(`We apologize for the phrase.  Peace be with you.`)
};

function showDislikeButton() {
  dontLikeMessageBtn.classList.remove("hidden")
};

function hideDislikeButton() {
  dontLikeMessageBtn.classList.add("hidden")
};

function showMessage() {
  displayedMessage.classList.remove("hidden")
};

function hideMessage() {
  displayedMessage.classList.add("hidden")
};

function showMeditationImage() {
  meditationImage.classList.remove('hidden')
};

function hideMeditationImage() {
  meditationImage.classList.add('hidden')
};

function randomMessage(array) {
  return Math.floor(Math.random() * array.length)
};
