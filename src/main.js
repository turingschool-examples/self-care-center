// ===== QUERY SELECTORS =====
var receiveMessage = document.querySelector(".message-button");

var zenImage = document.querySelector(".meditation-emoji");

var meditationMessage = document.querySelector(".meditation-message");

// ===== EVENT LISTENERS AND DATA MODEL =====
window.addEventListener("load", createDataModel);
var currentMessage;
var messages = [];

receiveMessage.addEventListener("click", function () {
  var selectionMade = selectionCheck();
  if (selectionMade === false) {
    hideElement(zenImage);
    displayRandomMessage();
  }
});

// ===== FUNCTIONS =====

function createDataModel() {
  // GDcP - C
  // create an array of objects (mantras and affirmations)
  // working with arrays, will be creating objects with properties of (type, message, favorite, id - length or date now)
  for (let i = 0; i < affirmations.length; i++) {
    var message = {
      type: "affirmation",
      message: affirmations[i],
      favorite: false,
      id: Date.now(),
    };
    messages.push(message);
  }
  for (let i = 0; i < mantras.length; i++) {
    var message = {
      type: "mantra",
      message: mantras[i],
      favorite: false,
      id: Date.now(),
    };
    messages.push(message);
  }
  return messages;
}

function displayRandomMessage() {
  var formSelection = document.querySelector('input[name="formInput"]:checked');
  currentMessage = randomMessage(messages, formSelection.value);
  displayMessage();
}

function randomMessage(messages, type) {
  var messageType = [];
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].type === type) {
      messageType.push(messages[i]);
    }
  }
  var random = Math.floor(Math.random() * messageType.length + 1);
  return messageType[random];
}

function displayMessage() {
  // add a paragraph element inside meditation-message
  var message = currentMessage.message;
  meditationMessage.innerHTML = `<p class="message">${message}</p>`;
}

function selectionCheck() {
  var formSelection = document.querySelector('input[name="formInput"]:checked');
  try {
    if (formSelection === null) throw "Please make a selection";
    return false;
  } catch (err) {
    currentMessage = err;
    meditationMessage.innerHTML = `<p class="errorMessage">${currentMessage}</p>`;
  }
}

function hideElement(selector) {
  selector.classList.toggle("hidden");
  // console.log(selector);
}
