// When a user selects a message option and then clicks the “Receive Message” button,
//the user sees a random message from the list of possible messages for that category
// When the message appears, the mediation icon disappears from the message area
// need: access to
    // radio button1, radio button 2, receive message button, meditation image,
    // display messsage
var receiveMessageBtn = document.querySelector(".message-button");
var affirmationBtn = document.querySelector(".radio-button1");
var mantraBtn = document.querySelector(".radio-button2");
var image = document.querySelector(".meditation-image");
var message = document.querySelector(".display-message");
var loginBtn = document.querySelector(".login-button");
var mainPage = document.querySelector(".main-page");
var loginPage = document.querySelector(".login-page");
var loginName = document.getElementById('login-field');
var greeting = document.querySelector('.greeting');

receiveMessageBtn.addEventListener("click", generateDisplayMessage);
loginBtn.addEventListener("click", displayName)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateDisplayMessage() {

  var affirmationMessage = affirmations[getRandomIndex(affirmations)];
  var mantraMessage = mantras[getRandomIndex(mantras)];

    if (affirmationBtn.checked) {
      message.innerText = affirmationMessage;
  } else if (mantraBtn.checked) {
      message.innerText = mantraMessage;
      console.log(message.innerText);
  }

  hideImage();
  unhideMessage();
}

function displayName() {
  var username = loginName.value
  //replace the inner text of greeting with new interpolated statement
  greeting.innerText = `Hello, ${username}! Great job practicing self care today.`
  unhideMainPage();
  hideLoginPage();
}

function hideImage() {
  image.classList.add('hidden');
}

function unhideMessage() {
  message.classList.remove('hidden');
}

function unhideMainPage() {
  mainPage.classList.remove('hidden');
}

function hideLoginPage() {
  loginPage.classList.add('hidden');
}
