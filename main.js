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
"Don’t let yesterday take up too much of today.",
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


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


// -------------   Show random message     -----------


var viewMessageBox = document.querySelector(".view-message-box");
var viewMessage = document.querySelector(".view-message");
var recieveMessageButton = document.querySelector(".recieve-message-button");
var radioInputs = document.querySelectorAll("input[name='choice']");
var imgMeditate = document.querySelector(".img-meditate");

recieveMessageButton.addEventListener('click', viewRandomMessage);

var currentMantra;
var currentAffirmation;
var selectedValue;

function viewRandomMessage() {
  event.preventDefault();
  viewMessageBox.classList.remove('hidden')

  currentAffirmation = affirmations[getRandomIndex(affirmations)];
  currentMantra = mantras[getRandomIndex(mantras)];


    for (var radioInput of radioInputs) {
        if (radioInput.checked) {

            selectedValue = radioInput.value;

            viewMessage.classList.remove("hidden");
            imgMeditate.classList.add("hidden");
      }
  }


  if (selectedValue === "affirmation"){
    if(!affirmations.length){
      viewMessage.innerText = "All affirmations have been deleted." ;
      console.log("nothinggg is there")
    }
    else {
      viewMessage.innerText = currentAffirmation ;
      deleteButton.classList.remove("hidden");
    console.log(currentAffirmation)
    }


  }
  if (selectedValue === "mantra"){
    if(!mantras.length){
      viewMessage.innerText = "All mantras have been deleted." ;
      console.log("nope")
    }
    else {
      viewMessage.innerText = currentMantra;
      deleteButton.classList.remove("hidden");
      console.log(currentMantra)
    }

  }

}

// -------------   Show random message     -----------

// -------------- Delete message -------------------
var deleteButton = document.querySelector(".delete-button");

deleteButton.addEventListener('click', deleteMessage);

function deleteMessage(){
  // event.preventDefault()

  if (selectedValue === "affirmation"){

    for (i in affirmations){
      if (affirmations[i] === currentAffirmation){
        affirmations.splice(i, 1);
        console.log(currentAffirmation)
        console.log(affirmations.length)
      }
    }
  }

  if (selectedValue === "mantra"){
    for (i in mantras){
      if (mantras[i] === currentMantra){
          mantras.splice(i, 1);
          console.log(currentMantra)
          console.log(mantras.length)
      }
    }
  }

  imgMeditate.classList.remove("hidden");
  viewMessage.classList.add("hidden");
  deleteButton.classList.add("hidden");

  alert("Message has been removed")

}



// -------------   Login page     -----------

var loginButton = document.querySelector(".login-button");
var messagePage = document.querySelector(".message-page");
var loginPage = document.querySelector(".login-page");
var welcomeMsg = document.querySelector(".welcome-msg");
var nameInput = document.querySelector("#login");

loginButton.addEventListener('click', login);

function login(){
  event.preventDefault();
  welcomeMsg.innerText = "Prepare to be enlightened " + nameInput.value + " 😊";
  messagePage.classList.remove("hidden");
  welcomeMsg.classList.remove("hidden");
  loginPage.classList.add("hidden");
}

// -------------   Login page     -----------
