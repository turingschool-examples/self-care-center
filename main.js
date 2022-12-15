//Arrays
var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
  ]

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don't let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
]

var currentMessageArray;
var currentMessageIndex;


//Query Seletors
var messageButton = document.getElementById("message-button");
var removeButton = document.getElementById("remove-button");
var affirmationsRadioButton = document.getElementById("affirmation-radio");
var mantrasRadioButton = document.getElementById("mantra-radio");
var messageInput = document.getElementById("message-input");
var imageBox = document.querySelector(".image-box");
var textBox = document.querySelector(".text-box");


//Event Listeners
messageButton.addEventListener("click", selectMessageType)
removeButton.addEventListener("click", deleteMessage)


//Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function selectMessageType(event){
  event.preventDefault()
  if(affirmationsRadioButton.checked){
    showAffirmation()
  }else{
    showMantra()
  }
}

function showAffirmation(){
  var currentAffirmation = affirmations[getRandomIndex(affirmations)];
  currentMessageArray = affirmations
  currentMessageIndex = affirmations.indexOf(currentAffirmation)
  textBox.classList.remove('hidden');
  imageBox.classList.add('hidden');
  messageInput.innerText = currentAffirmation
}

function showMantra(){
  var currentMantra = mantras[getRandomIndex(mantras)];
  currentMessageArray = mantras
  currentMessageIndex = mantras.indexOf(currentMantra)
  textBox.classList.remove('hidden');
  imageBox.classList.add('hidden');
  messageInput.innerText = currentMantra;
}

function deleteMessage(){
  currentMessageArray.splice(currentMessageIndex, 1)
  if(currentMessageArray === affirmations && currentMessageArray.length >= 1){
    showAffirmation()
    alert("This message Has Been removed to improve your emotional well-being.")
  } else if (currentMessageArray === affirmations && currentMessageArray.length === 0){
    messageInput.innerText = "Have you considered goat yoga instead? 🐐🧘🏽‍♂️"
    return alert("NO MORE INSPIRATION FOUND.")
  } else if(currentMessageArray === mantras && currentMessageArray.length >= 1){
    showMantra()
    alert("This message Has Been removed to improve your emotional well-being.")
  } else if (currentMessageArray === mantras && currentMessageArray.length === 0){
    messageInput.innerText = "I hear scream therapy works wonders. 🙀"
    return alert("NO MORE INSPIRATION FOUND.")
  }
}