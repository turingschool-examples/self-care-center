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
var deleteMessageBtn = document.querySelector('.delete-message');
var displayedAffirmationMessages = [];
var displayedMantraMessages = [];
var currentMessage ="";

recieveBtn.addEventListener('click', displayMessage);
deleteMessageBtn.addEventListener('click', deleteMessage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var messageVar = "";

function checkBoxes() {
  var messageChoice = document.getElementsByName('message-choice'); // this choices b/w the affirmation or mantra box
  // var messageVar = "";

    for (var i = 0; i<messageChoice.length; i++){
      if(messageChoice[i].checked) {
          messageVar = messageChoice[i].value;
          }

          if (messageVar === 'affirmation') {
            currentMessage = affirmations[getRandomIndex(affirmations)];

              if (!displayedAffirmationMessages.includes(currentMessage)) {
                console.log('current message before push', currentMessage)
                displayedAffirmationMessages.push(currentMessage);
                return messageDisplay.innerText = currentMessage
              } else if (displayedAffirmationMessages.includes(currentMessage)) {
                  if (displayedAffirmationMessages.length < affirmations.length) {
                    currentMessage = affirmations[getRandomIndex(affirmations)];
                    console.log('current message reassignment', currentMessage)
                    displayedAffirmationMessages.push(currentMessage);
                    return messageDisplay.innerText = ` hitting a double${currentMessage}`
                  } else if (displayedAffirmationMessages.length >= affirmations.length) {
                    displayedAffirmationMessages = [];
                    console.log('should now be empty', displayedAffirmationMessages);
                    currentMessage = 'Have displayed all the Affirmation Messages, restarting loop now.'
                  }return messageDisplay.innerText = currentMessage;
              }
        } else if (messageVar === 'mantra') {
            currentMessage = mantras[getRandomIndex(mantras)];
            if (!displayedMantraMessages.includes(currentMessage)){
                displayedMantraMessages.push(currentMessage);
                return messageDisplay.innerText = currentMessage
          } else if (displayedMantraMessages.includes(currentMessage)){
                if (displayedMantraMessages.length < mantras.length) {
                    currentMessage = mantras[getRandomIndex(mantras)];
                    displayedMantraMessages.push(currentMessage);
                    return messageDisplay.innerText = currentMessage;
              } else if (displayedMantraMessages.length >= mantras.length) {
                    displayedMantraMessages = [];
                    currentMessage = 'Have displayed all the Mantra Messages, restarting loop now';
                    return messageDisplay.innerText = currentMessage;
                    }
                  }
                }
            }
      };



function displayMessage(){
  messageDisplay.classList.remove("hidden");
  deleteMessageBtn.classList.remove("hidden");
  bellImg.classList.add("hidden");
  checkBoxes();
}



function deleteMessage(){
  if (messageVar === 'affirmation') {
    for (var i = 0; i<affirmations.length; i++){
      if (affirmations[i].includes(currentMessage)) {
        affirmations.splice(i, 1);
        console.log('affirmations', affirmations)
      }
    }
  } else if (messageVar === 'mantra') {
      for (var i = 0; i<mantras.length; i++) {
        if( mantras[i].includes(currentMessage)) {
          mantras.splice(i, 1)
          console.log('mantras', mantras);
        }
      }
  }
  messageDisplay.innerText = `The message:
                            (${currentMessage})
                            has been deleted`;
}















//ddd
