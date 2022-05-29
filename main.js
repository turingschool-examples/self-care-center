
/// Query Selectors ///
var messageButton = document.getElementById("RM");

var quoteOutput = document.getElementById("quote-output");

var whatButton = document.getElementsByClassName("what-button");

/// Event Listeners ///

messageButton.addEventListener('click', displayQuote);

/// Functions ///

function displayQuote() {
  document.getElementById("tacobell").style.visibility = "hidden";
  if (document.getElementById("rb1").checked) {
     return quoteOutput.innerText = affirmations[Math.floor(Math.random() * affirmations.length)];
}
else if (document.getElementById("rb2").checked) {
    return quoteOutput.innerText = mantras[Math.floor(Math.random() * mantras.length)];
  }
}

///function newQuote()
