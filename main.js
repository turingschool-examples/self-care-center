//Create variables targeting the relevant DOM elements here👇

//BUTTONS:👇
//Radio buttons
var affirmationBtn = document.querySelector('.affirmation-option');
var mantraBtn = document.querySelector('.mantra-option');
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
  selectedSelfCareOption = 'affirmation';
});
mantraBtn.addEventListener('click', function (event) {
  selectedSelfCareOption = 'mantra';
});
receiveMessageBtn.addEventListener('click', generateMessage);

//Create your event handlers and other functions here👇

function generateMessage(event) {
  event.preventDefault();
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
}
function hideBell() {
  bellIcon.classList.add('hidden');
  messageContent.classList.remove('hidden');
}

///////ITERATION Error Handling & Clear Button
//1. User should not be able to click the "Recieve Message" button unless they have selected a message option
//2. The user can click a clear button which clears the page of any message
//add a Clear Message button to the form
//function resetMessage()
//conditional - if messageText.classList=visible
//messageText.textContent = '' and bell is visible
//else - message is already hidden

//3. User should only be able to click the clear button if a message is visible
//4. When the clear button is clicked and the message is removed, the image of the bell should re-appear
//5. If you've added other buttons or inputs, be sure to add some error handling for them as well.

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
