// goal: when user clicks the receive message button, a random message from the list emerges.
// data:
// array: storage of mantra and affirmations
// radio input/value
// event listener
// DOM variable

// questions:
// how do we have the button recieve the input from the radio type?
// is this based on its value?
// how do we connect the affirmation values to the affirmation array?

// create a DOM variable for the recieve message button
var receiveButton = document.querySelector(".receive");
var radioAffirmation = document.querySelector("#affirmation");
var meditationImg = document.querySelector("img");

// create an event listener
receiveButton.addEventListener("click", displayMessage);
radioAffirmation.addEventListener("click", displayMessage);

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function displayMessage() {
  console.log("hello");
  hide(meditationImg);
}

// array objects data model
var affirmations = [
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
    quote: "My possibilities are endless.",
    id: Date.now(),
  },
  {
    quote: "I am worthy of my dreams.",
    id: Date.now(),
  },
  {
    quote: "I am enough.",
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
    quote: "Tell the truth and love everyone.",
    id: Date.now(),
  },
  {
    quote: "I am free from sadness.",
    id: Date.now(),
  },
  {
    quote: "I am enough.",
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
