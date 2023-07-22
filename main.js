var affirmationButton = document.querySelector("#radio1");
var mantraButton = document.querySelector("#radio2");




affirmationButton.addEventListener("click", function(event) {
mantraButton.checked = false;
});
mantraButton.addEventListener("click", function(event) {
affirmationButton.checked = false;
});
// Could we do this as one conditional?
