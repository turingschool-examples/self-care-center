var radioButtons = document.querySelectorAll('.radio-buttons');
var recieveButton = document.querySelector('#recieve-message-button');
var image = document.querySelector('.meditate-icon');
var outputMessage = document.querySelector('p');

recieveButton.addEventListener('click', updateMessageBox);

var messageType;
var randomNumber;
var currentMessage;
var affirmationList = ["I am free", "I am good", "I am smart"];
var mantraList = ["Tell the truth", "I am happy", "I am enough"];

var affirmationLength = affirmationList.length;
var mantraLength = mantraList.length;

function checkMessageType(){
  for(var i = 0;i<radioButtons.length;i++){
    if(radioButtons[i].checked===true){
      messageType = radioButtons[i].value;
      break;
    }
  }
  console.log(`You selected ${messageType}`);
}

function updateMessageBox(){
  image.className = "meditate-icon hidden";
  randomNumber = getRandomInt(affirmationLength);
  currentMessage = mantraList[randomNumber]
  outputMessage.innerText = currentMessage;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
