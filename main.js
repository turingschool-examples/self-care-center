var affirmations = [
  "I forgive myself and set myself free.",
  "I forgive myself and set myself free.",
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
  "Don\`t let yesterday take up too much of today.",
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
// Variables to affect DOM elements here!
var choiceButton = document.querySelector('button')
var selectionValues  = document.querySelectorAll('input[name="man-or-aff"]')
var dynamicDisplayBox = document.querySelector('.message-expression')
choiceButton.addEventListener('click', doThing)


function doThing() {
  var selectedVal;
  for (var value of selectionValues) {
    if (value.checked) {
      selectedVal = value.value;
    }
  }
  if (selectedVal === "mantra")
  dynamicDisplayBox.innerHTML = `<div id="affirm-mantra-styling">${getRandomMantra(mantras)}</div>`
  else 
  dynamicDisplayBox.innerHTML = `<div id="affirm-mantra-styling">${getRandomAffirm(affirmations)}</div>`
}


// function getChoice() {
//   if 
// }



function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
  }
function getRandomAffirm() {
  return affirmations[getRandomIndex(affirmations)]
}

function getRandomMantra() {
  return mantras[getRandomIndex(mantras)]
}