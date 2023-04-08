//Data Model + Variables
var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather"];
var affirmations = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."];

//Query Selectors
var generateMessageButton = document.querySelector('#generate-new-message-button');
var affirmationCheckbox = document.querySelector('#affirmation');
var messageDisplayBox = document.querySelector('#display-message-box')
var img = document.querySelector('#meditation-pic')
var message = document.querySelector('.message')
var createMessageButton = document.querySelector('.create-message-button');
var userMessageForm = document.querySelector('#create-message-box');
var userAffirmation = document.querySelector('#user-affirmation');
var addMessageButton = document.querySelector('#add-message-button');

//Event Listeners
generateMessageButton.addEventListener('click', function (event) {
  event.preventDefault()
  displayRandomMessage()
})
createMessageButton.addEventListener('click', displayUserMessageForm);
addMessageButton.addEventListener('click', function (event) {
  event.preventDefault()
  displayUserMessage()
});

//Functions
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

function displayUserMessageForm(){
  userMessageForm.classList.remove('hidden')
}

// function displayUserMessage(){
//   var userMessage = document.getElementById('user-message').value;
//   message.innerText = userMessage
//   img.classList.add('hidden')
//   message.classList.remove('hidden')
//   saveUserMessage(userMessage)
// }

function displayUserMessage(){
  var userMessage = document.getElementById('user-message').value;
  if (userMessage === ''){
    displayError()
  } else {
    message.innerText = userMessage
    img.classList.add('hidden')
    message.classList.remove('hidden')
    saveUserMessage(userMessage)
  }
}

function saveUserMessage(userMessage){
  if(userAffirmation.checked) {
    affirmations.push(userMessage)
  } else {
    mantras.push(userMessage)
  }
  console.log(mantras)
  console.log(affirmations)
}

function displayError(){
  window.alert("Please create your message!")
}
