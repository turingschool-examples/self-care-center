
/// Query Selectors ///
var messageButton = document.getElementById("RM");

var createButton = document.getElementById("CM");

var quoteOutput = document.getElementById("quote-output");

var whatButton = document.getElementsByClassName("what-button");

var makeOwn = document.querySelector('.make-own')

/// Event Listeners ///

messageButton.addEventListener('click', displayQuote);

createButton.addEventListener('click', newQuote);

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
}
function newQuote() {
  document.getElementById("tacobell").style.visibility = "hidden";
  makeOwn.classList.remove('hidden');
  quoteOutput.innerText = "";
}
