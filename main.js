// goal: when a user selects a message option and then clicks the “Receive Message” button, the user sees a random message from the list of possible messages for that category
// goal: When the message appears, the mediation icon disappears from the message area
//select the button.
// When that button is clicked, get the value of the radio button was clicked.
// if mantra or affirmation was clicked, remove the image
// if mantra was clicked, loop through the mantra array and display the message at random index into the message area
// if affirmation was clicked, loop through the affirmation array and display the random index into the message area.

//QUESTION: Why can't I access the arrays globally?

//QUERYING THE DOM
//form
var messageBtn = document.querySelector(".recieve-message-btn");
var affirmationRadio = document.getElementById("affirmation");
var mantraRadio = document.getElementById("mantra");
//meditation icon
var medIcon = document.querySelector(".meditation-icon");
//message
var messageDisplay = document.querySelector(".message-text");
//hidden btn
var clearBtn = document.querySelector(".clear-btn");
//add my own message btn
var addMyMessage = document.querySelector(".add-message-btn");
//personalized form
var addMessageForm = document.querySelector(".add-message-form");
//submit my message button
var submitMessageBtn = document.querySelector(".submit-msg-btn");
//select dropdown
var messageCategory = document.getElementById("message-category");
//message input field
var messageInput = document.getElementById("message-input");

//EVENT LISTENERS
messageBtn.addEventListener("click", getMessage);
clearBtn.addEventListener("click", clearMessage);
addMyMessage.addEventListener("click", openForm);
submitMessageBtn.addEventListener("click", submitMessage);

//FUNCTIONS

function submitMessage(event) {
  event.preventDefault();
  if (messageCategory.value === "choose" || messageInput.value === "") {
    alert(
      "please select a message type and write your message into the text box :)"
    );
  } else if (messageCategory.value === "affirmation") {
    medIcon.classList.add("hidden");
    messageDisplay.classList.remove("hidden");
    messageDisplay.innerText = messageInput.value;
    affirmationsArr.push(messageInput.value);
  } else if (messageCategory.value === "mantra") {
    medIcon.classList.add("hidden");
    messageDisplay.classList.remove("hidden");
    messageDisplay.innerText = messageInput.value;
    mantrasArr.push(messageInput.value);
  }
  console.log(mantrasArr);
}

function openForm() {
  if (addMessageForm.classList.contains("hide-form")) {
    addMessageForm.classList.remove("hide-form");
    addMyMessage.textContent = "close X";
  } else {
    addMessageForm.classList.add("hide-form");
    addMyMessage.textContent = "Add My Own Message";
  }
}

function clearMessage() {
  messageDisplay.innerText = "";
  clearBtn.classList.add("hidden");
  medIcon.classList.remove("hidden");
}

function getMessage() {
  var randNumMantras = getRandomIndex(mantrasArr);
  var randNumAffirmations = getRandomIndex(affirmationsArr);
  clearBtn.classList.remove("hidden");
  medIcon.classList.add("hidden");
  clearBtn.classList.remove("hidden");
  if (messageDisplay.classList.contains("hidden")) {
    messageDisplay.classList.remove("hidden");
  }
  if (mantraRadio.checked == true) {
    messageDisplay.innerText = mantrasArr[randNumMantras];
  } else if (affirmationRadio.checked == true) {
    messageDisplay.innerText = affirmationsArr[randNumAffirmations];
  } else if (
    affirmationRadio.checked == false &&
    mantraRadio.checked == false
  ) {
    messageDisplay.classList.add("hidden");
    medIcon.classList.remove("hidden");
    clearBtn.classList.add("hidden");
    alert("Please select which type of message you would like to recieve :)");
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
