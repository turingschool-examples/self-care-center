//Assigns HTML elements to variables
var radioButtons = document.querySelectorAll('.radio-buttons');
var recieveButton = document.querySelector('#recieve-message-button');
var image = document.querySelector('.meditate-icon');
var outputMessage = document.querySelector('p');

//Adds a listener event to 'recieve message' button
recieveButton.addEventListener('click', retrievesList);

//Global variables to access later from our Data Model
var messageType;
var randomNumber;
var currentMessage;
var currentList;

//Data of affirmation sayings
// var affirmationList =
// ["I forgive myself and set myself free.",
// "I believe I can be all that I want to be.",
// "I am in the process of becoming the best version of myself.",
// "I have the freedom & power to create the life I desire.",
// "I choose to be kind to myself and love myself unconditionally.",
// "My possibilities are endless.",
// "I am worthy of my dreams.",
// "I am enough.",
// "I deserve to be healthy and feel good.",
// "I am full of energy and vitality and my mind is calm and peaceful.",
// "Every day I am getting healthier and stronger.",
// "I honor my body by trusting the signals that it sends me.",
// "I manifest perfect health by making smart choices."];
 var affirmationList = ["A", "B", "C", "D"];
 var mantraList = ["a", "b", "c", "d"];

//Data of mantra sayings
// var mantraList =
// ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
// "Don’t let yesterday take up too much of today.",
// "Every day is a second chance.",
// "Tell the truth and love everyone.",
// "I am free from sadness.",
// "I am enough.",
// "In the beginning it is you, in the middle it is you and in the end it is you.",
// "I love myself.",
// "I am present now.",
// "Inhale the future, exhale the past.",
// "This too shall pass.",
// "Yesterday is not today.",
// "The only constant is change.",
// "Onward and upward.",
// "I am the sky, the rest is weather."];

//Function checks which radio button user selected
function checkMessageType(){
  for(var i = 0;i<radioButtons.length;i++){
    if(radioButtons[i].checked===true){
      messageType = radioButtons[i].value;
      break;
    }
  }
}

//Function sets current list according to the radio button result
//FUTURE NOTE: Refactor this whole function to look more clean when all coding
//logic is finished!
function retrievesList(){
  checkMessageType();
    if(messageType === "affirmation"){
      currentList = affirmationList;

      if(currentList.length === 0){
        currentMessage = "Great job! You meditated through all the affirmations. \n Affirmations will reset now."
        outputMessage.innerText = currentMessage;
        affirmationList = ["A", "B", "C", "D"];
      }

      else {
        render();
        removeElement();
      }

    }


    else if(messageType === "mantra"){
      currentList = mantraList;

      if(currentList.length === 0){
        currentMessage = "Great job! You meditated through all the mantras. \n Mantras will reset now."
        outputMessage.innerText = currentMessage;
      }

      else {
        render();
        removeElement();

      }

    }

}

//Function renders bottom message box by removing meditation image and
//displaying current message of chosen list
function render(){
  image.className = "meditate-icon hidden";
  randomNumber = getRandomInt(currentList.length);
  currentMessage = currentList[randomNumber];
  outputMessage.innerText = currentMessage;

}

function removeElement(){
  currentList.splice(randomNumber,1);
  console.log(`Random number: ${randomNumber}`);
  console.log(currentList);
}

// function repopulateList(){
//
// }

//Function generates a random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
