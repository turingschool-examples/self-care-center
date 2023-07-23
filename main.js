//Create variables targeting the relevant DOM elements here👇

//BUTTONS:👇
var affirmationBtn = document.querySelector('.affirmation-option');
var mantraBtn = document.querySelector('.mantra-option');
var receiveMessageBtn = document.querySelector('#receiveButton');
var bellIcon = document.querySelector('img');
var resetFormBtn = document.querySelector('.reset-form-button');

//MESSAGE BOX:👇
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

    messageText.textContent = randomMessage;
  }
}
//Helper Functions
//Random index function
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//toggle 'hidden' classList function
function toggleClass(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('hidden');
  }
}

var msgAreaElements = [bellIcon, messageContent, resetFormBtn];

function hideBell() {
  toggleClass(msgAreaElements);
}

function resetForm() {
  toggleClass(msgAreaElements);

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
