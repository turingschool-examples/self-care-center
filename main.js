// DOM variables
var receiveButton = document.querySelector(".receive");
var radioAffirmation = document.querySelector("#affirmation");
var radioMantra = document.querySelector("#mantra");
var meditationImg = document.querySelector("img");
var messageDisplaySection = document.querySelector(".message-display");
var removeButton = document.querySelector(".remove");

// Event Listeners
receiveButton.addEventListener("click", displayMessage);
removeButton.addEventListener("click", deleteMessage);

// random array index
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var currentMessage;

function getCurrentMessage(dataModelArray) {
  var workingIndex = getRandomIndex(dataModelArray);
  message = dataModelArray[workingIndex];
  return message;
}

function hideDOMElement(element) {
  element.classList.add("hidden");
}

function showDOMElement(element) {
  element.classList.remove("hidden");
}

function displayMessage() {
  hideDOMElement(meditationImg);
  showDOMElement(removeButton);
  if (radioAffirmation.checked) {
    renderMessage(affirmations);
  } else {
    renderMessage(mantras);
  }
}

function renderMessage(dataModelArray) {
    getCurrentMessage(dataModelArray);
    messageDisplaySection.innerHTML = `
        <section class="display-container" id="${message.id}">
        <h3>${message.quote}</h3>
        </section>`;
}


function renderOriginalDisplay() {
  messageDisplaySection.innerHTML = `
    <section class="display-container">
    <img src="assets/meditate.svg" alt="calming meditation icon in orange" />`;
}

function removeMessage(array) {
  for (let i = 0; i < array.length; i++) {
    if (Number(messageDisplaySection.childNodes[1].id) === array[i].id) {
      array.splice(i, 1);
    }
  }
}

function deleteMessage() {
  if (radioAffirmation.checked) {
    removeMessage(affirmations);
    alert("This affirmation has been removed");
    renderOriginalDisplay();
    hideDOMElement(removeButton);
  } else {
    removeMessage(mantras);
    alert("This mantra has been removed");
    renderOriginalDisplay();
    hideDOMElement(removeButton);
  }
}
