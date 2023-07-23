//Create variables targeting the relevant DOM elements here👇

//BUTTONS:👇
var affirmationBtn = document.querySelector('.affirmation-option');
var mantraBtn = document.querySelector('.mantra-option');
var receiveMessageBtn = document.querySelector('#receiveButton');
var bellIcon = document.querySelector('img');
var resetFormBtn = document.querySelector('.reset-form-button');

//VIEWS:👇
var messageContent = document.querySelector('.message-content');
var messageText = document.querySelector('#messageText');

//variable to catch radio button selected
var selectedSelfCareOption;

//Add your event listeners here 👇
affirmationBtn.addEventListener('click', function (event) {
  selectedSelfCareOption = 'affirmation';
});
mantraBtn.addEventListener('click', function (event) {
  selectedSelfCareOption = 'mantra';
});
receiveMessageBtn.addEventListener('click', generateMessage);
resetFormBtn.addEventListener('click', resetForm);

//Create your event handlers and other functions here👇
function generateMessage(event) {
  event.preventDefault();
  if (atLeastOneRadio()) {
    hideBell();

    var messageArray = '';
    if (selectedSelfCareOption === 'affirmation') {
      messageArray = affirmations;
    } else {
      messageArray = mantras;
    }

    var randomIndex = getRandomIndex(messageArray);
    var randomMessage = messageArray[randomIndex];
    console.log('random message:', randomMessage);

    messageText.textContent = randomMessage;
  } else {
    console.log('Please select a message type');
  }
}
//Helper Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function hideBell() {
  bellIcon.classList.add('hidden');
  messageContent.classList.remove('hidden');
  resetFormBtn.classList.remove('hidden');
}
function resetForm() {
  bellIcon.classList.remove('hidden');
  messageContent.classList.add('hidden');
  resetFormBtn.classList.add('hidden');

  //clear the radio buttons
  radioButtons = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}
//be sure a radio button is selected
function atLeastOneRadio() {
  var selectedRadios = document.querySelectorAll('input[type=radio]:checked');
  return selectedRadios.length > 0;
}
