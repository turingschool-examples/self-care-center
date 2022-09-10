var radioButtons = document.querySelectorAll('.radio-buttons');
var recieveButton = document.querySelector('#recieve-message-button');
var image = document.querySelector('.meditate-icon');
var outputMessage = document.querySelector('p');

recieveButton.addEventListener('click', updateMessageBox);

var messageType;
var randomNumber;
var currentMessage;
var currentList;
var affirmationList = ["I am free", "I am good", "I am smart"];
var mantraList = ["Tell the truth", "I am happy", "I am enough"];

function checkMessageType(){
  for(var i = 0;i<radioButtons.length;i++){
    if(radioButtons[i].checked===true){
      messageType = radioButtons[i].value;
      break;
    }
  }
}

function updateMessageBox(){
  checkMessageType();
  console.log(`You selected ${messageType}`);

  if(messageType === "affirmation"){
    currentList = affirmationList;
    render();

  }
  else if(messageType === "mantra"){
    currentList = mantraList;
    render();
  }
}

function render(){
  image.className = "meditate-icon hidden";
  randomNumber = getRandomInt(currentList.length);
  currentMessage = currentList[randomNumber];
  outputMessage.innerText = currentMessage;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
