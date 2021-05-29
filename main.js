affirmations = [
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
mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don'\t let yesterday take up too much of today.",
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


// eventLister added to check boxes, id Mantra will select a message from
//the mantra data list. The id affirmations will select a message from the
// affirmation list
// Our Data model will be savedMessages. Our global varible will be currentMesage

// Varibles
var recieveBtn = document.querySelector('.recieve-message');
var affirmationCheck = document.getElementById('affirmation');
var mantraCheck = document.getElementById('mantra');
var bellImg = document.querySelector('.meditation-bell');
var messageDisplay = document.querySelector('.print-message');
var checkBoxesClass = document.querySelector('.checkbox');
var uncheckedBox = document.getElementById('unchecked-box');
var inputElement = document.querySelector('.circle-btn');
var form = document.querySelector('form');
var displayMessages = [];
var currentMessage ="";


function getRandomIndex(array) { // this is for getting a random mantra or affirmation
  return Math.floor(Math.random() * array.length);
}

function checkBoxes() {
  var messageChoice = document.getElementsByName('message-choice');
  var messageVar = "";
  for (var i = 0; i<messageChoice.length; i++){
    if(messageChoice[i].checked) {
        messageVar = messageChoice[i].value;
        console.log(messageVar);
        }
      }
      if (messageVar === 'affirmation') {
        currentMessage = affirmations[getRandomIndex(affirmations)];
      } else {
      currentMessage = mantras[getRandomIndex(mantras)];
    }
    messageDisplay.innerText = currentMessage
};


recieveBtn.addEventListener('click', displayMessage);
//show message function
function displayMessage(){
  messageDisplay.classList.remove("hidden");
  bellImg.classList.add("hidden");
  checkBoxes();
}
// function deleteMessage(){
//
// }
