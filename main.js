//Create variables targeting the relevant DOM elements here👇

//BUTTONS:👇
//Radio button to select affirmation
var affirmationBtn = document.querySelector('.affirmation-option');
//Radio button to select mantra
var mantraBtn = document.querySelector('.mantra-option');
//Receive message
var receiveMessageBtn = document.querySelector('#receiveButton');
var bellIcon = document.querySelector('img');

//VIEWS:👇
//Box with message should toggle between showing the icon and showing the message.
var messageContent = document.querySelector('.message-content');
var messageText = document.querySelector('#messageText');

//Starter variables, functions?

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//variable to catch radio button selected
var selectedSelfCareOption;

//Add your event listeners here 👇
affirmationBtn.addEventListener('click', function (event) {
  //when affirmation button is clicked - pass 'affirmation' on to "receive message" button function
  selectedSelfCareOption = 'affirmation';
});
mantraBtn.addEventListener('click', function (event) {
  //when mantra stereo button is clicked - pass 'mantra' on to "receive message" button function
  selectedSelfCareOption = 'mantra';
});
receiveMessageBtn.addEventListener('click', generateMessage);

//Create your event handlers and other functions here👇

function generateMessage(event) {
  //depending on which stereo button was selected
  //conditional if affirmation = affirmation array, else mantra array
  // declare variable for the message array, either affirmation or mantra
  //get a random index number from the respective array
  event.preventDefault();
  hideBell();
  messageContent.classList.remove('hidden');

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
}
function hideBell() {
  bellIcon.classList.add('hidden');
}
//clear the textMessage & reshow the svg icon
//Sample from Holiday Card Generator
// function resetForm() {
//     toInput.value = '';
//     fromInput.value = '';
//     titleInput.value = '';
//     bodyInput.value = '';
//   }

//check for valid input
//Sample from Holiday Card Generator
// function checkValidInputs() {
//     return toInput.value && fromInput.value && titleInput.value && bodyInput.value;
//   }
