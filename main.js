// ** Variables ** //
// ** Button Variables ** //
var affirmationButton = document.getElementById("affirmation");
var mantraButton = document.getElementById("mantra");
var receiveButton = document.querySelector(".receive");
var enterButton = document.querySelector(".enter");

// ** Variables For various appearing and disappearing elements ** //
var buddha = document.querySelector(".buddha");
var whichHeader = document.querySelector(".which");
var buttonSection = document.querySelector(".button");
var loginSection = document.querySelector(".login");
var messagesSection = document.querySelector(".messages");
var titleSection = document.querySelector(".title");

// ** Variables for User Input, Custom Message, and Affirmantion-Mantra Messages ** //
var user = document.querySelector(".user");
var userWelcome = document.querySelector(".userWelcome");
var message = document.querySelector(".message");

// ** Event Listeners ** //
receiveButton.onclick = displayMessage;
mantraButton.onclick = unclickAffirmation;
affirmationButton.onclick = unclickMantra;
onload = function () {
    whichHeader.style.display = "none";
    buttonSection.style.display = "none";
    messagesSection.style.display = "none"
}
enterButton.onclick = enter;

// ** Function to Only Allow Entry if Name Entered ** //
function enter() {
    if (user.value) {
    titleSection.style.setProperty("padding-bottom","0px");
    userWelcome.innerText = `Hi ${user.value}, welcome to a place to help you on your journey of inner peace.`
    whichHeader.style.display = "block";
    buttonSection.style.display = "flex";
    messagesSection.style.display = "flex";
    loginSection.style.display = "none"
    }
}

// ** Functions to Prevent Selecting Both Radio Buttons At Same Time ** //
  function unclickAffirmation() {
    affirmationButton.checked = false
}
  function unclickMantra() {
    mantraButton.checked = false
}

// ** Choosing Random Message From Arrays ** //
function chooseAffirmation() {
    return affirmations[Math.floor(Math.random() * affirmations.length)] 
}

function chooseMantra() {
    return mantras[Math.floor(Math.random() * mantras.length)]
}

// ** Adding Random Message to Buddha Box Based on Selected Radio Button ** //
function displayMessage() {
    buddha.style.display = "none";
    message.style.setProperty("display","block");
    if(affirmationButton.checked) {
        message.innerText = chooseAffirmation()          
    } else if(mantraButton.checked) {
        message.innerText = chooseMantra()            
    } else {
        message.innerText = `You can't receive, if you don't choose ${user.value}!`       
    }
}