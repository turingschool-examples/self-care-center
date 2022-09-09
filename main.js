var radioButtons = document.querySelectorAll('.radio-buttons');
var recieveButton = document.querySelector('#recieve-message-button');
var image = document.querySelector('.meditate-icon');

recieveButton.addEventListener('click', removeImage);

var messageType;

function checkMessageType(){
  for(var i = 0;i<radioButtons.length;i++)
  {
    if(radioButtons[i].checked===true)
    {
      messageType = radioButtons[i].value;
      break;
    }
  }
  console.log(`You selected ${messageType}`);
}

function removeImage(){
  image.className += " hidden";
}
