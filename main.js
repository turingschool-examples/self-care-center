// data model
var affirmations = [
  {
    quote: "I forgive myself and set myself free.",
    id: 0,
  },
  {
    quote: "I forgive myself and set myself free.",
    id: 1,
  },
  {
    quote: "I believe I can be all that I want to be.",
    id: 2,
  },
  {
    quote: "I am in the process of becoming the best version of myself.",
    id: 3,
  },
  {
    quote: "I have the freedom & power to create the life I desire.",
    id: 4,
  },
  {
    quote: "I choose to be kind to myself and love myself unconditionally.",
    id: 5,
  },
  {
    quote: "I am enough.",
    id: 6,
  },
  {
    quote: "I am worthy of my dreams.",
    id: 7,
  },
  {
    quote: "I deserve to be healthy and feel good.",
    id: 8,
  },
  {
    quote: "I am full of energy and vitality and my mind is calm and peaceful.",
    id: 9,
  },
  {
    quote: "Every day I am getting healthier and stronger.",
    id: 10,
  },
  {
    quote: "I honor my body by trusting the signals that it sends me.",
    id: 11,
  },
  {
    quote: "I manifest perfect health by making smart choices.",
    id: 12,
  },
];

var mantras = [
  {
    quote:
      "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    id: 0,
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    id: 2,
  },
  {
    quote: "Every day is a second chance.",
    id: 3,
  },
  {
    quote: "Tell the truth and love everyone",
    id: 4,
  },
  {
    quote: "I am free from sadness.",
    id: 5,
  },
  {
    quote: "I am enough",
    id: 6,
  },
  {
    quote:
      "In the beginning it is you, in the middle it is you and in the end it is you.",
    id: 7,
  },
  {
    quote: "I love myself.",
    id: 8,
  },
  {
    quote: "I am present now.",
    id: 9,
  },
  {
    quote: "Inhale the future, exhale the past.",
    id: 10,
  },
  {
    quote: "This too shall pass.",
    id: 11,
  },
  {
    quote: "Yesterday is not today.",
    id: 12,
  },
  {
    quote: "The only constant is change.",
    id: 13,
  },
  {
    quote: "Onward and upward.",
    id: 14,
  },
  {
    quote: "I am the sky, the rest is weather.",
    id: 15,
  },
];

// DOM variables
var receiveButton = document.querySelector(".receive");
var radioAffirmation = document.querySelector("#affirmation");
var radioMantra = document.querySelector("#mantra");
var meditationImg = document.querySelector("img");
var messageDisplaySection = document.querySelector(".message-display");
var removeButton = document.querySelector(".remove");

// Event Listeners
receiveButton.addEventListener("click", displayMessage);
removeButton.addEventListener("click", deleteMessage);

// random array index
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var mantraMessage;
var affirmationMessage;

function currentMantraMessage() {
  var workingIndex = getRandomIndex(mantras);
  mantraMessage = mantras[workingIndex];
  return mantraMessage;
}

function currentAffirmationMessage() {
  var workingIndex = getRandomIndex(affirmations);
  affirmationMessage = affirmations[workingIndex];
  return affirmationMessage;
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function displayMessage() {
  hide(meditationImg);
  show(removeButton);
  if (radioAffirmation.checked) {
    renderAffirmationMessage();
  } else {
    renderMantraMessage();
    console.log(messageDisplaySection.childNodes[1].id);
  }
}

function renderMantraMessage() {
  currentMantraMessage();
  messageDisplaySection.innerHTML = `
      <section class="display-container" id="${mantraMessage.id}">
      <h3>${mantraMessage.quote}</h3>
      </section>`;
}

function renderAffirmationMessage() {
  currentAffirmationMessage();
  messageDisplaySection.innerHTML = `
        <section class="display-container" id="${affirmationMessage.id}">
        <h3>${affirmationMessage.quote}</h3>
        </section>`;
}

function removeMessage(array) {
  for (let i = 0; i < array.length; i++) {
    if (Number(messageDisplaySection.childNodes[1].id) === array[i].id) {
      array.splice(i, 1);
    }
  }
}

function deleteMessage() {
  if (radioAffirmation.checked) {
    removeMessage(affirmations);
    messageDisplaySection.innerHTML = "";
    alert("This affirmation has been removed");
    hide(removeButton);
  } else {
    removeMessage(mantras);
    messageDisplaySection.innerHTML = "";
    alert("This mantra has been removed");
    hide(removeButton);
  }
}
