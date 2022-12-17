var affirmations = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", 
"I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.",
"I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", 
"Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."]


var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don\'t let yesterday take up too much of today.", "Every day is a second chance.", 
"Tell the truth and love everyone.", "I am free from sadness.", "I am free from sadness.", " I am enough.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", 
"I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", 
"Onward and upward.", " I am the sky, the rest is weather."]


var hideTopinfo = document.querySelector(".three-buttons")
var receiveMessageButton = document.querySelector(".message-button")
var yogi = document.querySelector(".dude")
var affirmationButton = document.querySelector(".first-button")
var mantraButton = document.querySelector(".second-button")
var displaySaying = document.querySelector(".saying")
var ownMessageButton = document.querySelector(".own-message-button")
var userForm = document.querySelector(".view-form")
var userSubmitButton = document.querySelector(".submit-own-message")
var userAffirmationSaying = document.querySelector(".user-affirmation")
var userMantraSaying = document.querySelector(".user-mantra")
var userAffirmationButton = document.querySelector(".user-abutton")
var UserMantraButton = document.querySelector(".user-mbutton")

receiveMessageButton.addEventListener("click", generateMessage)
ownMessageButton.addEventListener("click", createOwnMessage)
userSubmitButton.addEventListener("click", displayUserMessage)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateMessage() {
  if (affirmationButton.checked) {
    displaySaying.innerText = affirmations[getRandomIndex(affirmations)]                  
    yogi.classList.add("hidden")
  } else if (mantraButton.checked) {
    displaySaying.innerText = mantras[getRandomIndex(mantras)]
    yogi.classList.add("hidden")
  } else {
    displaySaying.innerText = ("Please choose Affirmation or Mantra message. Namaste. 🧘 ");
    yogi.classList.add("hidden")
  }                                                         
} 

function createOwnMessage() {
  yogi.classList.add("hidden")
  userForm.classList.remove("hidden")
  hideTopinfo.classList.add("hidden")
  displaySaying.classList.add("hidden")
}


function displayUserMessage() {
event.preventDefault()
  if (userAffirmationButton.checked) {
    displaySaying.innerText = userAffirmationSaying.value
    affirmations.push(userAffirmationSaying.value)
    userForm.classList.add("hidden")
    displaySaying.classList.remove("hidden")
    hideTopinfo.classList.remove("hidden")
  } else if (UserMantraButton.checked) {
    displaySaying.innerText = userMantraSaying.value
    mantras.push(userMantraSaying.value)
    userForm.classList.add("hidden")
    displaySaying.classList.remove("hidden")
    hideTopinfo.classList.remove("hidden")
  } else  {
    alert("Please choose Affirmation or Mantra message. Namaste. 🧘 ");
  }
}