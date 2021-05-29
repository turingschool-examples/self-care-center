//Global Variables

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
var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
]

// Query Selectors
var affirmationBtn = document.getElementById('affirmation-input');
var mantraBtn = document.getElementById('mantra-input');
var receiveMessageBtn = document.getElementById('receiveBtn');
var bellIconBox = document.getElementById('bell-box');
var messageDisplayBox = document.getElementById('message-display-box');


// Event Listeners
//on receieve button click, (see event handler)
receiveMessageBtn.addEventListener('click', selectMessage);


// Event Handlers
//look at whether a mantra or affirmation has been selected
//pull from array, display message in display message box.
  // do I want to make a new section that displays the message and hide and unhide?
  // or use inner.html

//Steps:
// on button click.
// decide if mantra or affirmation was choosen
  // if mantra, use random number function to choose random mantra.
  // unhide display section and insert matra text
  // if affirmation -
  // use random number function to choose random affirmation from array
  // unhide display secetion and insert affirmation text

  function selectMessage() {
    if (affirmationBtn.checked) {
      return messageDisplayBox.innerHTLM += `<h3>${affirmations[getRandomIndex(affirmations)]};</h3>`
    } //else if (input.value = "mantra") {
    //   // return mantras[getRandomIndex(mantras)
    // }
     else {
      return "Please choose a mantra or affirmation";
    }
  }

  function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  }
