var affirmationButton = document.querySelector("#radio1");
var mantraButton = document.querySelector("#radio2");
var mainButton = document.querySelector("#main button");



affirmationButton.addEventListener("click", function(event) {
    mantraButton.checked = false;
  });
  
  mantraButton.addEventListener("click", function(event) {
    affirmationButton.checked = false;
  });
// Could we do this as one conditional?

mainButton.addEventListener("click", function(event) {
    hidePicture();
  
    if (affirmationButton.checked === false && mantraButton.checked === false) {
      showErrorMessage();
    }
  
    if (affirmationButton.checked === true) {
      showAffirmationMessage();
    }
  
    if (mantraButton.checked === true) {
      showMantraMessage();
    }
  });
// This is an idea for the end goal of the site. None of these are written yet!
