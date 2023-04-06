// DOM variables
var receiveButton = document.querySelector(".receive");
var radioAffirmation = document.querySelector("#affirmation");
var radioMantra = document.querySelector("#mantra");
var meditationImg = document.querySelector("img");
var messageDisplaySection = document.querySelector(".message-display");

// Event Listeners
receiveButton.addEventListener("click", displayMessage);

// random array index
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayMessage() {
  if (radioAffirmation.checked) {
    renderAffirmationMessage();
  } else {
    renderMantraMessage();
  }
}

function renderMantraMessage() {
  hide(meditationImg);
  for (var i = 0; i < affirmations.length; i++) {
    messageDisplaySection.innerHTML = `
      <section class="display-container">
      <h3>${mantras[getRandomIndex(mantras)].quote}</h3>
      </section>`;
  }
}

function renderAffirmationMessage() {
  hide(meditationImg);
  for (var i = 0; i < affirmations.length; i++) {
    messageDisplaySection.innerHTML = `
    <section class="display-container">
    <h3>${affirmations[getRandomIndex(affirmations)].quote}</h3>
    </section>`;
  }
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

// data model
var affirmations = [
  {
    quote: "I forgive myself and set myself free.",
    id: Date.now(),
  },
  {
    quote: "I forgive myself and set myself free.",
    id: Date.now(),
  },
  {
    quote: "I believe I can be all that I want to be.",
    id: Date.now(),
  },
  {
    quote: "I am in the process of becoming the best version of myself.",
    id: Date.now(),
  },
  {
    quote: "I have the freedom & power to create the life I desire.",
    id: Date.now(),
  },
  {
    quote: "I choose to be kind to myself and love myself unconditionally.",
    id: Date.now(),
  },
  {
    quote: "I am enough.",
    id: Date.now(),
  },
  {
    quote: "I am worthy of my dreams.",
    id: Date.now(),
  },
  {
    quote: "I deserve to be healthy and feel good.",
    id: Date.now(),
  },
  {
    quote: "I am full of energy and vitality and my mind is calm and peaceful.",
    id: Date.now(),
  },
  {
    quote: "Every day I am getting healthier and stronger.",
    id: Date.now(),
  },
  {
    quote: "I honor my body by trusting the signals that it sends me.",
    id: Date.now(),
  },
  {
    quote: "I manifest perfect health by making smart choices.",
    id: Date.now(),
  },
];

var mantras = [
  {
    quote:
      "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    id: Date.now(),
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    id: Date.now(),
  },
  {
    quote: "Every day is a second chance.",
    id: Date.now(),
  },
  {
    quote: "Tell the truth and love everyone",
    id: Date.now(),
  },
  {
    quote: "I am free from sadness.",
    id: Date.now(),
  },
  {
    quote: "I am enough",
    id: Date.now(),
  },
  {
    quote:
      "In the beginning it is you, in the middle it is you and in the end it is you.",
    id: Date.now(),
  },
  {
    quote: "I love myself.",
    id: Date.now(),
  },
  {
    quote: "I am present now.",
    id: Date.now(),
  },
  {
    quote: "Inhale the future, exhale the past.",
    id: Date.now(),
  },
  {
    quote: "This too shall pass.",
    id: Date.now(),
  },
  {
    quote: "Yesterday is not today.",
    id: Date.now(),
  },
  {
    quote: "The only constant is change.",
    id: Date.now(),
  },
  {
    quote: "Onward and upward.",
    id: Date.now(),
  },
  {
    quote: "I am the sky, the rest is weather.",
    id: Date.now(),
  },
];
