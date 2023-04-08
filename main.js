//Data Model + Variables
var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather"];

var affirmations = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."];

//Query Selectors
var generateMessageButton = document.querySelector('#generate-new-message-button');
var affirmationCheckbox = document.querySelector('#affirmation');
var mantraCheckbox = document.querySelector('#mantra');
var messageDisplayBox = document.querySelector('#display-message-box')
var img = document.querySelector('#meditation-pic')
var message = document.querySelector('.message')

//Event Listeners
generateMessageButton.addEventListener('click', function (event) {
  event.preventDefault()
  displayRandomMessage()
})

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayRandomMessage() {
  img.classList.add('hidden')
  message.classList.remove('hidden')
  if (affirmationCheckbox.checked) {
    message.innerText = affirmations[getRandomIndex(affirmations)]
  } else {
    message.innerText = mantras[getRandomIndex(mantras)]
  }
}

//add event listener to create message button -- click, invoke funtion to unhide user message form -- var for button
//add event listener for add message button -- click, invokes function that  -saves message to correct array -displays message in message box(make this a seperate function?) -- var for button, input message, and userAffirmation check and mantra too

//vars
var createMessageButton = document.querySelector('.create-message-button');
var userMessageForm = document.querySelector('#create-message-box')
var userAffirmation;
var userMantra;
var addMessageButton = document.querySelector('#add-message-button');

//event listners
createMessageButton.addEventListener('click', displayUserMessageForm);

addMessageButton.addEventListener('click', function (event) {
  event.preventDefault()
  displayUserMessage()
});

//Functions
function displayUserMessageForm(){
  userMessageForm.classList.remove('hidden')
}

function displayUserMessage(){
  var userMessage = document.getElementById('user-message').value;
  //hide img
  img.classList.add('hidden')
  console.log(userMessage)
  //show message
  message.innerText = userMessage
  message.classList.remove('hidden')
  //if userAffirmation push userMessage value into affirmations array - otherwise push into matra array
  //reassign message to userMessage.value
}