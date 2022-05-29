
/// Query Selectors ///
var messageButton = document.getElementById("RM");

var createButton = document.getElementById("CM");

var sendButton = document.getElementById("SM");

var quoteOutput = document.getElementById("quote-output");

var enterMessage = document.getElementById("enter-message")

var whatButton = document.getElementsByClassName("what-button");

var makeOwn = document.querySelector('.make-own')



/// Event Listeners ///

messageButton.addEventListener('click', displayQuote);

createButton.addEventListener('click', newQuote);

sendButton.addEventListener('click', sendMessage);


/// Functions ///

function displayQuote() {
  document.getElementById("tacobell").style.visibility = "hidden";
  makeOwn.classList.add('hidden');
  if (document.getElementById("rb1").checked) {
     return quoteOutput.innerText = affirmations[Math.floor(Math.random() * affirmations.length)];
}
else if (document.getElementById("rb2").checked) {
    return quoteOutput.innerText = mantras[Math.floor(Math.random() * mantras.length)];
  }
  else {
    quoteOutput.innerText = "please select an affirmation or mantra"
  }
}
function newQuote() {
  document.getElementById("tacobell").style.visibility = "hidden";
  makeOwn.classList.remove('hidden');
  quoteOutput.innerText = "";
}

function sendMessage() {
  makeOwn.classList.add('hidden');
  quoteOutput.innerText = enterMessage.value
  if (document.getElementById("rb1").checked) {
    return affirmations.push(enterMessage.value)
  } else if (document.getElementById("rb2").checked) {
    return mantras.push(enterMessage.value)
  }
}
