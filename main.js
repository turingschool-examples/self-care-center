var radioButtons = document.querySelectorAll('.radio-buttons');
var recieveButton = document.querySelector('#recieve-message-button');

recieveButton.addEventListener('click', checkMessageType);

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
