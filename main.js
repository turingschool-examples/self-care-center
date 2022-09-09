var radioButtons = document.querySelectorAll('.radio-buttons');
var recieveButton = document.querySelector('#recieve-message-button');
var image = document.querySelector('.meditate-icon');
var outputMessage = document.querySelector('p');

recieveButton.addEventListener('click', updateMessageBox);

var messageType;
var affirmationList = ["I am free", "I am good", "I am smart"];

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
  image.className += " hidden";
  outputMessage.innerText = affirmationList[0];
}
