// ===== QUERY SELECTORS =====
var receiveMessage = document.querySelector(".message-button");

// ===== EVENT LISTENERS AND DATA MODEL =====
window.addEventListener("load", createDataModel);
var currentMessage;
var messages = [];

receiveMessage.addEventListener("click", displayRandomMessage);

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
  console.log(messages);
  return messages;
}

function displayRandomMessage() {
  currentMessage = randomMessage(messages);
  console.log(currentMessage);
}

function randomMessage(messages) {
  var random = Math.floor(Math.random() * messages.length + 1);
  return messages[random];
}
